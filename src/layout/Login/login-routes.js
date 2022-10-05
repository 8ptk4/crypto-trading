import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import { Container, Row, Col } from 'react-bootstrap';
import './Login.css';

const LoginRoutes = ({ component: Component, ...rest }) => {
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