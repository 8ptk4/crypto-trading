import React from "react"
import Balance from "../Balance"
import "./Panel.css"
import { Container, Row, Col } from "react-bootstrap"

const Panel = (props) => {
  return (
    <>
      <Container fluid>
        <Row className="panel_wrapper">
          <Col className="panel_element_start" sx={6}>
            <div className="panel_first">
              <span>{props.holdings[0].crypto || "0"}</span>
              <span className="panel_value"> {props.holdings[0].amount || "0"}</span>
            </div>
            <div className="panel_second">
              <span>{props.holdings[1].crypto || "0"}</span>
              <span className="panel_value"> {props.holdings[1].amount || "0"}</span>
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

export default Panel