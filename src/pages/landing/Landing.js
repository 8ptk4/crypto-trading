import React from "react";
import { Col } from "react-bootstrap";

import Button from "@material-ui/core/Button";
import AllInclusiveIcon from "@material-ui/icons/AllInclusive";

const Landing = () => {
  return (
    <>
      <Col md={5} className="landing_page_left">
        <h1>Buy, Sell and Trade Cryptocurrency </h1>
        <p>The place to trade Ethereum, Bitcoin and ...</p>
        <div>
          <Button
            variant="contained"
            color="primary"
            className="primary_button"
            href="/signup"
          >
            Create Account
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className="secondary_button"
            href="/signin"
          >
            Sign In
          </Button>
        </div>
      </Col>
      <Col md={4} className="center">
        <AllInclusiveIcon fontSize="large" className="landing_page_right" />
      </Col>
    </>
  );
};

export default Landing;
