/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      heroTitle: ["Viga"],
      heroMessage: ["sans-serif"],
    },
    extend: {
      colors: {
        "navbar-background": "#424242",
      },
      keyframes: {
        "fade-in": {
          from: { left: "-23rem", opacity: "0" },
          to: { left: "0", opacity: "1" },
        },
        "fade-out": {
          from: { left: "0", opacity: "1" },
          to: { left: "-23rem", opacity: "0" },
        },
        "background-in": {
          from: { "background-color": "transparent" },
          to: { "background-color": "white" },
        },
        "background-out": {
          from: { "background-color": "white" },
          to: { "background-color": "transparent" },
        },
        "slide-right": {
          from: { left: "-25rem" },
          to: { left: "0" },
        },
        "pop-in": {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        "form-in": {
          from: { left: "10rem", opacity: 0 },
          to: { left: 0, opacity: 1 },
        },
        "card-fade-in": {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
      animation: {
        "fade-in": "fade-in 0.4s ease-in-out forwards",
        "fade-out": "fade-out 0.4s ease-in-out forwards",
        "background-in": "background-in 0.2s ease-in-out forwards",
        "background-out": "background-out 0.2s ease-in-out forwards",
        "slide-right": "slide-right 0.8s ease-out forwards",
        "pop-in": "pop-in 0.8s ease-out forwards",
        "form-in": "form-in 0.8s ease-out forwards",
        "card-fade-in": "card-fade-in 0.5s ease-out forwards",
      },
      boxShadow: {
        "4xl": "3px 0px 20px 1px rgba(0,0,0, 0.3)",
        white: "2px 2px 15px 5px rgba(255,255,255)",
      },
    },
  },
  plugins: [],
};
