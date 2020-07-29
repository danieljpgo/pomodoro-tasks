import styled from 'styled-components';
import { motion } from 'framer-motion';

interface TitleProps{
  selected: boolean;
}

export const Container = styled.div`
  padding: 0 ${(props) => props.theme.unit}px;
`;

export const ListContainer = styled.div`
  display: flex;
`;

export const TitleContainer = styled.div`
  display: grid;
  grid-template-columns: min-content min-content;
  grid-gap: ${(props) => props.theme.unit}px;

  margin-bottom: ${(props) => props.theme.unit}px;
  white-space: nowrap;
  transform: translateZ(0);
`;

export const Title = styled(motion.h2)<TitleProps>`
  position: relative;
  cursor: pointer;

  ${(props) => !props.selected && `
    color: ${props.theme.colors.subtext};
  `}
`;

export const Underline = styled(motion.div)`
  background-color: ${(props) => props.theme.colors.text.primary};
  border-radius: ${(props) => props.theme.shapes.borderRadius}px;
  margin-top: ${(props) => props.theme.unit / 3}px;
  height: 3px;
  width: 100%;
`;
