export interface Props{
  theme: Theme,
}

interface Theme{
  title: string,
  unit: number,
  colors: Colors,
  shapes: Shapes,
  breakpoints: Breakpoints,
  fontSize: FontSize,
}

interface Colors{
  primary: string,
  secundary: string,
  tertiary: string,
  text: string,
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
