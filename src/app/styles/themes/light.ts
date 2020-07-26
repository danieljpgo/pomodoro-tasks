export const unit = 16;

export default {
  title: 'light',

  unit,

  colors: {
    primary: '#4760B5',
    secundary: '#39415B40',
    background: {
      main: '#202225',
      constrast: '#27292c',
    },
    text: {
      primary: '#ffffff',
      secundary: '#4760B5',
    },
    subtext: '#808080',
    title: '#ffffff',
  },

  shapes: {
    borderRadius: unit / 3,
  },

  breakpoints: {
    small: 640,
    medium: 768,
    large: 1024,
    xlarge: 1280,
  },

  fontSize: {
    xsmall: 14,
    small: 16,
    medium: 26,
    large: 32,
    xlarge: 48,
  },
};
