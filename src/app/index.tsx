import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import Light from './styles/themes/light';
import Navigation from './common/layout/Navigation';
import Home from './pages/Home';

const App: React.FC = () => (
  <ThemeProvider theme={Light}>
    <GlobalStyle />
    <Navigation>
      <Home />
    </Navigation>
  </ThemeProvider>
);

export default App;
