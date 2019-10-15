//import React from "react";
//import { BrowserRouter } from "react-router-dom";
//import Layout from "components/layout";
//import Router from "components/router";

//import Router from "./router";

import React, { lazy, Suspense } from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom";

// LoginLayout Pages
import Index from "./layout/Login/Index";

const LoginLayout = lazy(() => import("./layout/Login/Login"));
const Signup = lazy(() => import("./layout/Login/Signup"));
const Signin = lazy(() => import("./layout/Login/Signin"));

// Dashboard
const DashboardLayout = lazy(() => import("./layout/Dashboard/Dashboard"));
const Home = lazy(() => import("./layout/Dashboard/pages/Home"));
const Trade = lazy(() => import("./layout/Dashboard/pages/Trade"));
const Wallet = lazy(() => import("./layout/Dashboard/pages/Wallet"));
const Deposit = lazy(() => import("./layout/Dashboard/pages/Deposit"));
const Withdraw = lazy(() => import("./layout/Dashboard/pages/Withdraw"));

const LoginLayoutRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <LoginLayout>
          <Component {...matchProps} />
        </LoginLayout>
      )}
    />
  );
};

const DashboardLayoutRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <DashboardLayout>
          <Component {...matchProps} />
        </DashboardLayout>
      )}
    />
  );
};

const App = props => {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Switch>
            <LoginLayoutRoute path="/" exact component={Index} />
            <LoginLayoutRoute path="/signup" component={Signup} />
            <LoginLayoutRoute path="/signin" component={Signin} />

            <DashboardLayoutRoute path="/dashboard/home" component={Home} />
            <DashboardLayoutRoute path="/dashboard/trade" component={Trade} />
            <DashboardLayoutRoute path="/dashboard/wallet" component={Wallet} />
            <DashboardLayoutRoute
              path="/dashboard/deposit"
              component={Deposit}
            />
            <DashboardLayoutRoute
              path="/dashboard/withdraw"
              component={Withdraw}
            />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </>
  );
};

export default App;
