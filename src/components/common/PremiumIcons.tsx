import React, { useId } from 'react';

export interface PremiumIconProps {
  className?: string;
  size?: number | string;
}

/**
 * PremiumIconBadge: High-end glassmorphic container with specular reflection,
 * neon ambient glow and micro-border for presentation of premium icons.
 */
export const PremiumIconBadge: React.FC<{
  children: React.ReactNode;
  variant?: 'cyan' | 'blue' | 'indigo' | 'emerald' | 'purple' | 'amber';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}> = ({ children, variant = 'cyan', size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'w-9 h-9 rounded-xl',
    md: 'w-11 h-11 rounded-2xl',
    lg: 'w-14 h-14 rounded-2xl',
    xl: 'w-16 h-16 rounded-3xl',
  }[size];

  const variantGlow = {
    cyan: 'bg-brand-cyanAccent/10 border-brand-cyanAccent/30 shadow-[0_0_25px_rgba(0,200,232,0.18),inset_0_1px_1px_rgba(255,255,255,0.2)] group-hover:border-brand-cyanAccent/70 group-hover:shadow-[0_0_35px_rgba(0,200,232,0.35)]',
    blue: 'bg-brand-electricBlue/10 border-brand-electricBlue/30 shadow-[0_0_25px_rgba(0,122,255,0.18),inset_0_1px_1px_rgba(255,255,255,0.2)] group-hover:border-brand-electricBlue/70 group-hover:shadow-[0_0_35px_rgba(0,122,255,0.35)]',
    indigo: 'bg-indigo-500/10 border-indigo-500/30 shadow-[0_0_25px_rgba(99,102,241,0.18),inset_0_1px_1px_rgba(255,255,255,0.2)] group-hover:border-indigo-500/70 group-hover:shadow-[0_0_35px_rgba(99,102,241,0.35)]',
    emerald: 'bg-emerald-500/10 border-emerald-500/30 shadow-[0_0_25px_rgba(16,185,129,0.18),inset_0_1px_1px_rgba(255,255,255,0.2)] group-hover:border-emerald-500/70 group-hover:shadow-[0_0_35px_rgba(16,185,129,0.35)]',
    purple: 'bg-purple-500/10 border-purple-500/30 shadow-[0_0_25px_rgba(168,85,247,0.18),inset_0_1px_1px_rgba(255,255,255,0.2)] group-hover:border-purple-500/70 group-hover:shadow-[0_0_35px_rgba(168,85,247,0.35)]',
    amber: 'bg-amber-500/10 border-amber-500/30 shadow-[0_0_25px_rgba(245,158,11,0.18),inset_0_1px_1px_rgba(255,255,255,0.2)] group-hover:border-amber-500/70 group-hover:shadow-[0_0_35px_rgba(245,158,11,0.35)]',
  }[variant];

  return (
    <div
      className={`relative flex items-center justify-center flex-shrink-0 backdrop-blur-xl border transition-all duration-300 ${sizeClasses} ${variantGlow} ${className}`}
    >
      {/* Specular corner highlight */}
      <div className="absolute top-0.5 inset-x-2 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none rounded-full" />
      {children}
    </div>
  );
};

