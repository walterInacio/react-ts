import React from 'react';
import { Typography, Toolbar, Box, Grid } from '@material-ui/core';

import useStyles from './styles';

interface Props {
  title: string;
  username?: string;
}

const HeaderComponent = ({ title }: Props): JSX.Element => {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <Toolbar>
        <Grid container justify="center">
          <Typography variant="h6">
            <Box color="secondary.contrastText">{title}</Box>
          </Typography>
        </Grid>
      </Toolbar>
    </div>
  );
};

export default HeaderComponent;
