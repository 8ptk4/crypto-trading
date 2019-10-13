import React from "react";

// Router
import Router from "./router";

// Components
import Navbar from "./components/navbar/Navbar";
import History from "./components/history/History";

// Style
import "./style.css";

// React bootstrap stylesheet
import { Container, Row } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

const loggedIn = false;

function App() {
  if (loggedIn === false) {
    return (
      <Container fluid>
        <Row className="landing_page">
          <Router />
        </Row>
      </Container>
    );
  }

  return (
    <Container fluid>
      <Row className="test">
        <Navbar />
        <Router />
        <History />
      </Row>
    </Container>
  );
}

export default App;
