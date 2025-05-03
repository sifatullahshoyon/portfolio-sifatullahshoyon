/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        text: "#ffffff",
        background: "#0e051a",
        primary: "#6000fa",
        secondary: "#bdacff",
        accent: "#1a1a1a",
        tertiary: "#A4A4A4",
      },
    },
  },
  plugins: [],
};