// ============================================================================
// 1. CLOUD & DEVOPS / AWS CLOUD
// ============================================================================
export const PremiumCloudIcon: React.FC<PremiumIconProps> = ({ className = "w-6 h-6" }) => {
  const id = useId();
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={`${id}-grad1`} x1="4" y1="6" x2="28" y2="26" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#00C8E8" />
          <stop offset="50%" stopColor="#007AFF" />
          <stop offset="100%" stopColor="#4F46E5" />
        </linearGradient>
        <linearGradient id={`${id}-fill`} x1="16" y1="6" x2="16" y2="24" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#00C8E8" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#007AFF" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      {/* Cloud main body */}
      <path
        d="M9.5 24C6.46 24 4 21.54 4 18.5C4 15.68 6.11 13.35 8.87 13.04C9.53 8.5 13.43 5 18.17 5C23.41 5 27.67 9.26 27.67 14.5C27.67 14.77 27.66 15.04 27.63 15.31C28.98 16.29 29.83 17.84 29.83 19.58C29.83 22.02 27.85 24 25.42 24H9.5Z"
        fill={`url(#${id}-fill)`}
        stroke={`url(#${id}-grad1)`}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Internal micro-infrastructure circuit rack */}
      <rect x="11" y="15" width="10" height="2" rx="1" fill="#00C8E8" />
      <rect x="11" y="19" width="7" height="2" rx="1" fill="#007AFF" />
      <circle cx="23" cy="16" r="1" fill="#34D399" />
      <circle cx="20" cy="20" r="1" fill="#38BDF8" />
      {/* Downlink pulse dots */}
      <circle cx="16" cy="28" r="1.25" fill="#00C8E8" />
      <path d="M16 24V26" stroke="#00C8E8" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
};

// ============================================================================
// 2. CPU / COMPUTE / HIGH-PERFORMANCE PROCESSOR
// ============================================================================
export const PremiumCpuIcon: React.FC<PremiumIconProps> = ({ className = "w-6 h-6" }) => {
  const id = useId();
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={`${id}-grad`} x1="6" y1="6" x2="26" y2="26" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="50%" stopColor="#007AFF" />
          <stop offset="100%" stopColor="#818CF8" />
        </linearGradient>
      </defs>
      {/* Outer Die Housing */}
      <rect x="6" y="6" width="20" height="20" rx="4" fill="#091428" stroke={`url(#${id}-grad)`} strokeWidth="1.75" />
      {/* Silicon Core */}
      <rect x="11" y="11" width="10" height="10" rx="2" fill="url(#${id}-grad)" fillOpacity="0.2" stroke="#00C8E8" strokeWidth="1.25" />
      {/* Core Quad Matrix */}
      <rect x="13" y="13" width="2.5" height="2.5" rx="0.5" fill="#38BDF8" />
      <rect x="16.5" y="13" width="2.5" height="2.5" rx="0.5" fill="#38BDF8" />
      <rect x="13" y="16.5" width="2.5" height="2.5" rx="0.5" fill="#38BDF8" />
      <rect x="16.5" y="16.5" width="2.5" height="2.5" rx="0.5" fill="#34D399" />
      {/* Pin buses Top & Bottom */}
      <path d="M10 2V6M16 2V6M22 2V6M10 26V30M16 26V30M22 26V30" stroke="#00C8E8" strokeWidth="1.5" strokeLinecap="round" />
      {/* Pin buses Left & Right */}
      <path d="M2 10H6M2 16H6M2 22H6M26 10H30M26 16H30M26 22H30" stroke="#00C8E8" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
};

// ============================================================================
// 3. DATABASE / CLUSTER STORAGE / RDS
// ============================================================================
export const PremiumDatabaseIcon: React.FC<PremiumIconProps> = ({ className = "w-6 h-6" }) => {
  const id = useId();
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={`${id}-grad`} x1="5" y1="4" x2="27" y2="28" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#818CF8" />
          <stop offset="50%" stopColor="#6366F1" />
          <stop offset="100%" stopColor="#4338CA" />
        </linearGradient>
      </defs>
      {/* Tier 1 (Top Cylinder) */}
      <ellipse cx="16" cy="8" rx="10" ry="3.5" fill="#1E1B4B" stroke={`url(#${id}-grad)`} strokeWidth="1.75" />
      <ellipse cx="16" cy="8" rx="6" ry="2" fill="#818CF8" fillOpacity="0.3" />
      {/* Tier 2 (Middle Cylinder) */}
      <path d="M6 8V15C6 16.93 10.48 18.5 16 18.5C21.52 18.5 26 16.93 26 15V8" stroke={`url(#${id}-grad)`} strokeWidth="1.75" strokeLinecap="round" />
      {/* Tier 3 (Bottom Cylinder) */}
      <path d="M6 15V23C6 24.93 10.48 26.5 16 26.5C21.52 26.5 26 24.93 26 23V15" stroke={`url(#${id}-grad)`} strokeWidth="1.75" strokeLinecap="round" />
      {/* Status LED Indicators */}
      <circle cx="21" cy="15" r="1" fill="#34D399" />
      <circle cx="21" cy="23" r="1" fill="#38BDF8" />
      <path d="M11 15H16M11 23H16" stroke="#818CF8" strokeWidth="1.25" strokeLinecap="round" />
    </svg>
  );
};

