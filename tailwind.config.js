/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1FA45B",
        secondary: "#E8F0F5",
        semiGray: "#7E7E7E",
        lightGray: "#868686",
        iconColor: "#868686",
        iconBg: "#E8F0F5",
        bgColor: "#F7F8FA",
      },
    },
  },
  plugins: [],
};
