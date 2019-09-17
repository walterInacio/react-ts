import { makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  header: {
    backgroundColor: theme.palette.primary.dark,
  },
}));

export default useStyles;
