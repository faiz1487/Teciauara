/** @type {import('tailwindcss').Config} */
export default {
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
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #00C8E8 0%, #1677FF 50%, #0B1F44 100%)',
        'subtle-radial': 'radial-gradient(circle at top right, rgba(0, 200, 232, 0.08), transparent 50%), radial-gradient(circle at bottom left, rgba(22, 119, 255, 0.05), transparent 50%)',
        'navy-gradient': 'linear-gradient(180deg, #0B1F44 0%, #07152E 100%)',
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(11, 31, 68, 0.05), 0 1px 2px -1px rgba(11, 31, 68, 0.05)',
        'card': '0 4px 20px -2px rgba(11, 31, 68, 0.06), 0 2px 6px -1px rgba(11, 31, 68, 0.04)',
        'card-hover': '0 12px 30px -4px rgba(22, 119, 255, 0.12), 0 4px 12px -2px rgba(11, 31, 68, 0.06)',
        'elevated': '0 20px 40px -15px rgba(11, 31, 68, 0.15)',
      }
    },
  },
  plugins: [],
}
