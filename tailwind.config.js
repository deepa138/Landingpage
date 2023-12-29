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
        yellow:'#ffc600',
        greenlight:'#f4f9fc',
        pinklight:'rgba(225,36,84,.1)',
        icon_bg_light:'hsla(90,34%,56%,.1)',
        overlay:'rgb(34, 54, 69,.9) ',
        blue:'#13232f',
      },
      textColor:{
        primary: '#e12454',
        green:'#8fb569',
        gray:'#7a8a9e',
        yellow:'#ffc600',
        offwhite:'#91a1b4',
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

