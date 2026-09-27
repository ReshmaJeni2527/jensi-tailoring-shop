/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FBF5E9",
        "cream-dark": "#F2E8D5",
        ink: "#2B1D14",
        maroon: {
          DEFAULT: "#7A2E3B",
          dark: "#5C2129",
          light: "#9B4A57",
        },
        gold: {
          DEFAULT: "#B8894A",
          light: "#E8D5B0",
          dark: "#8F6A38",
        },
      },
      fontFamily: {
        serif: ["'Cormorant Garamond'", "Georgia", "serif"],
        sans: ["'Jost'", "'Segoe UI'", "sans-serif"],
      },
      borderRadius: {
        soft: "6px",
      },
      boxShadow: {
        elegant: "0 20px 40px -15px rgba(43, 29, 20, 0.25)",
        card: "0 10px 30px -12px rgba(43, 29, 20, 0.18)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.9s ease-out forwards",
        fadeIn: "fadeIn 1.2s ease-out forwards",
      },
    },
  },
  plugins: [],
};
