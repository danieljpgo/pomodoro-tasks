import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

interface Props {
  styleVariants: 'primary' | 'secundary',
}

const variants = {
  primary: css`
    color: ${(props) => props.theme.colors.text.primary};
    background-color: ${(props) => props.theme.colors.primary};
  `,

  secundary: css`
    color: ${(props) => props.theme.colors.text.secundary};
    background-color: ${(props) => props.theme.colors.secundary};
  `,
};

export const Button = styled(motion.button)<Props>`
  font-size: ${(props) => props.theme.fontSize.small}px;
  font-family: Roboto;
  border: none;
  border-radius: ${(props) => props.theme.shapes.borderRadius}px;
  padding: ${(props) => props.theme.unit / 1.6}px ${(props) => props.theme.unit / 2}px;
  width: 160px;

  ${(props) => variants[props.styleVariants]}
`;

export default Button;
