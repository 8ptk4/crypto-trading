import React from "react"
import axios from "axios"
import Balance from "../Balance"
import "./Panel.css"
import { Container, Row, Col } from "react-bootstrap"

const Panel = (props) => {
  const [btc, setBtc] = React.useState({});
  const [bc, setBc] = React.useState({});

  React.useEffect(() => {
    setBtc(props.holdings[0])
    setBc(props.holdings[1])

  }, [])


  return (
    <>
      <Container fluid>
        <Row className="panel_wrapper">
          <Col className="panel_element_start" sx={6}>
            <div className="panel_first">
              <span>{btc.crypto}</span>
              <span className="panel_value"> {btc.amount}</span>
            </div>
            <div className="panel_second">
              <span>{bc.crypto}</span>
              <span className="panel_value"> {bc.amount}</span>
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