// ============================================================================
// 4. NETWORK GLOBE / API GATEWAY / REVERSE PROXY
// ============================================================================
export const PremiumGlobeIcon: React.FC<PremiumIconProps> = ({ className = "w-6 h-6" }) => {
  const id = useId();
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={`${id}-grad`} x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="50%" stopColor="#6366F1" />
          <stop offset="100%" stopColor="#A855F7" />
        </linearGradient>
      </defs>
      {/* Globe Perimeter */}
      <circle cx="16" cy="16" r="11" fill="#0C1428" stroke={`url(#${id}-grad)`} strokeWidth="1.75" />
      {/* Longitude Ellipse */}
      <ellipse cx="16" cy="16" rx="5" ry="11" stroke="#38BDF8" strokeWidth="1.25" strokeOpacity="0.8" />
      {/* Latitude Equator & Parallel */}
      <path d="M5.5 16H26.5M7.5 11H24.5M7.5 21H24.5" stroke="#818CF8" strokeWidth="1.25" strokeOpacity="0.7" strokeLinecap="round" />
      {/* Active Gateway Routing Satellite */}
      <circle cx="25" cy="8" r="2" fill="#00C8E8" />
      <path d="M22 10L25 8" stroke="#34D399" strokeWidth="1.25" strokeLinecap="round" />
    </svg>
  );
};

// ============================================================================
// 5. QUEUE ZAP / ASYNCHRONOUS WORKER / REDIS CACHE
// ============================================================================
export const PremiumZapIcon: React.FC<PremiumIconProps> = ({ className = "w-6 h-6" }) => {
  const id = useId();
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={`${id}-grad`} x1="16" y1="2" x2="16" y2="30" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#F59E0B" />
          <stop offset="50%" stopColor="#00C8E8" />
          <stop offset="100%" stopColor="#007AFF" />
        </linearGradient>
      </defs>
      {/* Background Energy Ring */}
      <circle cx="16" cy="16" r="11" stroke="#38BDF8" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
      {/* Lightning Energy Core */}
      <path
        d="M18 3L7 16H16L14 29L25 15H16L18 3Z"
        fill={`url(#${id}-grad)`}
        fillOpacity="0.25"
        stroke={`url(#${id}-grad)`}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Micro Voltage Points */}
      <circle cx="16" cy="16" r="1.5" fill="#FFFFFF" />
    </svg>
  );
};

// ============================================================================
// 6. SHIELD CHECK / SECURITY / SAST / COMPLIANCE
// ============================================================================
export const PremiumShieldCheckIcon: React.FC<PremiumIconProps> = ({ className = "w-6 h-6" }) => {
  const id = useId();
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={`${id}-grad`} x1="6" y1="4" x2="26" y2="28" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#34D399" />
          <stop offset="50%" stopColor="#059669" />
          <stop offset="100%" stopColor="#047857" />
        </linearGradient>
      </defs>
      {/* Shield Crest */}
      <path
        d="M16 4L6 8.5V15.5C6 21.8 10.27 27.65 16 29C21.73 27.65 26 21.8 26 15.5V8.5L16 4Z"
        fill="#064E3B"
        fillOpacity="0.25"
        stroke={`url(#${id}-grad)`}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Inner Verification Checkmark */}
      <path
        d="M11 16.5L14.5 20L21 12.5"
        stroke="#34D399"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Security Nodes */}
      <circle cx="16" cy="7" r="1" fill="#34D399" />
    </svg>
  );
};

