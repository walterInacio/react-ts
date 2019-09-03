import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@material-ui/core';

import Routes from 'routes/routeNames';

const Root = (): JSX.Element => (
  <Link component={RouterLink} to={Routes.APP}>
    {'Go to app'}
  </Link>
);

export default Root;
