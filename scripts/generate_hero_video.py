import os
import sys
import time
import math
import subprocess
import numpy as np
from PIL import Image, ImageDraw, ImageFilter
import imageio_ffmpeg

def create_hero_video():
    print("=== Teciaura Technologies Hero Video Generator ===")
    t_start = time.time()

    # Paths
    base_image_path = r"C:\Users\hp\.gemini\antigravity\brain\73d995bd-79c7-44c4-9380-affcfb5f5053\hero_bg_clean_1791014820049.jpg"
    public_dir = os.path.abspath("public")
    os.makedirs(public_dir, exist_ok=True)
    
    output_mp4 = os.path.join(public_dir, "hero-tech-bg.mp4")
    output_webm = os.path.join(public_dir, "hero-tech-bg.webm")
    output_poster = os.path.join(public_dir, "hero-tech-poster.jpg")
    output_fallback = os.path.join(public_dir, "hero-tech-bg-mobile.jpg")

    ffmpeg_exe = imageio_ffmpeg.get_ffmpeg_exe()
    print(f"Using FFmpeg: {ffmpeg_exe}")

    # Video specs: 12 seconds, 30 fps = 360 frames
    width = 1920
    height = 1080
    fps = 30
    duration_sec = 12
    total_frames = fps * duration_sec

    print(f"Resolution: {width}x{height}, FPS: {fps}, Duration: {duration_sec}s ({total_frames} frames)")

    # 1. Load base image and scale to 1920x1080
    orig_img = Image.open(base_image_path).convert("RGB")
    base_1080p = orig_img.resize((width, height), Image.Resampling.LANCZOS)
    base_arr = np.array(base_1080p, dtype=np.float32)

    # Save initial poster image
    base_1080p.save(output_poster, quality=95)
    base_1080p.save(output_fallback, quality=92)
    print(f"Saved poster image: {output_poster}")

    # 2. Precompute Globe Geometry
    # Globe center & radius in 1920x1080
    gcx, gcy = 1325.0, 527.0
    gr = 196.0

    # Grid for the globe
    Y_grid, X_grid = np.ogrid[:height, :width]
    dist_sq = (X_grid - gcx)**2 + (Y_grid - gcy)**2
    globe_mask = dist_sq < (gr**2)
    
    # Spherical coordinates for globe interior
    z_sq = np.maximum(0.0, gr**2 - dist_sq)
    Z_sphere = np.sqrt(z_sq)
    lon_sphere = np.arctan2(X_grid - gcx, Z_sphere)
    lat_sphere = np.arcsin(np.clip((gcy - Y_grid) / gr, -1.0, 1.0))
    dist_norm = np.sqrt(dist_sq) / gr

    # Fresnel rim factor (for glowing atmosphere edge)
    fresnel = np.where(globe_mask, np.clip((dist_norm ** 4.0), 0.0, 1.0), 0.0)[:, :, np.newaxis]

    # Precompute spline curves for network data packets
    def get_bezier_curve(p0, p1, p2, num_pts=200):
        t = np.linspace(0, 1, num_pts)[:, np.newaxis]
        return (1 - t)**2 * p0 + 2 * (1 - t) * t * p1 + t**2 * p2

    curves = [
        # Cloud to Globe
        get_bezier_curve(np.array([1380, 220]), np.array([1390, 380]), np.array([1325, 420])),
        # AI to Globe
        get_bezier_curve(np.array([980, 350]), np.array([1120, 390]), np.array([1180, 480])),
        # DevOps to Globe
        get_bezier_curve(np.array([980, 740]), np.array([1100, 680]), np.array([1180, 580])),
        # Development to Globe
        get_bezier_curve(np.array([1720, 390]), np.array([1550, 420]), np.array([1480, 490])),
        # Monitoring to Globe
        get_bezier_curve(np.array([1730, 780]), np.array([1580, 700]), np.array([1470, 580])),
        # AI to DevOps inter-connection
        get_bezier_curve(np.array([980, 380]), np.array([930, 560]), np.array([980, 710])),
        # Highway stream Left
        get_bezier_curve(np.array([1260, 930]), np.array([1150, 980]), np.array([880, 1080])),
        # Highway stream Center-Right
        get_bezier_curve(np.array([1325, 930]), np.array([1420, 980]), np.array([1560, 1080])),
        # Highway stream Far-Right
        get_bezier_curve(np.array([1340, 930]), np.array([1520, 1000]), np.array([1780, 1080])),
    ]

    # Particles for atmospheric cyber dust
    np.random.seed(42)
    num_dust = 60
    dust_x = np.random.uniform(700, 1900, num_dust)
    dust_y_base = np.random.uniform(100, 1050, num_dust)
    dust_speeds = np.random.uniform(40, 120, num_dust)
    dust_sizes = np.random.uniform(1.5, 3.5, num_dust)
    dust_alphas = np.random.uniform(0.3, 0.7, num_dust)

    # City lights coordinates for subtle twinkling
    num_city_lights = 45
    city_lx = np.random.uniform(750, 1850, num_city_lights).astype(int)
    city_ly = np.random.uniform(850, 1060, num_city_lights).astype(int)
    city_phase = np.random.uniform(0, 2*np.pi, num_city_lights)
    city_freq = np.random.choice([1, 2, 3], num_city_lights)

    # Setup FFmpeg rawvideo pipe for MP4
    cmd_mp4 = [
        ffmpeg_exe, "-y",
        "-f", "rawvideo",
        "-vcodec", "rawvideo",
        "-s", f"{width}x{height}",
        "-pix_fmt", "rgb24",
        "-r", str(fps),
        "-i", "-",
        "-an",
        "-c:v", "libx264",
        "-pix_fmt", "yuv420p",
        "-crf", "20",
        "-preset", "medium",
        "-movflags", "+faststart",
        output_mp4
    ]

    pipe_mp4 = subprocess.Popen(cmd_mp4, stdin=subprocess.PIPE, stderr=subprocess.DEVNULL)
    print("FFmpeg MP4 pipeline initialized. Rendering frames...", flush=True)

    for f_idx in range(total_frames):
        t_norm = f_idx / total_frames  # 0.0 to 1.0 exactly
        tau = 2 * math.pi * t_norm

        # Start with a copy of the base image array
        frame_arr = base_arr.copy()

        # --- 1. GLOBE 3D ROTATION & DYNAMICS ---
        # Rotate longitude
        rot_lon = lon_sphere + tau
        
        # Vectorized latitude & longitude grid lines
        grid_lon = (np.cos(rot_lon * 12.0) > 0.94).astype(np.float32)
        grid_lat = (np.cos(lat_sphere * 8.0) > 0.95).astype(np.float32)
        grid = np.maximum(grid_lon, grid_lat) * globe_mask

        # Twinkling digital nodes on the globe surface
        nodes = (np.sin(rot_lon * 20.0 + lat_sphere * 10.0) * np.cos(rot_lon * 15.0 - lat_sphere * 6.0) > 0.86).astype(np.float32)
        nodes_pulse = (0.6 + 0.4 * np.sin(tau * 3.0 + lat_sphere * 5.0)) * nodes * globe_mask

        # Cyan / Blue color for digital grid & nodes
        grid_color = np.array([0.0, 200.0, 232.0], dtype=np.float32)
        node_color = np.array([220.0, 245.0, 255.0], dtype=np.float32)
        rim_color  = np.array([0.0, 180.0, 255.0], dtype=np.float32)

        # Apply grid
        frame_arr += grid[:, :, np.newaxis] * grid_color * 0.45
        # Apply digital nodes
        frame_arr += nodes_pulse[:, :, np.newaxis] * node_color * 0.70
        # Apply atmospheric Fresnel rim glow
        frame_arr += fresnel * rim_color * (0.35 + 0.15 * math.sin(tau * 2.0))

        # Convert to PIL Image for drawing antialiased vector elements
        img = Image.fromarray(np.clip(frame_arr, 0, 255).astype(np.uint8))
        draw = ImageDraw.Draw(img, "RGBA")

        # --- 2. ORBITING RINGS AROUND GLOBE ---
        # Ring 1: Tilted at +22 degrees
        orbit_angle = tau * 1.5
        for ring_idx, (r_a, r_b, tilt, speed, color) in enumerate([
            (240, 95, math.radians(22), 1.0, (0, 200, 232, 220)),
            (265, 80, math.radians(-32), -1.2, (22, 119, 255, 200))
        ]):
            # Position of satellite on the ellipse
            theta = tau * speed * 2 + ring_idx * math.pi
            ex = r_a * math.cos(theta)
            ey = r_b * math.sin(theta)
            # Rotate by tilt
            rx = ex * math.cos(tilt) - ey * math.sin(tilt) + gcx
            ry = ex * math.sin(tilt) + ey * math.cos(tilt) + gcy

            # Draw glowing satellite
            draw.ellipse([rx - 4, ry - 4, rx + 4, ry + 4], fill=color)
            draw.ellipse([rx - 1.5, ry - 1.5, rx + 1.5, ry + 1.5], fill=(255, 255, 255, 255))
            # Trail
            for trail_i in range(1, 5):
                t_sub = theta - trail_i * 0.08
                tx = (r_a * math.cos(t_sub)) * math.cos(tilt) - (r_b * math.sin(t_sub)) * math.sin(tilt) + gcx
                ty = (r_a * math.cos(t_sub)) * math.sin(tilt) + (r_b * math.sin(t_sub)) * math.cos(tilt) + gcy
                t_alpha = int(color[3] * (1.0 - trail_i / 5.0))
                draw.ellipse([tx - 2, ty - 2, tx + 2, ty + 2], fill=(color[0], color[1], color[2], t_alpha))

        # --- 3. TRAVELING DATA PACKETS ON NETWORK CURVES ---
        for c_idx, curve in enumerate(curves):
            num_pts = len(curve)
            # 2 packets per curve at different phases
            for p_sub in [0.0, 0.5]:
                progress = (t_norm * 1.5 + p_sub + c_idx * 0.12) % 1.0
                pt_idx = int(progress * (num_pts - 1))
                px, py = curve[pt_idx]

                # Draw packet glow
                draw.ellipse([px - 5, py - 5, px + 5, py + 5], fill=(0, 200, 232, 120))
                draw.ellipse([px - 2.5, py - 2.5, px + 2.5, py + 2.5], fill=(255, 255, 255, 230))

                # Trailing tail (3 trailing points)
                for tr in range(1, 6):
                    tr_idx = max(0, min(num_pts - 1, pt_idx - tr * 3))
                    tx, ty = curve[tr_idx]
                    tail_alpha = int(140 * (1.0 - tr / 6.0))
                    draw.ellipse([tx - 2, ty - 2, tx + 2, ty + 2], fill=(22, 119, 255, tail_alpha))

        # --- 4. DEVOPS CI/CD INFINITY LOOP GLOW ---
        # DevOps card infinity loop near (1020, 775)
        lem_cx, lem_cy = 1018, 775
        lem_a = 28.0
        lem_t = tau * 2.0
        denom = 1.0 + math.sin(lem_t)**2
        lx = lem_cx + (lem_a * math.cos(lem_t)) / denom
        ly = lem_cy + (lem_a * math.sin(lem_t) * math.cos(lem_t)) / denom
        draw.ellipse([lx - 4, ly - 4, lx + 4, ly + 4], fill=(0, 200, 232, 180))
        draw.ellipse([lx - 2, ly - 2, lx + 2, ly + 2], fill=(255, 255, 255, 255))

        # --- 5. AI CARD BARS & PROCESSING GLOW ---
        # Small bar chart in AI card around (1055, 375)
        bar_x_start = 1042
        for b_i in range(4):
            bx = bar_x_start + b_i * 7
            by_base = 385
            # Oscillate bar height subtly
            bh = 12 + int(6 * math.sin(tau * 2.0 + b_i * 1.2))
            draw.rectangle([bx, by_base - bh, bx + 4, by_base], fill=(0, 200, 232, 220))

        # --- 6. DEVELOPMENT TERMINAL CURSOR ---
        # Terminal cursor in Development card around (1760, 420)
        cursor_x, cursor_y = 1756, 412
        if math.sin(tau * 4.0) > 0:
            draw.rectangle([cursor_x, cursor_y, cursor_x + 5, cursor_y + 10], fill=(0, 200, 232, 240))

        # --- 7. MONITORING CHART MOVING SWEEP WAVE ---
        # Chart in Monitoring card around (1770, 785)
        sweep_x = 1720 + (t_norm * 110) % 110
        draw.line([sweep_x, 775, sweep_x, 815], fill=(0, 200, 232, 160), width=2)
        draw.ellipse([sweep_x - 3, 795 - 3, sweep_x + 3, 795 + 3], fill=(255, 255, 255, 240))

        # --- 8. TWINKLING CITY LIGHTS & ATMOSPHERIC DUST ---
        for i in range(num_city_lights):
            cl_alpha = int(120 + 100 * math.sin(tau * city_freq[i] + city_phase[i]))
            cx_i = city_lx[i]
            cy_i = city_ly[i]
            draw.ellipse([cx_i - 1.5, cy_i - 1.5, cx_i + 1.5, cy_i + 1.5], fill=(255, 220, 160, cl_alpha))

        # Cyber dust particles floating upward
        for d_i in range(num_dust):
            dx_i = dust_x[d_i] + 8 * math.sin(tau + d_i)
            dy_i = (dust_y_base[d_i] - (t_norm * dust_speeds[d_i] * 12)) % 950 + 80
            ds = dust_sizes[d_i]
            d_alpha = int(dust_alphas[d_i] * 200 * (0.8 + 0.2 * math.sin(tau * 2 + d_i)))
            draw.ellipse([dx_i - ds, dy_i - ds, dx_i + ds, dy_i + ds], fill=(0, 200, 232, d_alpha))

        # --- 9. SUBTLE CINEMATIC CAMERA PUSH & HORIZONTAL DRIFT ---
        # Zoom from 1.000 to 1.022 seamlessly
        zoom = 1.000 + 0.022 * (0.5 - 0.5 * math.cos(tau))
        pan_x = 5.0 * math.sin(tau)

        if zoom > 1.001 or abs(pan_x) > 0.1:
            zw = int(width / zoom)
            zh = int(height / zoom)
            zx = int((width - zw) / 2 + pan_x)
            zy = int((height - zh) / 2)
            # Crop and resize back to 1920x1080
            img = img.crop((zx, zy, zx + zw, zy + zh)).resize((width, height), Image.Resampling.BILINEAR)

        # Write RGB bytes to FFmpeg stdin
        raw_bytes = img.tobytes()
        pipe_mp4.stdin.write(raw_bytes)

        if (f_idx + 1) % 30 == 0 or f_idx == total_frames - 1:
            print(f"Rendered {f_idx + 1}/{total_frames} frames ({(f_idx + 1)/total_frames*100:.1f}%)", flush=True)

    # Close pipe
    pipe_mp4.stdin.close()
    pipe_mp4.wait()
    print(f"MP4 encoding complete! File size: {os.path.getsize(output_mp4) / (1024*1024):.2f} MB", flush=True)

    # 10. Encode WebM from the pristine MP4 using libvpx-vp9
    print("Encoding WebM (VP9) from MP4 for modern browsers...", flush=True)
    cmd_webm = [
        ffmpeg_exe, "-y",
        "-i", output_mp4,
        "-c:v", "libvpx-vp9",
        "-crf", "32",
        "-b:v", "0",
        "-deadline", "realtime",
        "-cpu-used", "4",
        "-row-mt", "1",
        output_webm
    ]
    subprocess.run(cmd_webm, check=True)
    print(f"WebM encoding complete! File size: {os.path.getsize(output_webm) / (1024*1024):.2f} MB", flush=True)

    print(f"=== ALL ASSETS GENERATED IN {time.time() - t_start:.2f}s ===", flush=True)

if __name__ == "__main__":
    create_hero_video()
