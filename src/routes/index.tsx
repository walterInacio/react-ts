import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from 'hocs/Header';

import routeNames from 'routes/routeNames';
import Login from 'routes/Login';
import App from 'routes/App';
import Home from 'routes/Home';
import Profile from 'routes/Profile';

import locales from 'locales/home';

const applyHeader = (component: JSX.Element): (() => JSX.Element) => {
  const newComponent = (): JSX.Element => (
    <Header title={locales.home}>{component}</Header>
  );
  return newComponent;
};

const Routes = (): JSX.Element => (
  <Switch>
    <Route exact path={routeNames.LOGIN} component={Login} />
    <Route exact path={routeNames.HOME} component={applyHeader(Home())} />
    <Route exact path={routeNames.PROFILE} component={applyHeader(Profile())} />
    <Route path={routeNames.APP} component={App} />
  </Switch>
);

export default Routes;
