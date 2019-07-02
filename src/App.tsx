import React from 'react';
import { hot } from 'react-hot-loader';
import { ThemeProvider } from 'styled-components';

import Routes from './containers/router/Routes.container';
import theme from './theme';

const App: React.FunctionComponent = () => (
  <ThemeProvider theme={theme}>
    <Routes />
  </ThemeProvider>
);

export default hot(module)(App);
