/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
      inter: ['Inter', 'Inter Fallback', 'sans-serif'],
        arabic: ['"El Messiri"', 'sans-serif'],
      },
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        main: "var(--color-main)",
        base: "var(--color-base)",
        important: "var(--color-important)",
        span: "var(--color-span)",
        dropdown: "var(--color-dropdown)",
        bg: "var(--color-bg)",
        textspan: "var(--color-textspan)",
      },
      screens: {
        xsmall: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [],
};
