import colors from './colors';

export const unit = 16;

export default {
  title: 'light',

  unit,

  colors: {
    primary: colors.blue[400],
    secundary: colors.blue[800],
    background: {
      main: colors.gray[600],
      constrast: colors.gray[400],
    },
    text: {
      primary: colors.white[100],
      secundary: colors.blue[400],
    },
    subtext: colors.gray[200],
    title: colors.white[100],
    priority: {
      hight: colors.red[400],
      medium: colors.yellow[300],
      low: colors.green[700],
    },
    complete: colors.green[400],
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
