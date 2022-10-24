import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import { Container, Row, Col } from 'react-bootstrap';
import './Login.css';
import socketIO from 'socket.io-client';

const LoginRoutes = ({ component: Component, ...rest }) => {
  const ENDPOINT = `${process.env.REACT_APP_BACKEND}/`;
  const socket = socketIO(ENDPOINT);
  
  useEffect(() => {
    return () => {
      socket.off('history');
      socket.off('crypto');
    };
  }, []);

  if (!localStorage.getItem('token')) {
    return (
      <Route {...rest} render={props => (
        <Container fluid>
          <Row className="landing_page">
            <Col md={5} className="landing_page_left">
              <Component {...props} />
            </Col>
            <Col md={4} className="center">
              <AllInclusiveIcon fontSize="large" className="landing_page_right" />
            </Col>
          </Row>
        </Container>
      )} />
    );
  }

  return <Redirect to='/dashboard/trade' />;
};

export default LoginRoutes;