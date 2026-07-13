/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}"
  ],
  presets: [require("@relume_io/relume-tailwind")],
  theme: {
    container: {
      center: true,
      screens: {
        sm: '480px',
        md: '768px',
        lg: '992px',
        xl: '1280px',
        xxl: '1440px',
      },
    },
    extend: {
      colors: {
        primary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          500: '#334155',
          900: '#0F172A', // Midnight Blue
        },
        secondary: {
          500: '#D4AF37', // Champagne Gold
        },
        background: {
          DEFAULT: '#FAFAFA',
          secondary: '#FFFFFF',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}
