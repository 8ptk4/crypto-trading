import React from "react";

import AllInclusiveIcon from "@material-ui/icons/AllInclusive";
import { Container, Row, Col } from "react-bootstrap";
import "./Login.css";

const LoginLayout = ({ children }) => {
  return (
    <>
      <Container fluid>
        <Row className="landing_page">
          <Col md={5} className="landing_page_left">
            {children}
          </Col>
          <Col md={4} className="center">
            <AllInclusiveIcon fontSize="large" className="landing_page_right" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LoginLayout;