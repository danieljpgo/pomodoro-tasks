import 'styled-components';

interface Colors{
  primary: string,
  secundary: string,
  tertiary: string,
  text: {
    primary: string,
    secundary: string,
  },
  subtext: string,
  title: string,
  background: string,
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
