/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: '#e12454',
        green:'#8fb569',
        darkgreen:'#223645',
      },
      textColor:{
        primary: '#e12454',
        green:'#8fb569',
        gray:'#7a8a9e',
        yellow:'#ffc600',
      },
      boxShadow: {
        custom: '0 10px 29.7px 0.3px hsla(0,0%,71%,.6)',
      },
      width: {
        'fit-content': 'fit-content',
      },
      borderColor: {
        'primary': '#e12454',
        'green':'#8fb569',
      },
    },
  },
  plugins: [],
}

