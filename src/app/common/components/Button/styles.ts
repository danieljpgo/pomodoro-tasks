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

export const Container = styled(motion.button)<Props>`
  font-size: ${(props) => props.theme.fontSize.small}px;
  font-family: Roboto;
  border: none;
  border-radius: ${(props) => props.theme.shapes.borderRadius}px;
  padding: ${(props) => props.theme.unit / 1.6}px ${(props) => props.theme.unit / 2}px;
  width: 160px;

  ${(props) => variants[props.styleVariants]}
`;

export const boxShadowBase = '0 0px 0px 0 rgba(0,0,0,0.14), 0 0px 0px 0 rgba(0,0,0,0.12), 0 0px 0px 0px rgba(0,0,0,0.20)';
export const boxShadowHover = '0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12), 0 2px 4px -1px rgba(0,0,0,0.20)';

export default Container;
