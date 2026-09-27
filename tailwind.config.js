/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primaryNavy: '#0B1F44',
          secondaryNavy: '#102A56',
          electricBlue: '#1677FF',
          electricHover: '#0e65dc',
          cyanAccent: '#00C8E8',
          cyanHover: '#00b5d1',
          lightBg: '#F4F8FC',
          bodyText: '#475569',
          mutedText: '#64748B',
          border: '#DCE6F2',
          footerBg: '#07152E',
          // Dark theme specific tokens
          darkBg: '#050B17',
          cardDark: '#0B1528',
          cardDarkSecondary: '#0E1B33',
          borderDark: '#1E293B',
          borderDarkHover: '#334155',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #00C8E8 0%, #1677FF 50%, #0B1F44 100%)',
        'dark-mesh': 'radial-gradient(circle at 50% 0%, rgba(22, 119, 255, 0.15), transparent 60%), radial-gradient(circle at 100% 50%, rgba(0, 200, 232, 0.1), transparent 50%), radial-gradient(circle at 0% 100%, rgba(11, 31, 68, 0.4), transparent 50%)',
        'subtle-radial': 'radial-gradient(circle at top right, rgba(0, 200, 232, 0.12), transparent 50%), radial-gradient(circle at bottom left, rgba(22, 119, 255, 0.08), transparent 50%)',
        'navy-gradient': 'linear-gradient(180deg, #0B1528 0%, #050B17 100%)',
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 2px -1px rgba(0, 0, 0, 0.2)',
        'card': '0 4px 20px -2px rgba(0, 0, 0, 0.4), 0 2px 6px -1px rgba(0, 0, 0, 0.3)',
        'card-hover': '0 12px 35px -4px rgba(22, 119, 255, 0.25), 0 4px 12px -2px rgba(0, 0, 0, 0.4)',
        'elevated': '0 20px 45px -15px rgba(0, 0, 0, 0.6)',
        'glow-cyan': '0 0 30px -4px rgba(0, 200, 232, 0.35)',
        'glow-blue': '0 0 35px -5px rgba(22, 119, 255, 0.35)',
        'glow-card': '0 0 20px 0 rgba(22, 119, 255, 0.15)',
      },
      animation: {
        'float-slow': 'float 5s ease-in-out infinite',
        'float-delayed': 'float-delayed 6s ease-in-out infinite 1.5s',
        'pulse-slow': 'pulse-slow 7s ease-in-out infinite',
        'beam': 'beam 2.8s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'float-delayed': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(8px)' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '0.25', transform: 'scale(1)' },
          '50%': { opacity: '0.45', transform: 'scale(1.08)' },
        },
        beam: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { transform: 'translateY(100%)', opacity: '0' },
        },
      }
    },
  },
  plugins: [],
}
