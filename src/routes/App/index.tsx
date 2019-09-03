import React from 'react';

import logo from 'assets/icons/logo.svg';

import useStyles from './styles';

const App = (): JSX.Element => {
  const classes = useStyles();
  return (
    <div className={classes.appContainer}>
      <header className={classes.appHeader}>
        <img className={classes.appLogo} src={logo} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className={classes.appLink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
