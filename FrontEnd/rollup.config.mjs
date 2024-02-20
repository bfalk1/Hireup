// rollup.config.js
import html from "@rollup/plugin-html";
import { terser } from "rollup-plugin-terser";
import { nodeResolve } from '@rollup/plugin-node-resolve';
import serve from 'rollup-plugin-serve';
import copy from 'rollup-plugin-copy';


const template = ({ bundle }) => {
  return `<!DOCTYPE html>
  <html lang="en"></html>
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        @font-face {
              font-family: 'Antic-Regular';
              src: url('Assets/Antic-Regular.ttf') format('truetype');
              /* You can also provide other font formats (e.g., woff, woff2) for better cross-browser support */
          }
        .body{
          background-color: rgba(243,242,240,255);
          font-family: 'Roboto', sans-serif;
          overflow-x: hidden; 
        }
        .button {
            background-image: linear-gradient(to left, #000cf9, #00e1ff);
            color: #fff;
            padding: 10px 20px;
            border: none;
            cursor: pointer;
            border-radius: 10px;
            box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
        }
        .inputText {
          border-radius: 5px;
          width: 270px;
          background-color: #faf7f7;
          height: 30px;
          border-style: solid;
          border-color: lightgray;
          margin-left: 5px;
          margin-right: 5px;
      }
    </style>
      <title>Blinq</title>
  </head>
  
  
  <body class="body">
      <nav-bar></nav-bar>
      <div id="outlet"></div>
      <script type="module" src="router.js"></script>
  </body>
  </html>`

}
//console.log(__dirname+"FrontEnd")
export default {
  input: "router.js", // Entry point for your JavaScript
  output: {
    dir: "dist", // Output bundle file
    format: "esm", // Use ES module format
  },
  plugins: [
    copy({
      targets: [
        { src: 'Assets/*', dest: 'dist/Assets' }
      ]
    }),
    // Minify JavaScript (optional)
    nodeResolve({
      // Specify the directory where your package.json is located (if not in the root)
      rootDir: "/Users/julianbrickman/Desktop/Jemba/FrontEnd",
      
      // Include only certain file extensions (e.g., .js, .mjs)
      extensions: ['.js', '.mjs'],
      
      // Specify custom module directories to search
      customResolveOptions: {
        moduleDirectories: ['package.json'],
      },
    }), // Add this line
    terser(),
    serve({
      open: true,
      contentBase: 'dist',
      port: 8000
    }),
    // Generate an HTML file with the bundled JavaScript injected
    html({
      fileName: "index.html", // Output HTML file name
      template: template, // Your main HTML template
    }),
  ],
};
