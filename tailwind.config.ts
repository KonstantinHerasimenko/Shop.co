import type { Config } from 'tailwindcss';


const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        'heading-1': '4rem',
        'heading-2': '3rem',
        'heading-3': '2.5rem',
        'heading-4': '2.25rem',
        'heading-5': '2rem',
        'body-1': '1.5rem',
        'body-2': '1.25rem',
        'body-3': '1rem',
        'body-4': '0.875rem',
        'body-5': '0.75rem',
        'body-6': '0.625rem',
      },
      size: { '18': '4.5rem' },
      spacing: { '3.5': '0.875rem', '4.5': '1.125rem' },
      borderRadius: { '13xl': '3.75rem' },
    },
  },
  plugins: [],
}
export default config