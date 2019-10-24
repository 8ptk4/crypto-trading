import React, { lazy, Suspense, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import axios from "axios";

// Login
const LoginLayout = lazy(() => import("./layout/Login/Login/Login"));
const Index = lazy(() => import("./layout/Login/Index"));
const Signup = lazy(() => import("./layout/Login/Signup/Signup"));
const Signin = lazy(() => import("./layout/Login/Signin/Signin"));

// Dashboard
const DashboardLayout = lazy(() => import("./layout/Dashboard/Dashboard"));
const Home = lazy(() => import("./layout/Dashboard/pages/home/Home"));
const Trade = lazy(() => import("./layout/Dashboard/pages/Trade"));
const Wallet = lazy(() => import("./layout/Dashboard/pages/Wallet"));
const Deposit = lazy(() => import("./layout/Dashboard/pages/Deposit"));
const Withdraw = lazy(() => import("./layout/Dashboard/pages/Withdraw"));

const App = props => {
  const [token, setToken] = useState(null);
  const [balance, setBalance] = useState(0);

  const storage = localStorage.getItem("token");

  const fetchBalance = () => {
    const user = localStorage.getItem("username");

    axios({
      method: "get",
      url: `http://localhost:1337/wallet/balance${user}`
    })
      .then(response => {
        setBalance(response.data.response.balance);
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (storage === null || storage.length === 0) {
      setToken(null);
    } else {
      setToken(storage);
      fetchBalance();
    }
  }, [storage]);

  const LoginLayoutRoute = ({ component: Component, ...rest }) => {
    return (
      <Route
        {...rest}
        render={matchProps =>
          token ? (
            <Redirect
              to={{
                pathname: "/dashboard/home"
              }}
            />
          ) : (
              <LoginLayout>
                <Component {...matchProps} />
              </LoginLayout>
            )
        }
      />
    );
  };

  const DashboardLayoutRoute = ({ component: Component, ...rest }) => {
    return (
      <Route
        {...rest}
        render={matchProps =>
          token ? (
            <DashboardLayout
              balance={balance}
              fetchBalance={fetchBalance} >
              <Component {...matchProps}
                balance={balance}
                fetchBalance={fetchBalance} />
            </DashboardLayout>
          ) : (
              <Redirect
                to={{
                  pathname: "/"
                }}
              />
            )
        }
      />
    );
  };

  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Switch>
            {!token ? (
              <>
                <LoginLayoutRoute
                  path="/" exact
                  component={Index} />
                <LoginLayoutRoute
                  path="/signup"
                  component={Signup} />
                <LoginLayoutRoute
                  path="/signin"
                  component={Signin} />
              </>
            ) : (
                <>
                  <DashboardLayoutRoute
                    path="/dashboard/home"
                    component={Home} />
                  <DashboardLayoutRoute
                    path="/dashboard/trade"
                    component={Trade} />
                  <DashboardLayoutRoute
                    path="/dashboard/wallet"
                    component={Wallet} />
                  <DashboardLayoutRoute
                    path="/dashboard/deposit"
                    component={Deposit} />
                  <DashboardLayoutRoute
                    path="/dashboard/withdraw"
                    component={Withdraw} />
                </>
              )}
          </Switch>
        </Suspense>
      </BrowserRouter>
    </>
  );
};

export default App;
