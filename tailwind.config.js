/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        blackColor: '#000',
        whiteColor: '#fff',
        primaryButton: '#008CFF',
        primaryColor: '#2C294B',
        grayColor: '#B7B5BD',
        greenColor: '#35AD51',
        yellowColor: '#DFAB15',
      },
      margin: {
        basicHeight: 'calc(100vh - 3rem)',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