// ============================================================================
// 7. WORKFLOW / CI-CD PIPELINE / GITOPS
// ============================================================================
export const PremiumWorkflowIcon: React.FC<PremiumIconProps> = ({ className = "w-6 h-6" }) => {
  const id = useId();
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={`${id}-grad`} x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#34D399" />
          <stop offset="50%" stopColor="#00C8E8" />
          <stop offset="100%" stopColor="#007AFF" />
        </linearGradient>
      </defs>
      {/* Step 1 Node */}
      <rect x="5" y="7" width="6" height="6" rx="2" fill="#047857" stroke="#34D399" strokeWidth="1.5" />
      {/* Step 2 Node */}
      <circle cx="16" cy="10" r="3" fill="#065F46" stroke="#34D399" strokeWidth="1.5" />
      {/* Step 3 (Branching) */}
      <rect x="21" y="7" width="6" height="6" rx="2" fill="#0284C7" stroke="#38BDF8" strokeWidth="1.5" />
      {/* Step 4 (Production) */}
      <rect x="13" y="20" width="6" height="6" rx="2" fill="#1D4ED8" stroke="#60A5FA" strokeWidth="1.5" />
      {/* Conduits & Flow Lines */}
      <path d="M11 10H13M19 10H21" stroke="#34D399" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M16 13V20M24 13V18C24 19.1 23.1 20 22 20H19" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" />
      {/* Success Tick on Final Step */}
      <circle cx="16" cy="23" r="1" fill="#FFFFFF" />
    </svg>
  );
};

// ============================================================================
// 8. DOCKER BOX / CONTAINER / ARTIFACT
// ============================================================================
export const PremiumBoxIcon: React.FC<PremiumIconProps> = ({ className = "w-6 h-6" }) => {
  const id = useId();
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={`${id}-top`} x1="6" y1="6" x2="26" y2="15" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="100%" stopColor="#0284C7" />
        </linearGradient>
        <linearGradient id={`${id}-side`} x1="6" y1="15" x2="16" y2="28" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0369A1" />
          <stop offset="100%" stopColor="#075985" />
        </linearGradient>
      </defs>
      {/* Isometric Cube Top Face */}
      <path d="M16 4L26 9.5L16 15L6 9.5L16 4Z" fill={`url(#${id}-top)`} fillOpacity="0.8" stroke="#38BDF8" strokeWidth="1.5" strokeLinejoin="round" />
      {/* Left Face */}
      <path d="M6 9.5V21.5L16 27V15L6 9.5Z" fill={`url(#${id}-side)`} stroke="#0284C7" strokeWidth="1.5" strokeLinejoin="round" />
      {/* Right Face */}
      <path d="M26 9.5V21.5L16 27V15L26 9.5Z" fill="#0C4A6E" stroke="#38BDF8" strokeWidth="1.5" strokeLinejoin="round" />
      {/* Container Modular Partition Lines */}
      <path d="M11 12.25L21 17.75M16 15V27" stroke="#BAE6FD" strokeWidth="1" strokeOpacity="0.6" />
    </svg>
  );
};

