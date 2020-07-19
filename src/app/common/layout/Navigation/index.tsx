import React from 'react';
import { Container, Main } from './styles';
import Footer from '../Footer';

interface Props {
  children: React.ReactNode
}

const Navigation: React.FC<Props> = (props) => {
  const { children } = props;

  return (
    <Container>
      <Main>{children}</Main>
      <Footer />
    </Container>
  );
};

export default Navigation;
