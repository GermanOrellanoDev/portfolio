/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: '#0F0C1B',
        card: '#181528',
        border: '#2A244D',
        purple: '#A855F7',
        pure: '#F8FAFC',
        muted: '#94A3B8',
      },
    },
  },
  plugins: [],
};