// ============================================================================
// 9. ACTIVITY / TELEMETRY / HEALTH MONITORING
// ============================================================================
export const PremiumActivityIcon: React.FC<PremiumIconProps> = ({ className = "w-6 h-6" }) => {
  const id = useId();
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={`${id}-grad`} x1="4" y1="16" x2="28" y2="16" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#059669" />
          <stop offset="50%" stopColor="#34D399" />
          <stop offset="100%" stopColor="#10B981" />
        </linearGradient>
      </defs>
      {/* Monitor Display Outline */}
      <rect x="4" y="6" width="24" height="20" rx="4" fill="#064E3B" fillOpacity="0.25" stroke="#059669" strokeWidth="1.5" />
      {/* Oscilloscope Telemetry Pulse Wave */}
      <path
        d="M6 16H11L13.5 10L17.5 22L20.5 13L22.5 16H26"
        stroke={`url(#${id}-grad)`}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Peak Indicator Node */}
      <circle cx="17.5" cy="22" r="1.5" fill="#34D399" />
    </svg>
  );
};

// ============================================================================
// 10. TERMINAL / DEVELOPER SHELL / IAC
// ============================================================================
export const PremiumTerminalIcon: React.FC<PremiumIconProps> = ({ className = "w-6 h-6" }) => {
  const id = useId();
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={`${id}-grad`} x1="4" y1="6" x2="28" y2="26" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#00C8E8" />
          <stop offset="100%" stopColor="#007AFF" />
        </linearGradient>
      </defs>
      {/* Terminal Window Box */}
      <rect x="4" y="6" width="24" height="20" rx="4" fill="#050B17" stroke={`url(#${id}-grad)`} strokeWidth="1.75" />
      {/* Title bar buttons */}
      <circle cx="8" cy="10" r="1" fill="#EF4444" />
      <circle cx="11.5" cy="10" r="1" fill="#F59E0B" />
      <circle cx="15" cy="10" r="1" fill="#10B981" />
      <path d="M4 13H28" stroke="#1E293B" strokeWidth="1.25" />
      {/* Command prompt `>` and cursor */}
      <path d="M8 18L12 21L8 24" stroke="#00C8E8" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="14" y1="23.5" x2="20" y2="23.5" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
};

// ============================================================================
// 11. LAYOUT / UI-UX DESIGN / WEB PLATFORM
// ============================================================================
export const PremiumLayoutIcon: React.FC<PremiumIconProps> = ({ className = "w-6 h-6" }) => {
  const id = useId();
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={`${id}-grad`} x1="4" y1="5" x2="28" y2="27" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#00C8E8" />
          <stop offset="50%" stopColor="#007AFF" />
          <stop offset="100%" stopColor="#818CF8" />
        </linearGradient>
      </defs>
      {/* Browser Screen Frame */}
      <rect x="4" y="5" width="24" height="22" rx="4" fill="#071328" stroke={`url(#${id}-grad)`} strokeWidth="1.75" />
      {/* Top Header Bar */}
      <path d="M4 11H28" stroke="#1E293B" strokeWidth="1.25" />
      <circle cx="8" cy="8" r="1" fill="#00C8E8" />
      <circle cx="11" cy="8" r="1" fill="#007AFF" />
      {/* Sidebar & Content Bento Grid */}
      <rect x="7" y="14" width="5" height="10" rx="1.5" fill="#007AFF" fillOpacity="0.4" stroke="#007AFF" strokeWidth="1" />
      <rect x="14" y="14" width="11" height="4.5" rx="1.5" fill="#00C8E8" fillOpacity="0.4" stroke="#00C8E8" strokeWidth="1" />
      <rect x="14" y="20.5" width="11" height="3.5" rx="1.5" fill="#818CF8" fillOpacity="0.3" stroke="#818CF8" strokeWidth="1" />
    </svg>
  );
};

