import React from 'react';
import { Container } from './styles';

interface Props{
  children: string,
  styleVariants: 'primary' | 'secundary',
  onClick: () => void,
}

const boxShadowBase = '0 0px 0px 0 rgba(0,0,0,0.14), 0 0px 0px 0 rgba(0,0,0,0.12), 0 0px 0px 0px rgba(0,0,0,0.20)';
const boxShadowHover = '0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12), 0 2px 4px -1px rgba(0,0,0,0.20)';

const Button: React.FC<Props> = (props) => {
  const { children, styleVariants, onClick } = props;

  return (
    <Container
      type="button"
      styleVariants={styleVariants}
      initial={{
        boxShadow: boxShadowBase,
      }}
      whileHover={{
        scale: 1.05,
        boxShadow: boxShadowHover,
      }}
      whileTap={{
        scale: 1,
        boxShadow: boxShadowBase,
      }}
      onClick={onClick}
    >
      {children}
    </Container>
  );
};

export default Button;
