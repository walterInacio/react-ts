import { makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core';

// FIXME: there is an issue with MaterialUI when defining return type and using
// makeStyles, see: https://github.com/mui-org/material-ui/issues/16431
const useStyles = makeStyles((theme: Theme) => ({
  appContainer: {
    textAlign: 'center',
  },
  appHeader: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 16,
    color: theme.palette.secondary.main,
  },
  appLogo: {
    height: '40vmin',
    pointerEvents: 'none',
  },
  appLink: {
    color: theme.palette.secondary.main,
  },
}));

export default useStyles;