// ============================================================================
// 12. AI BRAIN / INTELLIGENCE / LLM ARCHITECTURE
// ============================================================================
export const PremiumAiBrainIcon: React.FC<PremiumIconProps> = ({ className = "w-6 h-6" }) => {
  const id = useId();
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={`${id}-grad`} x1="6" y1="4" x2="26" y2="28" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#A855F7" />
          <stop offset="50%" stopColor="#00C8E8" />
          <stop offset="100%" stopColor="#007AFF" />
        </linearGradient>
      </defs>
      {/* Center Intelligence Core */}
      <circle cx="16" cy="16" r="4" fill="#0E1B38" stroke={`url(#${id}-grad)`} strokeWidth="2" />
      <circle cx="16" cy="16" r="1.5" fill="#00C8E8" />
      {/* Synaptic Orbital Nodes */}
      <circle cx="16" cy="6" r="2.5" fill="#A855F7" />
      <circle cx="16" cy="26" r="2.5" fill="#007AFF" />
      <circle cx="6" cy="16" r="2.5" fill="#00C8E8" />
      <circle cx="26" cy="16" r="2.5" fill="#38BDF8" />
      <circle cx="8.5" cy="8.5" r="2" fill="#818CF8" />
      <circle cx="23.5" cy="23.5" r="2" fill="#34D399" />
      {/* Synaptic Energy Conduits */}
      <path
        d="M16 8.5V12M16 20V23.5M8.5 16H12M20 16H23.5M10 10L13.5 13.5M18.5 18.5L22 22"
        stroke={`url(#${id}-grad)`}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

// ============================================================================
// 13. CODE / BACKEND & API SERVICES
// ============================================================================
export const PremiumCodeIcon: React.FC<PremiumIconProps> = ({ className = "w-6 h-6" }) => {
  const id = useId();
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={`${id}-grad`} x1="4" y1="8" x2="28" y2="24" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="50%" stopColor="#818CF8" />
          <stop offset="100%" stopColor="#C084FC" />
        </linearGradient>
      </defs>
      {/* Left `<` Bracket */}
      <path d="M10 10L4 16L10 22" stroke={`url(#${id}-grad)`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {/* Right `>` Bracket */}
      <path d="M22 10L28 16L22 22" stroke={`url(#${id}-grad)`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {/* Slash `/` Conduit */}
      <path d="M18 7L14 25" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
};

// ============================================================================
// 14. TRENDING / GROWTH & SEO PERFORMANCE
// ============================================================================
export const PremiumTrendingIcon: React.FC<PremiumIconProps> = ({ className = "w-6 h-6" }) => {
  const id = useId();
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={`${id}-grad`} x1="4" y1="24" x2="28" y2="6" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#34D399" />
          <stop offset="50%" stopColor="#00C8E8" />
          <stop offset="100%" stopColor="#007AFF" />
        </linearGradient>
      </defs>
      {/* Chart Baseline */}
      <path d="M4 26H28" stroke="#1E293B" strokeWidth="1.5" strokeLinecap="round" />
      {/* Area Curve Fill */}
      <path d="M4 24L11 17L17 21L27 9V26H4V24Z" fill="url(#${id}-grad)" fillOpacity="0.15" />
      {/* Growth Vector Line */}
      <path
        d="M4 23L11 16L17 20L27 8M27 8H20M27 8V15"
        stroke={`url(#${id}-grad)`}
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Peak Breakthrough Marker */}
      <circle cx="27" cy="8" r="2" fill="#34D399" />
    </svg>
  );
};

// ============================================================================
// 15. ROCKET / PRODUCTION LAUNCH & CUTOVER
// ============================================================================
export const PremiumRocketIcon: React.FC<PremiumIconProps> = ({ className = "w-6 h-6" }) => {
  const id = useId();
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={`${id}-hull`} x1="12" y1="4" x2="26" y2="20" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#00C8E8" />
          <stop offset="50%" stopColor="#007AFF" />
          <stop offset="100%" stopColor="#4F46E5" />
        </linearGradient>
      </defs>
      {/* Rocket Hull */}
      <path
        d="M27 5C27 5 21 4.5 15.5 10C11.5 14 10 18.5 10 18.5L13.5 22L17.5 20.5L22 16.5C27.5 11 27 5 27 5Z"
        fill={`url(#${id}-hull)`}
        fillOpacity="0.3"
        stroke={`url(#${id}-hull)`}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Porthole */}
      <circle cx="20.5" cy="11.5" r="2" fill="#FFFFFF" stroke="#00C8E8" strokeWidth="1" />
      {/* Left & Right Fins */}
      <path d="M10 18.5L5 20L8 15" stroke="#00C8E8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17.5 20.5L19 25.5L14 22.5" stroke="#007AFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Propulsion Plume */}
      <path d="M10 22L6 26M12 24L9 29M14 22L11 25" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
};

