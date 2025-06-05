import aspectRatio from '@tailwindcss/aspect-ratio';
import scrollbar from 'tailwind-scrollbar';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      aspectRatio,
      scrollbar: {
        width: "8px",
        track: "transparent",
        thumb: "#6b7280",
        radius: "8px",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          /* Firefox */
          'scrollbar-width': 'none',
          /* IE and Edge */
          '-ms-overflow-style': 'none',
        },
        '.scrollbar-hide::-webkit-scrollbar': {
          display: 'none',
        },
      });
    },
    scrollbar,
  ],
}
