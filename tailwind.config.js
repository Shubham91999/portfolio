/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'dot-pattern': 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
      },
      fontFamily: {
        signature: ['var(--font-signature)'],
      },
    },
  },
  plugins: [],
}
