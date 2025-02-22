import type { Config } from "tailwindcss";
import { TW } from "./plugins/tw";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["var(--font-roboto)", "sans-serif"],
      },
      screens: {
        md: "550px",
      },
      colors: {
        text: "#1E1E1E",
        button: "#252631",
        muted: "#98A9BC",
        "tomato-red": "#D71E0E",
      },
      height: {
        52: "52px",
        46: "46px",
      },
      width: {
        "95%": "95%",
      },
      backgroundColor: {
        primary: "#262626",
      },
      borderColor: {
        "btn-outline": "#E8ECEF",
      },
      borderRadius: {
        xs: "2px",
      },
      fontSize: {
        "sm-bold": "14.89px",
      },
      keyframes: {
        walkIn: {
          from: {
            scale: "0.2",
            opacity: "0",
          },
          to: {
            scale: "1",
            opacity: "1",
          },
        },
        walkOut: {
          from: {
            scale: "1",
            opacity: "1",
          },
          to: {
            scale: "0.2",
            opacity: "0",
          },
        },
        dropIn: {
          from: {
            transform: "translateY(-50%)",
            opacity: "0",
          },
          to: {
            transform: "translateY(0%)",
            opacity: "1",
          },
        },
        dropOut: {
          from: {
            transform: "translateY(0%)",
            opacity: "1",
          },
          to: {
            transform: "translateY(-50%)",
            opacity: "0",
          },
        },
        popIn: {
          "0%": {
            transform: "translateY(50%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0%)",
            opacity: "1",
          },
        },
        popOut: {
          "0%": {
            transform: "translateY(0%)",
            opacity: "1",
          },
          "100%": {
            transform: "translateY(50%)",
            opacity: "0",
          },
        },
        shake: {
          " 0%": {
            transform: "translateX(6px)",
          },
          "50%": {
            transform: "translateX(-6px)",
          },
          "100%": {
            transform: "translateX(6px)",
          },
        },
        slideInLeft: {
          "0%": {
            transform: "translateX(-100%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
        slideOutLeft: {
          "0%": {
            transform: "translateX(0)",
            opacity: "1",
          },
          "100%": {
            transform: "translateX(-100%)",
            opacity: "0",
          },
        },
      },
      animation: {
        dropIn: "dropIn 0.5s ease-in-out",
        dropOut: "dropOut 0.5s ease-in-out",
        walkIn: "walkIn 0.5s ease-in-out",
        walkOut: "walkOut 0.5s ease-in-out",
        popIn: "popIn 0.5s ease-in-out",
        popOut: "popOut 0.5s ease-in-out",
        shake: "shake 0.2s ease-in-out",
        slideInLeft: "slideInLeft 0.5s ease-in-out",
        slideOutLeft: "slideOutLeft 0.5s ease-in-out",
      },
    },
  },
  plugins: [TW],
} satisfies Config;
