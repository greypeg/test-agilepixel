import { type Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {

      fontFamily: {
        sans: ["Anton", ...defaultTheme.fontFamily.sans],
      },

    },
  },
  plugins: [],
} satisfies Config;
