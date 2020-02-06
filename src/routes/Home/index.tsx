import React from 'react';

import locales from 'locales/home';

import useStyles from './styles';

const Home = (): JSX.Element => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <p>{locales.home}</p>
    </div>
  );
};

export default Home;
