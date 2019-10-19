import React from "react";
import { Col } from "react-bootstrap";

import Balance from "../components/Balance";

const Home = props => {
  return (
    <>
      <Col className="main" md={9}>
        <div className="main_top">
          <div className="left">/home</div>
          <div className="right">
            <Balance />
          </div>
        </div>
        <div className="main_main">
          <h1>Home</h1>
        </div>
      </Col>
    </>
  );
};

export default Home;
