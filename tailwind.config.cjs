/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#0B72FF", // primary
          bright: "#2E9BFF",
        },
        accent: "#FF7A59",
        muted: {
          DEFAULT: "#6B7280",
        },
        page: "#F8FAFC",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        display: ["Montserrat", "Inter"],
      },
    },
  },
  plugins: [],
};
