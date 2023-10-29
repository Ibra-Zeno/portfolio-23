/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      screens: {
        xs: "375px",
      },
      fontFamily: {
        sans: ["var(--font-nunito)"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        pBg: "#344a53",
        p1: "#0D98BA",
        p2: "",
        p3: "",
        p4: "",
        p5: "",
        p6: "",
        p7: "",
        p8: "",
        pText: "",
      },
    },
  },
  darkMode: "class",
  plugins: [
    require("tailwindcss-animate"),
    nextui({
      themes: {
        dark: {
          colors: {
            background: "#03131C",
            foreground: "#f3f9fc",
            primary: "#19a6a1",
            main: "#1c485f",
            sec: "#002e4a",
            acc: "#d2eae5",
            pop1: "#11998e",
            pop2: "#61c589",
            pop3: "",
            show1: "#003e4b",
            show2: "",
            show3: "",
            card1: "#273141",
            card2: "#303d47",
            mine1: "#03131C",
            mine2: "#072c42",
            mine3: "#3d707e",
            mine4: "#627b83",
            flagBg: "",
            DEFAULT: "#1c485f",
            focus: "#F182F6",
          },
        },
        light: {
          colors: {
            background: "#E4D4C8",
            foreground: "#000000",
            primary: "#523A28",
            main: "#1A3315",
            sec: "#523A28",
            acc: "#ffeeca",
            pop1: "#26695f",
            pop2: "#2f4858",
            pop3: "",
            show1: "#2c5b42",
            // show2: "#2c5b42",
            show3: "#2c5b42",
            card1: "#c7bca8",
            card2: "#c7bca8",
            mine1: "#7d746e",
            mine2: "#b1a49b",
            mine3: "#86786e",
            mine4: "#c6a58a",
            flagBg: "",
            DEFAULT: "#1A3315",
          },
        },
      },
    }),
  ],
};
