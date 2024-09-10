/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1D4ED8', // Customize with your primary color
          light: '#3B82F6',  // Lighter shade of primary
          dark: '#1E40AF',   // Darker shade of primary
          contrast: '#FFFFFF', // Text color that contrasts with primary
        },
        secondary: {
          DEFAULT: '#D97706', // Customize with your secondary color
          light: '#F59E0B',  // Lighter shade of secondary
          dark: '#B45309',   // Darker shade of secondary
          contrast: '#FFFFFF', // Text color that contrasts with secondary
        },
      }
    },
  },
  plugins: [],
};
