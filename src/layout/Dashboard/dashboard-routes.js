import { Route, useHistory } from 'react-router-dom';
import { Redirect } from 'react-router'
import { Modal } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import socketIO from 'socket.io-client';
import Navbar from './components/navbar/Navbar';
import History from './components/History/History';
import Panel from './components/Panel/Panel';
import Auth from "../../Auth";
import axios from 'axios';
import jwt_decode from "jwt-decode";
import Button from 'react-bootstrap/Button';
import './Dashboard.css';

const DashboardRoutes = ({ component: Component, ...rest }) => {
  const storage = localStorage.getItem('token');
  const ENDPOINT = `${process.env.REACT_APP_BACKEND}/`;
  const socket = socketIO(ENDPOINT)
  const historyy = useHistory();
  const [balance, setBalance] = useState(0);
  const [history, setHistory] = React.useState([])
  const [show, setShow] = useState(false);
  const [holdings, setHoldings] = useState([
    {
      crypto: 'BitCoin',
      amount: 0
    },
    {
      crypto: 'BitConnect',
      amount: 0
    }
  ]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  axios.interceptors.request.use(
    async config => {
      let token = localStorage.getItem('token');
      if (token) {
        if (checkTokenExpired(token)) {
          handleShow()
        }
      }
      config.headers['token'] = token;
      return config;
  })

  const checkTokenExpired = idToken => {
    if (idToken) {
      const decoded = jwt_decode(idToken);
      if (decoded && decoded['exp']) {
        return Date.now() - 1000 >= decoded['exp'] * 1000;
      }
    }
  };

  useEffect(() => {
    socket.on('history', (data) => {
      setHistory(prev => [data, ...prev]);
    })

    return () => {
      socket.off('history');
    };
  }, []);

  const logout = () => {
    Auth.signout();
    historyy.push("/");
  };

  const fetchBalance = () => {
    axios({
      method: 'get',
      headers: { 'x-access-token': storage },
      url: `${process.env.REACT_APP_BACKEND}/wallet/balance`
    }).then(response => {
      setBalance(response.data.response.balance);
    }).catch(error => {
      console.log(error);
    });
  };

  const fetchHoldings = () => {
    axios({
      method: "get",
      headers: { 'x-access-token': storage },
      url: `${process.env.REACT_APP_BACKEND}/holdings/show`
    }).then(response => {
      console.log("VAD HÄNDER", response)
      setHoldings(response.data.row)
    }).catch(error => {
      console.error(error)
    })
  }

  useEffect(() => {
      fetchBalance()
      fetchHoldings()
  }, [storage]);

  if (localStorage.getItem('token')) {
    return (
      <>
        <Route {...rest} render={props => (
          <section className="main hbox space-between">
            <nav>
              <Navbar {...props} />
            </nav>
            <article>
              <Panel {...props}
                balance={balance}
                holdings={holdings} 
              />
              <Component { ...props }
                balance={balance}
                holdings={holdings}
                history={history}
                fetchBalance={fetchBalance.bind(this)}
                fetchHoldings={fetchHoldings.bind(this)}
              />
            </article>
            <aside className="historyPanel">
              <History 
                history={history}
              />
            </aside>
            <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
              centered
              >
              <Modal.Header closeButton>
                <Modal.Title>Authenticate token expired.</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Authenticate token expired.
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={logout}>
                  Logout
                </Button>
                <Button variant="primary">
                  Stay logged in
                </Button>
              </Modal.Footer>
            </Modal>
          </section>
        )} />
      </>
    );
  } return <Redirect to='/' />;
};

export default DashboardRoutes;