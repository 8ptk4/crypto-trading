import React from "react";
import { Col } from "react-bootstrap";

import AllInclusiveIcon from "@material-ui/icons/AllInclusive";

const SignUp = () => {
  return (
    <>
      <Col md={5} className="landing_page_left">
        <div>
          <h1>SignUp</h1>
        </div>
      </Col>
      <Col md={4} className="center">
        <AllInclusiveIcon fontSize="large" className="landing_page_right" />
      </Col>
    </>
  );
};

export default SignUp;
