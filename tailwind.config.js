/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1a365d",
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#1a365d",
        },
        secondary: {
          DEFAULT: "#2563eb",
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
        accent: {
          DEFAULT: "#3b82f6",
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
        background: {
          DEFAULT: "#0a0a0a",
          dark: "#000000",
          light: "#1a1a1a",
        },
        surface: {
          DEFAULT: "#1a1a1a",
          dark: "#0f0f0f",
          light: "#2a2a2a",
        },
        text: {
          primary: "#ffffff",
          secondary: "#e5e5e5",
          muted: "#a3a3a3",
          dark: "#737373",
        },
        border: {
          DEFAULT: "#262626",
          light: "#404040",
          dark: "#171717",
        },
      },
      fontFamily: {
        primary: ["Space Grotesk", "Helvetica Neue", "Arial", "sans-serif"],
        display: ["Space Grotesk", "sans-serif"],
        mono: ["JetBrains Mono", "Monaco", "Courier New", "monospace"],
      },
      fontWeight: {
        light: 300,
        regular: 400,
        medium: 500,
        bold: 700,
      },
      fontSize: {
        hero: "clamp(6rem, 12vw, 18rem)",
        subtitle: "clamp(1.2rem, 2.5vw, 2rem)",
        "section-title": "clamp(1.5rem, 3vw, 2.5rem)",
        "section-number": "clamp(2rem, 4vw, 3rem)",
        project: "clamp(3rem, 6vw, 8rem)",
        rotating: "clamp(2rem, 4vw, 3.5rem)",
      },
      maxWidth: {
        container: "1400px",
      },
      padding: {
        container: "clamp(2rem, 5vw, 8rem)",
      },
      spacing: {
        section: "clamp(8rem, 15vw, 15rem)",
      },
      borderRadius: {
        none: "0px",
      },
      transitionTimingFunction: {
        custom: "cubic-bezier(0.25, 0.1, 0.25, 1)",
        hover: "ease-out",
      },
      animation: {
        marquee: "marquee 20s linear infinite",
        float: "float 6s ease-in-out infinite",
        "rotate-subtle": "rotate-subtle 0.3s ease-out",
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.8s ease-out forwards",
        "scale-in": "scaleIn 0.5s ease-out forwards",
        glow: "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "rotate-subtle": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(5deg)" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(59, 130, 246, 0.2)" },
          "100%": { boxShadow: "0 0 40px rgba(59, 130, 246, 0.4)" },
        },
      },
    },
  },
  plugins: [],
};
