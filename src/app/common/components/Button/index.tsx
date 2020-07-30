import React from 'react';
import { Container, boxShadowBase, boxShadowHover } from './styles';

interface Props{
  children: string,
  disabled?: boolean,
  styleVariants: 'primary' | 'secundary',
  onClick: () => void,
}

const Button: React.FC<Props> = (props) => {
  const {
    children,
    disabled,
    styleVariants,
    onClick,
  } = props;

  return (
    <Container
      type="button"
      disabled={disabled}
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

Button.defaultProps = {
  disabled: false,
  styleVariants: 'primary',
  onClick: () => {},
};

export default Button;
