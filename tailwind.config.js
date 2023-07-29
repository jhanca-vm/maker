/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,svelte}'],
  theme: {
    extend: {
      colors: {
        primary: '#3ee9e5',
        secondary: '#093f68',
        neutral: '#777f98',
        accent: '#080c20',
        error: '#ff2965'
      },
      fontFamily: {
        sans: ['Manrope Variable', 'sans-serif']
      },
      fontSize: {
        '3xl': ['2rem', '2.5rem']
      },
      spacing: {
        15: '3.75rem',
        16.5: '4.125rem',
        19.5: '4.875rem'
      }
    }
  }
}
