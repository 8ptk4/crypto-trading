import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Components
import Home from "../../pages/home/Home";
import Wallet from "../../pages/wallet/Wallet";
import Trade from "../../pages/trade/Trade";
import Deposit from "../../pages/deposit/Deposit";
import Withdraw from "../../pages/withdraw/Withdraw";
import NoMatch from "../../pages/404/404";

const Router = () => {
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
};

export default Router;
