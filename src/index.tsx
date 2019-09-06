import React, { ReactElement } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { ThemeProvider } from '@material-ui/styles';

import store from 'reducers';
import { history } from 'reducers/router';
import Routes from 'routes';

import theme from './theme';
import './styles.css';
import * as serviceWorker from './serviceWorker';

const root = document.getElementById('root');

const AppContainer = (): ReactElement => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </ConnectedRouter>
  </Provider>
);

ReactDOM.render(<AppContainer />, root);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
