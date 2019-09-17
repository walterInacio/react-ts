import { makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    width: '25rem',
    border: '1px solid #c1c1c185',
    borderRadius: '2px',
  },
  space: {
    padding: theme.spacing(3),
  },
  gridStyle: {
    minHeight: '50vh',
  },
}));

export default useStyles;
