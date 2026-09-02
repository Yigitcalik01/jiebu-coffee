/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', 'src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        espresso: {
          50: '#f7f3f0',
          100: '#ece0d8',
          200: '#d4b9a8',
          300: '#bd9278',
          400: '#a06d50',
          500: '#7a4f37',
          600: '#5e3d2b',
          700: '#432c20',
          800: '#2a1b14',
          900: '#1a0f0b',
          950: '#0d0805',
        },
        cream: {
          50: '#fdfcfa',
          100: '#f9f5ef',
          200: '#f2e9db',
          300: '#e8d8c2',
          400: '#dcc4a2',
          500: '#cdaa7d',
        },
        sand: {
          50: '#faf7f2',
          100: '#f0e9dd',
          200: '#e0d0b8',
          300: '#cdb28c',
          400: '#b89968',
          500: '#9c7d4e',
        },
        ink: {
          DEFAULT: '#1a1410',
          soft: '#2a1f18',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      fontSize: {
        'hero': ['clamp(3.5rem, 12vw, 12rem)', { lineHeight: '0.9', letterSpacing: '-0.02em' }],
        'display': ['clamp(2.5rem, 7vw, 6rem)', { lineHeight: '1.0', letterSpacing: '-0.02em' }],
        'section': ['clamp(2rem, 5vw, 4rem)', { lineHeight: '1.05', letterSpacing: '-0.01em' }],
      },
      letterSpacing: {
        'ultra-wide': '0.3em',
      },
      transitionTimingFunction: {
        'premium': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      animation: {
        'grain': 'grain 8s steps(10) infinite',
        'scroll-indicator': 'scroll-indicator 2s ease-in-out infinite',
      },
      keyframes: {
        grain: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-5%, -10%)' },
          '20%': { transform: 'translate(-15%, 5%)' },
          '30%': { transform: 'translate(7%, -25%)' },
          '40%': { transform: 'translate(-5%, 25%)' },
          '50%': { transform: 'translate(-15%, 10%)' },
          '60%': { transform: 'translate(15%, 0%)' },
          '70%': { transform: 'translate(0%, 15%)' },
          '80%': { transform: 'translate(3%, 35%)' },
          '90%': { transform: 'translate(-10%, 10%)' },
        },
        'scroll-indicator': {
          '0%, 100%': { transform: 'translateY(0)', opacity: '0.4' },
          '50%': { transform: 'translateY(8px)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
