import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: './lib/main.js',
      name: 'mark-selection',
      formats: ['es','umd'],
      fileName: (format) => `mark-selection.${format}.js`
    }
  }
})
