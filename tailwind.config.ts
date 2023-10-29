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
            main: "#1c485f",
            sec: "#002e4a",
            acc: "#d2eae5",
            pop1: "#11998e",
            pop2: "#61c589",
            pop3: "",
            card1: "#232526",
            card2: "#414345",
            DEFAULT: "#00c6cf",
            focus: "#F182F6",
          },
        },
        light: {
          colors: {
            background: "#E4D4C8",
            foreground: "#000000",
            main: "#1A3315",
            sec: "#523A28",
            acc: "#E1B48E",
            pop1: "",
            pop2: "",
            pop3: "",
            DEFAULT: "#1A3315",
          },
        },
      },
    }),
  ],
};
