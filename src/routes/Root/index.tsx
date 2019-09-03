import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Button, Link } from '@material-ui/core';

import strings from 'locales/root';
import Routes from 'routes/routeNames';

import useRoot from './hooks';
import useStyles from './styles';

const Root = (): JSX.Element => {
  const classes = useStyles();
  const { handleEmptyLink } = useRoot();
  return (
    <div className={classes.container}>
      <Link component={RouterLink} to={Routes.APP}>
        <Button>{strings.appCta}</Button>
      </Link>
      <Link component={RouterLink} to={Routes.ROOT}>
        <Button onClick={handleEmptyLink}>{strings.emptyCta}</Button>
      </Link>
    </div>
  );
};

export default Root;
