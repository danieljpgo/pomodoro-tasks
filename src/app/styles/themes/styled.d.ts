import 'styled-components';

interface Colors{
  primary: string,
  secundary: string,
  text: {
    primary: string,
    secundary: string,
  },
  subtext: string,
  title: string,
  background: {
    main: string,
    constrast: string,
  },
  priority: {
    hight: string,
    medium: string,
    low: string,
  },
  complete: string,
}

interface Shapes{
  borderRadius: number,
}

interface Breakpoints{
  small: number,
  medium: number,
  large: number,
  xlarge: number,
}

interface FontSize{
  xsmall: number,
  small: number,
  medium: number,
  large: number,
  xlarge: number,
}

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string,
    unit: number,
    colors: Colors,
    shapes: Shapes,
    breakpoints: Breakpoints,
    fontSize: FontSize,
  }
}
