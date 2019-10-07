import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import toLoadable from '@/components/loadable/toLoadable';
import Layout from '@/components/layout/Layout.component';

// Views
const IndexView = toLoadable(() => import('@/views/index/Index.view'));
const DashboardView = toLoadable(() =>
  import('@/views/dashboard/Dashboard.view')
);
const CharactersView = toLoadable(() =>
  import('@/views/characters/Characters.view')
);

const Routes: FunctionComponent = () => (
  <Router>
    <Switch>
      <Layout>
        <Route exact path="/" component={IndexView} />
        <Route exact path="/dashboard" component={DashboardView} />
        <Route exact path="/characters" component={CharactersView} />
      </Layout>
    </Switch>
  </Router>
);

export default Routes;
