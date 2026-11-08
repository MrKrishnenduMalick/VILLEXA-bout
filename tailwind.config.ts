import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        plum: {
          950: "#0e050d",
          900: "#180916",
          850: "#210c1e",
          800: "#2d122a",
          700: "#441a3f",
          600: "#63275c",
        },
        burgundy: {
          950: "#14040d",
          900: "#230818",
          800: "#360d26",
          700: "#4d1337",
          600: "#6a1b4b",
        },
        gold: {
          50: "#fdfbf5",
          100: "#f9f3e4",
          200: "#f2e4c1",
          300: "#e8cf96",
          400: "#ddb765",
          500: "#cb9d3e",
          600: "#b08130",
          700: "#8c6225",
        },
        blush: {
          50: "#fff9f8",
          100: "#fef0ed",
          200: "#fde3dc",
          300: "#f9c5b8",
          400: "#f29e8c",
        },
      },
      fontFamily: {
        serif: ["'Cormorant Garamond'", "Georgia", "serif"],
        display: ["'Cinzel'", "'Cormorant Garamond'", "Georgia", "serif"],
        sans: ["'Montserrat'", "system-ui", "-apple-system", "sans-serif"],
      },
      boxShadow: {
        "gold-glow": "0 0 35px -5px rgba(221, 183, 101, 0.35)",
        "gold-glow-sm": "0 0 15px -2px rgba(221, 183, 101, 0.25)",
        "gold-glow-lg": "0 0 55px -5px rgba(221, 183, 101, 0.45)",
        "glass-inner": "inset 0 1px 1px 0 rgba(255, 255, 255, 0.15)",
        "glass-card": "0 10px 40px -10px rgba(0, 0, 0, 0.6), inset 0 1px 1px 0 rgba(242, 228, 193, 0.2)",
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #f9e4c1 0%, #ddb765 50%, #b08130 100%)",
        "gold-gradient-hover": "linear-gradient(135deg, #ffffff 0%, #f2e4c1 40%, #cb9d3e 100%)",
        "plum-vignette": "radial-gradient(circle at center, rgba(33, 12, 30, 0.6) 0%, rgba(14, 5, 13, 0.95) 100%)",
        "glass-gradient": "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.03) 100%)",
      },
      animation: {
        "float-slow": "float 8s ease-in-out infinite",
        "pulse-glow": "pulseGlow 4s ease-in-out infinite",
        "shimmer": "shimmer 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.7", transform: "scale(1.05)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
