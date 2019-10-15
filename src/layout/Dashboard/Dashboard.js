import React from "react";
import { Container, Row } from "react-bootstrap";
import Navbar from "./components/Navbar";
import History from "./components/History";

const DashboardLayout = ({ children }) => {
  return (
    <>
      <Container fluid>
        <Row className="landing_page">
          <Navbar />
          {children}
          <History />
        </Row>
      </Container>
    </>
  );
};

export default DashboardLayout;
