import React from 'react';
import { Switch, Route } from 'react-router-dom';

import routeNames from 'routes/routeNames';
import Root from 'routes/Root';
import App from 'routes/App';

const Routes = (): JSX.Element => (
  <Switch>
    <Route exact path={routeNames.ROOT} component={Root} />
    <Route path={routeNames.APP} component={App} />
  </Switch>
);

export default Routes;
