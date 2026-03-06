module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        shop_bg: '#FFFFFF', // Clean white background
        shop_nav: '#F8FAFC', // Slate 50 for nav bar (muted grey)
        shop_border: '#E2E8F0', // Slate 200 border (soft contrast)
        shop_text_primary: '#0F172A', // Slate 900 for titles (almost black)
        shop_text_secondary: '#64748B', // Slate 600 for descriptions (muted grey)
        shop_accent: '#2563EB', // Blue 600 for buttons/highlights (professional blue)
        shop_yellow: '#EAB308', // For ratings (warm yellow)
      },
      fontFamily: {
        'shop_font': ['"Inter"', 'sans-serif'], // Professional sans-serif
      },
    },
  },
  plugins: [],
};