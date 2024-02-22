import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...fontFamily.sans], // Add 'Poppins' to the sans-serif font stack
      },
    },
  },
  plugins: [],
} satisfies Config;