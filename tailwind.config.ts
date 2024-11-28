import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        textColorTitle: "#052e16",
        colorPrimary: "#166534",
        textPrimary: "#FFFFFA",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        slideIn: "slideIn 0.3s ease forwards",
        slideDown: "slideDown 0.3s ease-out forwards",
      },
      keyframes: {
        slideIn: {
          "0%": {
            transform: "translateX(-100%)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
        slideDown: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
    },
  },
} satisfies Config;
