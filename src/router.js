import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

// Pages Logged In
import Home from "./pages/home/Home";
import Wallet from "./pages/wallet/Wallet";
import Trade from "./pages/trade/Trade";
import Deposit from "./pages/deposit/Deposit";
import Withdraw from "./pages/withdraw/Withdraw";
import NoMatch from "./pages/404/404";

// Pages Not Logged In
import Landing from "./pages/landing/Landing";
import SignUp from "./pages/signup/SignUp";
import SignIn from "./pages/signin/SignIn";

const loggedIn = false;

const Router = () => {
  if (loggedIn === true) {
    return (
      <>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact render={props => <Home {...props} />} />
            <Route path="/wallet" render={props => <Wallet {...props} />} />
            <Route path="/trade" render={props => <Trade {...props} />} />
            <Route path="/deposit" render={props => <Deposit {...props} />} />
            <Route path="/withdraw" render={props => <Withdraw {...props} />} />
            <Route render={props => <NoMatch {...props} />} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact render={props => <Landing {...props} />} />
          <Route path="/signup" render={props => <SignUp {...props} />} />
          <Route path="/signin" render={props => <SignIn {...props} />} />
          <Route render={props => <NoMatch {...props} />} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Router;
