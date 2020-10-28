import React, { lazy, Suspense, useEffect, useState } from 'react'
import { Route, Redirect } from 'react-router-dom';

import Navbar from "./components/navbar/Navbar";
import History from "./components/History/History";
import Panel from "./components/Panel/Panel";

import axios from 'axios'

import "./Dashboard.css";


const DashboardRoutes = ({ component: Component, ...rest }) => {
  const [balance, setBalance] = useState(0)
  // const [holdings, setHoldings] = useState([
  //   {
  //     crypto: 'BitCoin',
  //     amount: 0
  //   },
  //   {
  //     crypto: 'BitConnect',
  //     amount: 0
  //   }
  // ])

  const storage = localStorage.getItem("token")



  const fetchBalance = () => {
    axios({
      method: "get",
      headers: { 'x-access-token': storage },
      url: `${process.env.REACT_APP_BACKEND}/wallet/balance`
    }).then(response => {
      setBalance(response.data.response.balance)
    }).catch(error => {
      console.log(error)
    })
  }



  // const fetchHoldings = () => {
  //   axios({
  //     method: "get",
  //     headers: { 'x-access-token': storage },
  //     url: `${process.env.REACT_APP_BACKEND}/holdings/show`
  //   }).then(response => {
  //     console.log(response.data.row)
  //     setHoldings(response.data.row)
  //   }).catch(error => {
  //     console.error(error)
  //   })
  // }



  useEffect(() => {
    fetchBalance()
    // fetchHoldings()
  }, [storage])

  if (localStorage.getItem("token")) {
    return (
      <Route {...rest} render={props => (
        <section className="main hbox space-between">
          <nav>
            <Navbar {...props} />
          </nav>
          <article>
            <Panel {...props}
              balance={balance}
              // holdings={holdings} 
            />
            <Component { ...props }
              balance={balance}
            // holdings={holdings}
              fetchBalance={fetchBalance.bind(this)}
              // fetchHoldings={fetchHoldings.bind(this)}
            />
          </article>
          <aside>
            <History />
          </aside>
        </section>
      )} />
    )
  }

  return <Redirect to='/' />
}

export default DashboardRoutes;