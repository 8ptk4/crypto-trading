import React from "react";

import { Col } from "react-bootstrap";
import { Scrollbars } from "react-custom-scrollbars";

const History = () => {
  return (
    <>
      <Col className="history" md={2}>
        <div className="history_top">History</div>
        <div className="history_main">
          <Scrollbars
            renderThumbVertical={props => (
              <div {...props} className="scrollbar-vertical" />
            )}
          >
            <div>
              <h5>Namn</h5>
              <p>Köpt hej hej</p>
            </div>
            <div>
              <h5>Namn</h5>
              <p>Köpt hej hej</p>
            </div>
            <div>
              <h5>Namn</h5>
              <p>Köpt hej hej</p>
            </div>
            <div>
              <h5>Namn</h5>
              <p>Köpt hej hej</p>
            </div>
            <div>
              <h5>Namn</h5>
              <p>Köpt hej hej</p>
            </div>
            <div>
              <h5>Namn</h5>
              <p>Köpt hej hej</p>
            </div>
            <div>
              <h5>Namn</h5>
              <p>Köpt hej hej</p>
            </div>
            <div>
              <h5>Namn</h5>
              <p>Köpt hej hej</p>
            </div>
            <div>
              <h5>Namn</h5>
              <p>Köpt hej hej</p>
            </div>
            <div>
              <h5>Namn</h5>
              <p>Köpt hej hej</p>
            </div>
            <div>
              <h5>Namn</h5>
              <p>Köpt hej hej</p>
            </div>
            <div>
              <h5>Namn</h5>
              <p>Köpt hej hej</p>
            </div>
            <div>
              <h5>Namn</h5>
              <p>Köpt hej hej</p>
            </div>
            <div>
              <h5>Namn</h5>
              <p>Köpt hej hej</p>
            </div>
          </Scrollbars>
        </div>
      </Col>
    </>
  );
};

export default History;
