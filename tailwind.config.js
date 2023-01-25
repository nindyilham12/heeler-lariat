/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["public/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'bgBanner': "linear-gradient(270deg, #222222 0%, rgba(34, 34, 34, 0) 29.83%), linear-gradient(0deg, rgba(34, 34, 34, 0.35), rgba(34, 34, 34, 0.35)), url(../images/bg-banner.png)",

        
        'shopBan': "linear-gradient(180deg, rgba(0, 0, 0, 0.5) 20%, rgba(0, 0, 0, 0) 90%), url(../images/image-8.png)",
        'storyBan': "url('../images/image-7.png')",
        'storyBanFoot': 'linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))',
        'galleryBan': "url('../images/image-26.png')",
        'contactBan': "linear-gradient(87.31deg, rgba(0, 0, 0, 0.7) 1.94%, rgba(0, 0, 0, 0) 92.52%), url('../images/image-33.png')",
        'contactMap': "linear-gradient(180deg, rgba(188, 153, 95, 0.2) -25.31%, rgba(188, 153, 95, 0) 159.39%)",
        'homeStory': "linear-gradient(0deg, #D3B178 21.95%, rgba(211, 177, 120, 0.72) 47.35%, rgba(211, 177, 120, 0) 72.26%)",
        'homeReview': "linear-gradient(154.19deg, #999A5E -21.86%, #6B724E 67.77%)",
        'privPolBan': "url('../images/image-32.png')",
        'homeBan': "linear-gradient(180deg, rgba(0, 0, 0, 0.5) 20%, rgba(0, 0, 0, 0) 90%), url('../images/image-2.png')",
        "prodFeat-1": "linear-gradient(0deg, rgba(0, 0, 0, 0.7) 16.18%, rgba(0, 0, 0, 0) 72.2%), url('../images/image-3.png')",
        "prodFeat-2": "linear-gradient(0deg, rgba(0, 0, 0, 0.7) 16.18%, rgba(0, 0, 0, 0) 72.2%), url('../images/image-4.png')",
        "tellBan": "linear-gradient(180deg, #D3B178 0%, rgba(252, 168, 21, 0) 50%), url(../images/image-5.png)",
        "igHover": "linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))",
        "reviewBan": "linear-gradient(154.19deg, #999A5E -21.86%, #6B724E 67.77%)"        
      },

      backgroundSize: {
        '290': '290px'
      },

      borderRadius: {
        '5': '5px',
        '10': '10px',
        '48': '48px', //
      },

      borderWidth: {
        '2.5': '2.5px',
        '3': '3px',
      },

      colors: {
        'grey-1': '#F6F6F6',
        'grey-2': '#888888',
        'blue-1': '#00ADB5',
        'black-1': '#222222',
        'pink-1': '#FF537F',
        'white-1': '#F7F7F7',
      },

      boxShadow: {
        'shadow-1': '0px 8px 20px rgba(0, 0, 0, 0.3)',
        'shadow-2': '0px 32px 64px rgba(57, 20, 0, 0.04)',
      },

      fontSize: {
        '12': '12px',
        '13': '13px',
        '14': '14px',
        '15': '15px',
        '16': '16px',
        '17': '17px',
        '18': '18px',
        '20': '20px',
        '24': '24px',
        '26': '26px',
        '28': '28px',
        '32': '32px',//
        '36': '36px',
        '40': '40px',
        '48': '48px', //
        '64': '64px', //

      },

      fontFamily: {
        'work-sans': ['Work Sans'],
        'raleway': ['Raleway'],
      },

      lineHeight: {
        '18': '18px',
        '20': '20px',
        '21': '21px',
        '22': '22px',
        '23': '23px',
        '27': '27px',
        '29': '29px',
        '33': '33px', //
        '38': '38px',
        '39': '39px',
        '42': '42px', //
        '45': '45px',
        '48': '48px', //
        '75': '75px', //
      },

      //padding, margin, width, height, maxHeight, flex-basis, 
      //gap, inset, space, translate, scrollMargin, scrollPadding, and textIndent.
      spacing: {
        '9': '9px',
        '11': '11px',
        '13': '13px',
        '15': '15px',
        '17': '17px',
        '18': '18px',
        '19': '19px',
        '21': '21px',
        '22': '22px',
        '23': '23px',
        '25': '25px',
        '26': '26px',
        '29': '29px',
        '30': '30px',
        '31': '31px',
        '34': '34px',
        '35': '35px',
        '36': '36px',
        '37': '37px',
        '41': '41px',
        '42': '42px', //
        '43': '43px',
        '45': '45px',
        '48': '48px', //
        '50': '50px', //
        '51': '51px',
        '53': '53px',
        '54': '54px',
        '55': '55px',
        '56': '56px',
        '57': '57px',
        '60': '60px',
        '64': '64px', //
        '68': '68px',
        '72': '72px',
        '74': '74px',
        '76': '76px',
        '77': '77px',
        '81': '81px',
        '86': '86px',
        '87': '87px',
        '88': '88px',
        '90': '90px',
        '94': '94px',
        '98': '98px',
        '100': '100px',
        '108': '108px',
        '122': '122px',
        '130': '130px', //
        '135': '135px',
        '142': '142px',
        '150': '150px',
        '165': '165px',
        '167': '167px',
        '180': '180px',
        '182': '182px',
        '190': '190px',
        '217': '217px',
        '269': '269px', //
        '290': '290px',
        '319': '319px',
        '333': '333px',
        '365': '365px',
        '50%': '50%',

      },

      maxWidth: {
        '269': '269px',
        '609': '609px'
      },
      
    },
  },
  plugins: [],
}
