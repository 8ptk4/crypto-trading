/*
import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import History from "./components/history/History";

// Pages Logged In
import Trade from "./pages/trade/Trade";
import Wallet from "./pages/wallet/Wallet";
import Deposit from "./pages/deposit/Deposit";
import NoMatch from "./pages/404/404";

// Pages Not Logged In
import Landing from "./pages/landing/Landing";

import Index from "./pages/index/Index";

import SignUp from "./pages/signup/SignUp";
import SignIn from "./pages/signin/SignIn";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/trade" exact render={props => <Trade {...props} />} />
          <Route path="/wallet" render={props => <Wallet {...props} />} />
          <Route path="/deposit" render={props => <Deposit {...props} />} />
          <Route path="/404" render={props => <NoMatch {...props} />} />
          <Route
            path="/logged_out"
            exact
            render={props => <Index {...props} />}
          />
          <Route
            path="/logged_in"
            exact
            render={props => <Landing {...props} />}
          />
          <Route path="/signup" render={props => <SignUp {...props} />} />
          <Route path="/signin" render={props => <SignIn {...props} />} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Router;
*/