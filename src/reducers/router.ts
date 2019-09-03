import { createBrowserHistory } from 'history';
import {
  routerMiddleware as routerMiddle,
  connectRouter,
} from 'connected-react-router';

export const history = createBrowserHistory();
export const routerMiddleware = routerMiddle(history);
export default connectRouter(history);
