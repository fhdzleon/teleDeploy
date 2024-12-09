import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#6427CE",
        secundary: "#DEDCFF",
        tertiary: "#F3F2FF",
        acent: "#433BFF",
        bg: "#FBFBFE",
        textColor: "#050315",
        borderInput: "#050315",
        celeste: "#E8F1FE",
      },
      fontFamily: {
        hostGrotesk: ["var(--font-hostGrotesk)"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
