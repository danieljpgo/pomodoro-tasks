import styled from 'styled-components';

interface Props {
  variants: 'primary' | 'secundary',
}

export const Button = styled.button<Props>`
  color: ${(props) => props.theme.colors.text}

  
`;

export default Button;
