import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

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
    })],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
}
})
