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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#6427CE",
        secundary: "#DEDCFF",
        tertiary: "#F3F2FF",
        acent: "#433BFF",
        bg: "#FBFBFE",
        textColor: "#050315",
      },
      fontFamily: {
        hostGrotesk: ["var(--font-hostGrotesk)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
