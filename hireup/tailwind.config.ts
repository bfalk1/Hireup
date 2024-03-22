import { fontFamily } from "tailwindcss/defaultTheme";
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
 


export default {
  content: ["./src/**/*.tsx"],
  darkMode: 'class', // Enable dark mode based on class
  theme: {
    extend: {
      screens: {
        'lg': '768px', // Custom breakpoint
      },
      fontFamily: {
        sans: ['Poppins', ...fontFamily.sans],
      },
      colors: {
        // Customize your dark mode colors here
        dark: {
          bg: '#01011c',
          text: '#ffffff',
          // Add other dark mode colors as needed
        },
      },
    },
  },
  plugins: [

    addVariablesForColors],
}
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}