import { makeStyles } from '@material-ui/styles';

// FIXME: there is an issue with MaterialUI when defining return type and using
// makeStyles, see: https://github.com/mui-org/material-ui/issues/16431
const useStyles = makeStyles(() => ({
  container: {
    textAlign: 'center',
    fontSize: 92,
  },
}));

export default useStyles;
