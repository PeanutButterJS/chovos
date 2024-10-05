import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  // Whether to use css reset
  preflight: true,
  syntax: 'template-literal', // required
  jsxFramework: 'react',
  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          background: {
            primary: { value: 'white' }
          },
          text: {
            primary: { value: '#121212' }
          }
        }
      }
    }
  },

  // The output directory for your css system
  outdir: 'styled-system'
});
