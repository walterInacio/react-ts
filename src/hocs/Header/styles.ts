import { makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  header: {
    backgroundColor: theme.palette.primary.dark,
  },
  sideMenuHeader: {
    backgroundColor: theme.palette.primary.dark,
    display: 'flex',
    alignItems: 'center',
  },
}));

export default useStyles;
