/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        eco: {
          green: '#10B981',
          blue: '#3B82F6',
          orange: '#F59E0B',
          red: '#EF4444',
          purple: '#8B5CF6',
          teal: '#14B8A6',
        }
      },
      animation: {
        'scan-beam': 'scan-beam 2s ease-in-out infinite',
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 4s infinite',
      },
      keyframes: {
        'scan-beam': {
          '0%, 100%': { transform: 'translateY(-100%)', opacity: '0' },
          '50%': { transform: 'translateY(100%)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
} 