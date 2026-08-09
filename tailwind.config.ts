import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Brand palette — cobalt blue product identity */
        brand: {
          DEFAULT: "#0057D9",
          50: "#EAF6FF",
          100: "#D6EBFF",
          200: "#B0D6FF",
          300: "#7FBEFF",
          400: "#4A97F2",
          500: "#1E74E6",
          600: "#0057D9",
          700: "#0046B0",
          800: "#0A337A",
          900: "#061A33",
        },
        sky: {
          DEFAULT: "#63B8F5",
          light: "#EAF6FF",
        },
        navy: {
          DEFAULT: "#061A33",
          soft: "#0B2140",
        },
        ink: {
          DEFAULT: "#0B1F3A",
          muted: "#5B6B80",
        },
        line: "#E3ECF6",
      },
      fontFamily: {
        sans: ["var(--font-thai)", "var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-thai)", "var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1180px",
      },
      borderRadius: {
        "2xl": "20px",
        "3xl": "28px",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(6, 26, 51, 0.05), 0 6px 20px rgba(6, 26, 51, 0.06)",
        card: "0 10px 30px rgba(6, 26, 51, 0.08)",
        lift: "0 24px 60px rgba(6, 26, 51, 0.14)",
        brand: "0 18px 40px rgba(0, 87, 217, 0.28)",
        glow: "0 0 0 1px rgba(255,255,255,0.6), 0 30px 60px rgba(6, 26, 51, 0.18)",
      },
      backgroundImage: {
        "hero-fade": "linear-gradient(180deg, #F5FBFF 0%, #EAF6FF 45%, #FFFFFF 100%)",
        "brand-gradient": "linear-gradient(120deg, #0057D9 0%, #1E74E6 50%, #63B8F5 120%)",
      },
      keyframes: {
        floatA: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(-22px, 20px)" },
        },
        floatB: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(24px, -18px)" },
        },
        floatY: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      animation: {
        floatA: "floatA 18s ease-in-out infinite",
        floatB: "floatB 22s ease-in-out infinite",
        floatY: "floatY 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