// ============================================================================
// 16. COMPASS / TECHNICAL & DISCOVERY
// ============================================================================
export const PremiumCompassIcon: React.FC<PremiumIconProps> = ({ className = "w-6 h-6" }) => {
  const id = useId();
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={`${id}-grad`} x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#00C8E8" />
          <stop offset="100%" stopColor="#007AFF" />
        </linearGradient>
      </defs>
      {/* Outer Dial Ring */}
      <circle cx="16" cy="16" r="11" fill="#08142B" stroke={`url(#${id}-grad)`} strokeWidth="1.75" />
      {/* Ticks */}
      <path d="M16 6V8M16 24V26M6 16H8M24 16H26" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" />
      {/* Needle North Point (Cyan) */}
      <polygon points="16,8 19,16 16,14 13,16" fill="#00C8E8" />
      {/* Needle South Point (Slate) */}
      <polygon points="16,24 19,16 16,18 13,16" fill="#475569" />
      {/* Pivot Core */}
      <circle cx="16" cy="16" r="1.5" fill="#FFFFFF" />
    </svg>
  );
};

// ============================================================================
// 17. SPEEDOMETER / SLA & OPTIMIZATION
// ============================================================================
export const PremiumGaugeIcon: React.FC<PremiumIconProps> = ({ className = "w-6 h-6" }) => {
  const id = useId();
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={`${id}-grad`} x1="6" y1="8" x2="26" y2="24" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#34D399" />
          <stop offset="50%" stopColor="#00C8E8" />
          <stop offset="100%" stopColor="#007AFF" />
        </linearGradient>
      </defs>
      {/* Gauge Arc */}
      <path
        d="M7 21C5.7 18.5 5.5 15.2 6.8 12.3C9.3 6.9 15.2 4.2 20.6 6.7C24.4 8.5 26.8 12.2 26.8 16.3C26.8 18 26.3 19.6 25.5 21"
        stroke={`url(#${id}-grad)`}
        strokeWidth="2.25"
        strokeLinecap="round"
      />
      {/* Needle pointing at High Velocity */}
      <line x1="16" y1="18" x2="22" y2="12" stroke="#38BDF8" strokeWidth="2.25" strokeLinecap="round" />
      {/* Pivot Core */}
      <circle cx="16" cy="18" r="2.5" fill="#00C8E8" />
      {/* Ticks */}
      <circle cx="10" cy="13" r="1" fill="#34D399" />
      <circle cx="16" cy="9" r="1" fill="#00C8E8" />
      <circle cx="22" cy="13" r="1" fill="#007AFF" />
    </svg>
  );
};

// ============================================================================
// 18. TARGET / PRACTICAL ENGINEERING PRECISION
// ============================================================================
export const PremiumTargetIcon: React.FC<PremiumIconProps> = ({ className = "w-6 h-6" }) => {
  const id = useId();
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={`${id}-grad`} x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#00C8E8" />
          <stop offset="50%" stopColor="#007AFF" />
          <stop offset="100%" stopColor="#6366F1" />
        </linearGradient>
      </defs>
      {/* Outer Ring */}
      <circle cx="16" cy="16" r="11" fill="#08142B" stroke={`url(#${id}-grad)`} strokeWidth="1.75" />
      {/* Mid Ring */}
      <circle cx="16" cy="16" r="7" stroke="#38BDF8" strokeWidth="1.25" strokeOpacity="0.8" />
      {/* Bullseye Core */}
      <circle cx="16" cy="16" r="3" fill="#00C8E8" />
      {/* Crosshair ticks */}
      <path d="M16 3V6M16 26V29M3 16H6M26 16H29" stroke="#00C8E8" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
};

