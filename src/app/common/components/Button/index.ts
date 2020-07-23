import styled from 'styled-components';
import { motion } from 'framer-motion';

interface Props {
  variantsStyle: 'primary' | 'secundary',
}

export const Button = styled(motion.button)<Props>`
  color: ${(props) => props.theme.colors.text[props.variantsStyle]};
  font-size: ${(props) => props.theme.fontSize.small}px;
  font-family: Roboto;

  border: none;
  border-radius: ${(props) => props.theme.shapes.borderRadius}px;
  padding: ${(props) => props.theme.unit / 2}px;
  width: 120px;
  background-color: ${(props) => props.theme.colors[props.variantsStyle]}; 
`;

export default Button;
