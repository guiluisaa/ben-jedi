import React from 'react';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader';
import { ThemeProvider } from 'styled-components';

import store from './io/store';
import theme from './theme';
import Routes from './containers/router/Routes.container';

const App: React.FunctionComponent = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  </Provider>
);

export default hot(module)(App);
