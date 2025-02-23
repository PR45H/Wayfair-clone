/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        // Mobile devices
        mobile: "320px",
        // Tablets
        tablet: "768px",
        // Laptops
        laptop: "1024px",
        // Desktops and Large screens
        desktop: "1280px",
      },
    },
  },
  plugins: [],
};
