import React from "react";
import { Col } from "react-bootstrap";
import Balance from "../components/Balance";

const Wallet = () => {
  return (
    <>
      <Col className="main" md={9}>
        <div className="main_top">
          <div className="left">/Wallet</div>
          <div className="right">
            <Balance />
          </div>
        </div>
        <div className="main_main">
          <h1>Wallet</h1>
        </div>
      </Col>
    </>
  );
};

export default Wallet;
