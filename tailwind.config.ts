import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#6D9886",
          200: "#5A8171",
        },
        secondary: "#D9CAB3",
        secondaryHover: "#C3B6A1",
        tertiary: "#F6F6F6",
        indigo: {
          500: "#5A8171",
          600: "#6D9886",
        },
      },
    },
  },
  plugins: [
    // ...
    require("@tailwindcss/forms"),
  ],
} satisfies Config;
