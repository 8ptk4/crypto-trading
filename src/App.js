import React, { lazy, Suspense, useEffect, useState } from 'react'

import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import axios from 'axios'
import socketIO from 'socket.io-client'
import "bootstrap/dist/css/bootstrap.min.css"
import './style.css'

const LoginLayout = lazy(() => import("./layout/Login/Login/Login"))
const Index = lazy(() => import("./layout/Login/Index"))
const Signup = lazy(() => import("./layout/Login/Signup/Signup"))
const Signin = lazy(() => import("./layout/Login/Signin/Signin"))
const DashboardLayout = lazy(() => import("./layout/Dashboard/Dashboard"))
const Trade = lazy(() => import("./layout/Dashboard/pages/trade/Trade"))
const Wallet = lazy(() => import("./layout/Dashboard/pages/Wallet/Wallet"))
const Deposit = lazy(() => import("./layout/Dashboard/pages/Deposit/Deposit"))

const loadingStyle = {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "#2f303e",
  color: "lightgrey"
}

const App = props => {
  const [token, setToken] = useState(null)
  const [balance, setBalance] = useState(0)
  const [holdings, setHoldings] = useState([
    {
      crypto: 'BitCoin',
      amount: 0
    },
    {
      crypto: 'BitConnect',
      amount: 0
    }
  ])
  const storage = localStorage.getItem("token")
  const [history, setHistory] = React.useState([])
  
  const ENDPOINT = `${process.env.REACT_APP_BACKEND}/`;
  const socket = socketIO(ENDPOINT)

  const fetchBalance = () => {
    axios({
      method: "get",
      headers: { 'x-access-token': storage },
      url: `${process.env.REACT_APP_BACKEND}/wallet/balance`
    })
      .then(response => {
        setBalance(response.data.response.balance)
      })
      .catch(error => {
        console.log(error)
      })
  }



  const fetchHoldings = () => {
    axios({
      method: "get",
      headers: { 'x-access-token': storage },
      url: `${process.env.REACT_APP_BACKEND}/holdings/show`
    })
      .then(response => {
        setHoldings(response.data.row)
      })
      .catch(error => {
        console.error(error)
      })
  }

  React.useEffect(() => {
    socket.on('history', (data) => {
      console.log(history, data)
      setHistory(prev => [data, ...prev]);
    })
    
    fetch(`${process.env.REACT_APP_BACKEND}/history/get`)

    return () => {
      socket.close()
    }
  }, [])

  useEffect(() => {
    if (storage === null || storage.length === 0) {
      setToken(null)

      return
    }

    setToken(storage)
    fetchHoldings()
    fetchBalance()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storage])



  const LoginLayoutRoute = ({ component: Component, ...rest }) => {
    return (
      <Route
        {...rest}
        render={matchProps =>
          <LoginLayout>
            <Component {...matchProps} />
          </LoginLayout>
        }
      />
    )
  }



  const DashboardLayoutRoute = ({ component: Component, ...rest }) => {
    return (
      <Route
        {...rest}
        render={matchProps =>
          token ? (
            <DashboardLayout
              balance={balance}
              holdings={holdings}
              history2={history}
              fetchBalance={fetchBalance}
              fetchHoldings={fetchHoldings} >
              <Component {...matchProps}
                balance={balance}
                holdings={holdings}
                fetchBalance={fetchBalance}
                fetchHoldings={fetchHoldings} />
            </DashboardLayout>
          ) : (
              <Redirect
                to={"/"}
              />
            )
        }
      />
    )
  }



  return (
    <>
      <BrowserRouter>
        <Suspense fallback={
          <div style={loadingStyle}>
            <h1>Loading...</h1>
          </div>
        }>
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
                    path="/dashboard/trade"
                    component={Trade} balance={balance} />
                  <DashboardLayoutRoute
                    path="/dashboard/wallet"
                    component={Wallet} />
                  <DashboardLayoutRoute
                    path="/dashboard/deposit"
                    component={Deposit} />
                </>
              )}
          </Switch>
        </Suspense>
      </BrowserRouter>
    </>
  )
}



export default App
