/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["public/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'bgBanner': "linear-gradient(270deg, #222222 0%, rgba(34, 34, 34, 0) 29.83%), linear-gradient(0deg, rgba(34, 34, 34, 0.35), rgba(34, 34, 34, 0.35)), url(images/bg-banner.png)",
      
      },

      backdropBlur: {
        '25': '25px',
      },

      boxShadow: {
        'pink': '0px 0px 20px rgba(255, 83, 127, 0.8)',
      },

      borderRadius: {
        '32': '32px',
        '48': '48px',
      },

      colors: {
        'grey-1': '#F6F6F6',
        'grey-2': '#888888',
        'grey-3': '#666666',
        'grey-4': '#EEEFF4',
        'green-1': '#25D366',
        'blue-1': '#00ADB5',
        'black-1': '#222222',
        'pink-1': '#FF537F',
        'white-1': '#F7F7F7',
      },

      fontSize: {
        '10': '10px',
        '12': '12px',
        '14': '14px',
        '16': '16px',
        '18': '18px',
        '20': '20px',
        '24': '24px',
        '26': '26px',
        '28': '28px',
        '32': '32px',
        '36': '36px',
        '40': '40px',
        '48': '48px', 
        '64': '64px',

      },

      fontFamily: {
        'work-sans': ['Work Sans'],
        'raleway': ['Raleway'],
      },

      lineHeight: {
        '10': '10px',
        '14': '14px',
        '16': '16px',
        '18': '18px',
        '33': '33px', 
        '42': '42px', 
        '48': '48px', 
        '56': '56px',
        '75': '75px', 
      },

      //padding, margin, width, height, maxHeight, flex-basis, 
      //gap, inset, space, translate, scrollMargin, scrollPadding, and textIndent.
      spacing: {
        '10': '10px',
        '14': '14px',
        '21': '21px',
        '26': '26px',
        '31': '31px',
        '38': '38px',
        '42': '42px', 
        '48': '48px', 
        '50': '50px', 
        '56': '56px',
        '64': '64px', 
        '66': '66px',
        '72': '72px',
        '80': '80px',
        '100': '100px',
        '106': '106px',
        '130': '130px', 
        '312': '312px',
      },
      
    },
  },
  plugins: [],
}
