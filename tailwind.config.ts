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
        ink: "#1a2332",
        sub: "#5a6b80",
        line: "#e3e8ef",
        bg: "#f7f9fb",
        card: "#ffffff",
        success: "#0e8a5f",
        "success-bg": "#e6f5ef",
        error: "#c0392b",
        "error-bg": "#fbeeec",
        accent: "#2563eb",
        "accent-bg": "#eaf1fd",
        warm: {
          50: "#FDF8F3",
          100: "#F5EDE3",
          200: "#E8D5C0",
          300: "#C8B8A8",
          400: "#A89888",
          500: "#887868",
        },
      },
      fontFamily: {
        heading: ['"Space Grotesk"', "system-ui", "sans-serif"],
        body: ["system-ui", "-apple-system", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
