import { makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'stretch',
  },
  form: {
    marginTop: theme.spacing(3),
    alignItems: 'stretch',
    display: 'flex',
    flexDirection: 'column',
  },
  item: {
    marginBottom: theme.spacing(2),
  },
  submit: {
    alignSelf: 'center',
  },
}));

export default useStyles;
