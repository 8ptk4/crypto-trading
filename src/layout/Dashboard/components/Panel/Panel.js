import React from "react";
import Balance from "../Balance";
import { Container, Row, Col } from "react-bootstrap";
import "./Panel.css";
const Panel = (props) => {
  return (
    <>
      <Container fluid>
        <Row className="panel_wrapper">
          <Col className="panel_element_start" sx={6}>
            <div className="panel_first">
              <span>BitCoin</span>
              <span className="panel_value"> 4</span>
            </div>
            <div className="panel_second">
              <span>Bitconnect</span>
              <span className="panel_value"> 10</span>
            </div>
          </Col>
          <Col className="panel_element_end" sx={6}>
            <div className="panel_balance">
              <span><Balance {...props} /> Kr</span>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Panel;

/*
      <Container fluid>
        <Row className="panel_wrapper">
          <Col className="panel_element_start" sx={6}>
            <span>HOLDINGS: </span>
            <div className="panel_first">
              <span>BitCoin</span>
              <span className="panel_value"> 4</span>
            </div>
            <div className="panel_second">
              <span>Bitconnect</span>
              <span className="panel_value"> 10</span>
            </div>
          </Col>
          <Col className="panel_element_end" sx={6}>
            <span>BALANCE: </span>
            <div className="panel_balance">
              <span><Balance {...props} /> Kr</span>
            </div>
          </Col>
        </Row>
      </Container>
  */