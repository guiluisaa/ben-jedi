import React from 'react';
import { hot } from 'react-hot-loader';

import Routes from './containers/router/Routes.container';

const App: React.FunctionComponent = () => {
  return <Routes />;
};

export default hot(module)(App);
