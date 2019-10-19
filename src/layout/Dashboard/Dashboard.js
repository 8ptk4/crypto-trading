import React from "react";
import { Container, Row } from "react-bootstrap";
import Navbar from "./components/Navbar";
import History from "./components/History";

const DashboardLayout = ({ children }) => {
  return (
    <>
      <Container fluid>
        <Row className="dashboard">
          <Navbar history={children.props.history} />
          {children}
          <History />
        </Row>
      </Container>
    </>
  );
};

export default DashboardLayout;
