import React from 'react';
import { Switch, Route } from 'react-router-dom';

import routeNames from 'routes/routeNames';
import Login from 'routes/Login';
import App from 'routes/App';

const Routes = (): JSX.Element => (
  <Switch>
    <Route exact path={routeNames.LOGIN} component={Login} />
    <Route path={routeNames.APP} component={App} />
  </Switch>
);

export default Routes;
