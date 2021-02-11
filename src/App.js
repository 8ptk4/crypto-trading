import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import DashboardRoutes from './layout/Dashboard/dashboard-routes';
import LoginRoutes from './layout/Login/login-routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { loadingStyle, loadingIconStyle } from './style';

const Index = lazy(() => import('./layout/Login/Index'));
const Signup = lazy(() => import('./layout/Login/Signup/Signup'));
const Signin = lazy(() => import('./layout/Login/Signin/Signin'));
const Trade = lazy(() => import('./layout/Dashboard/pages/trade/Trade'));
const Wallet = lazy(() => import('./layout/Dashboard/pages/Wallet/Wallet'));
const Deposit = lazy(() => import('./layout/Dashboard/pages/Deposit/Deposit'));
const NoMatch = lazy(() => import('./404'));

const App = () => (
  <BrowserRouter>
    <Suspense fallback={
      <div style={loadingStyle}>
        <h6>Loading... </h6>
        <CircularProgress style={loadingIconStyle} />
      </div>
    }>
      <Switch>
        <LoginRoutes path="/" exact component={Index} />
        <LoginRoutes path="/signup" component={Signup} />
        <LoginRoutes path="/signin" component={Signin} />
        <DashboardRoutes path="/dashboard/trade" component={Trade} />
        <DashboardRoutes path="/dashboard/wallet" component={Wallet} />
        <DashboardRoutes path="/dashboard/deposit" component={Deposit} />
        <Route component={NoMatch} />
      </Switch>
    </Suspense>
  </BrowserRouter>
);



export default App;
