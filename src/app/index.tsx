import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import Light from './styles/themes/light';

const App: React.FC = () => (
  <ThemeProvider theme={Light}>
    <GlobalStyle />
    <h1>Hellow World</h1>
  </ThemeProvider>
);

export default App;
