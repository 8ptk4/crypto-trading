import React from "react";

// Style
import "./style.css";
// React bootstrap stylesheet
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const layout = "second";

function App() {
  if (layout === "first") {
    return (
      <div>
        <h1>When user not Logged in</h1>
      </div>
    );
  }

  return (
    <Container fluid>
      <Row className="test">
        <Col className="navbar_left" md={1}>
          <div className="navbar_top">LOGA</div>
          <div className="navbar_main">NAVBAR</div>
          Left
        </Col>
        <Col className="main" md={9}>
          <div className="main_top">hmmeli hummm hummmmmmmm</div>
          <div className="main_main">en massa skit här sen!!!</div>
        </Col>
        <Col className="history" md={2}>
          <div className="history_top">History</div>
          <div className="history_main">olika historiker</div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
