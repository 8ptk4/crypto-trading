import React from "react";
import { Col } from "react-bootstrap";
import Balance from "../components/Balance";

const Withdraw = () => {
  return (
    <>
      <Col className="main" md={9}>
        <div className="main_top">
          <div className="left">/Withdraw</div>
          <div className="right">
            <Balance />
          </div>
        </div>
        <div className="main_main">
          <h1>Withdraw</h1>
        </div>
      </Col>
    </>
  );
};

export default Withdraw;
