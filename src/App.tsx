import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader';
import { ThemeProvider } from 'styled-components';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './io/redux/store';
import theme from './theme';
import Routes from './components/routes/Routes.component';

const App: FC = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </PersistGate>
  </Provider>
);

export default hot(module)(App);
