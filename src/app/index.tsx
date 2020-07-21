import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import Light from './styles/themes/light';
import Navigation from './common/layout/Navigation';
import Home from './pages/Home';
import store from './main/store';

const App: React.FC = () => (
  <ThemeProvider theme={Light}>
    <GlobalStyle />
    <Provider store={store}>
      <Navigation>
        <Home />
      </Navigation>
    </Provider>
  </ThemeProvider>
);

export default App;
