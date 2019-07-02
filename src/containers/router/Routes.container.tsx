import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import toLoadable from '@/components/loadable/toLoadable';

// Views
const IndexView = toLoadable(() => import('@/views/index/Index.view'));

const Routes: React.FunctionComponent = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={IndexView} />
    </Switch>
  </Router>
);

export default Routes;