// ============================================================================
// 19. LAYERS / SYSTEM ARCHITECTURE / SERVICE MESH
// ============================================================================
export const PremiumLayersIcon: React.FC<PremiumIconProps> = ({ className = "w-6 h-6" }) => {
  const id = useId();
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={`${id}-grad`} x1="6" y1="6" x2="26" y2="26" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#00C8E8" />
          <stop offset="50%" stopColor="#007AFF" />
          <stop offset="100%" stopColor="#6366F1" />
        </linearGradient>
      </defs>
      {/* Top Layer */}
      <polygon points="16,4 27,9.5 16,15 5,9.5" fill="#0E2145" stroke={`url(#${id}-grad)`} strokeWidth="1.75" strokeLinejoin="round" />
      {/* Middle Layer */}
      <path d="M5 14.5L16 20L27 14.5" stroke="#38BDF8" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      {/* Bottom Layer */}
      <path d="M5 19.5L16 25L27 19.5" stroke="#007AFF" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      {/* Central Axis pin */}
      <circle cx="16" cy="9.5" r="1.5" fill="#FFFFFF" />
    </svg>
  );
};

// ============================================================================
// 20. WRENCH / MAINTENANCE & 24/7 SUPPORT
// ============================================================================
export const PremiumWrenchIcon: React.FC<PremiumIconProps> = ({ className = "w-6 h-6" }) => {
  const id = useId();
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={`${id}-grad`} x1="6" y1="6" x2="26" y2="26" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#F59E0B" />
          <stop offset="50%" stopColor="#00C8E8" />
          <stop offset="100%" stopColor="#007AFF" />
        </linearGradient>
      </defs>
      {/* Tool Head & Shaft */}
      <path
        d="M26 9.5C25.5 10 24.5 10.5 23 10C21.5 9.5 20.5 8 21 6.5C21.5 5 21 4 20 4C16.5 4 14 7 15 10.5L6.5 19C5.5 20 5.5 21.5 6.5 22.5L9.5 25.5C10.5 26.5 12 26.5 13 25.5L21.5 17C25 18 28 15.5 28 12C28 11 27 10.5 26 9.5Z"
        fill="#091833"
        stroke={`url(#${id}-grad)`}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Center Pivot Point */}
      <circle cx="9.5" cy="22.5" r="1.5" fill="#00C8E8" />
    </svg>
  );
};

// ============================================================================
// 21. SUPPORT / HEADPHONES / CONCIERGE COLLABORATION
// ============================================================================
export const PremiumSupportIcon: React.FC<PremiumIconProps> = ({ className = "w-6 h-6" }) => {
  const id = useId();
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={`${id}-grad`} x1="5" y1="5" x2="27" y2="27" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#00C8E8" />
          <stop offset="50%" stopColor="#007AFF" />
          <stop offset="100%" stopColor="#818CF8" />
        </linearGradient>
      </defs>
      {/* Headband Arc */}
      <path
        d="M6 17V14C6 8.48 10.48 4 16 4C21.52 4 26 8.48 26 14V17"
        stroke={`url(#${id}-grad)`}
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Left Earcup */}
      <rect x="4" y="16" width="5" height="9" rx="2.5" fill="#0B1A38" stroke="#00C8E8" strokeWidth="1.5" />
      {/* Right Earcup */}
      <rect x="23" y="16" width="5" height="9" rx="2.5" fill="#0B1A38" stroke="#007AFF" strokeWidth="1.5" />
      {/* Microphone Boom */}
      <path d="M26 21V23C26 25.2 24.2 27 22 27H18" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="16" cy="27" r="1.5" fill="#34D399" />
    </svg>
  );
};
