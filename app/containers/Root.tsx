/* eslint-disable react/jsx-props-no-spreading */
import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { hot } from 'react-hot-loader/root';
import { History } from 'history';
import { Switch, Route, Redirect } from 'react-router-dom';
import Loader from './Loader/Loader';
import routes from '../routes.json';
import App from './App';
import { Store } from '../store';

type Props = {
  store: Store;
  history: History;
};

const LoadingMessage = () => <Loader />;
// Lazily load routes and code split with webpack
/* const WelcomeFlowPage = React.lazy(() =>
  import('../pages/WelcomeFlow/WelcomeFlow')
);
const OperationFlowPage = React.lazy(() =>
  import('../pages/OperationFlow/OperationFlow')
); */

const HomePage = React.lazy(() => import('../pages/Home/Home'));

const Root = ({ store, history }: Props) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App>
        <Suspense fallback={<LoadingMessage />}>
          <div className="container">
            <Switch>
              <Route path={routes.HOME} component={HomePage} />
              <Redirect to={routes.HOME} />
            </Switch>
          </div>
        </Suspense>
      </App>
    </ConnectedRouter>
  </Provider>
);

export default hot(Root);
