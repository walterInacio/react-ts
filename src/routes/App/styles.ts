import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  appContainer: {
    textAlign: 'center',
  },
  appHeader: {
    backgroundColor: '#282c34',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 16,
    color: 'white',
  },
  appLogo: {
    height: '40vmin',
    pointerEvents: 'none',
  },
  appLink: {
    color: '#61dafb',
  },
});

export default useStyles;
