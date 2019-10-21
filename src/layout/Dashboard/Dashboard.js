import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "./components/Navbar";
import History from "./components/History";
import Panel from "./components/Panel";

const DashboardLayout = ({ children, ...props }) => {
  return (
    <>
      <Container fluid>
        <Row className="dashboard">
          <Navbar history={children.props.history} />
          <Col className="main" md={9}>
            <Panel {...props} />
            {children}
          </Col>
          <Col className="history" md={2}>
            <History />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default DashboardLayout;
