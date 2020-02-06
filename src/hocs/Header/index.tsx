import React, { useEffect, useState } from 'react';
import { Typography, Toolbar, Box, Grid, Link } from '@material-ui/core';

import { Link as RouterLink } from 'react-router-dom';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import Routes from 'routes/routeNames';

import locales from 'locales/header';

import useStyles from './styles';

interface Props {
  children?: JSX.Element;
  title: string;
  username?: string;
}

const HeaderComponent = ({ children, title }: Props): JSX.Element => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  const [hideButton, setHideButton] = useState<boolean>(false);

  useEffect((): void => {
    setHideButton(!matches)
  }, [matches]);

  return (
    <div>
      <div className={hideButton ? classes.sideMenuHeader : classes.header}>
        <Toolbar>
          <Grid container justify="flex-start" alignItems="flex-end">
            <Typography variant="h6">
              <Link component={RouterLink} to={Routes.HOME}>
                <Box color="secondary.contrastText">{title}</Box>
              </Link>
            </Typography>
          </Grid>
          {matches && (
            <Grid
              container
              spacing={0}
              justify="flex-end"
              alignItems="flex-end"
              direction="row"
            >
              <Link component={RouterLink} to={Routes.PROFILE}>
                <Box color="secondary.contrastText" marginRight="10px">
                  {'Profile'}
                </Box>
              </Link>
              <Link component={RouterLink} to={Routes.LOGIN}>
                <Box color="secondary.contrastText">{locales.exitSession}</Box>
              </Link>
            </Grid>
          )}
        </Toolbar>
      </div>
      {children}
    </div>
  );
};

export default HeaderComponent;
