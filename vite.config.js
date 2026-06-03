import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import analyzer from "vite-bundle-analyzer";
import {analyzer} from 'vite-bundle-analyzer'

const ReactCompilerConfig = {
  target: '18', // Since you are on React 18
  runtimeModule: 'react-compiler-runtime' 
};
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
      babel: {
        plugins: [
          ["babel-plugin-react-compiler", ReactCompilerConfig],
        ],
      },
    }),
    analyzer(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
}
})
