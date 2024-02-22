import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      screens: {
        'lg': '768px', // Custom breakpoint
      },
      fontFamily: {
        sans: ['Poppins', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
}