import React from "react";
import { Scrollbars } from "react-custom-scrollbars";

const History = () => {
  return (
    <>
      <div className="history_top">History</div>
      <div className="history_main">
        <Scrollbars
          renderThumbVertical={props => (
            <div {...props} className="scrollbar-vertical" />
          )}
        >
          <div className="history_element">
            <h5>Patrik Karlsson</h5>
            <p>5st Bitcoin</p>
          </div>
          <div className="history_element">
            <h5>Namn</h5>
            <p>Köpt hej hej</p>
          </div>
        </Scrollbars>
      </div>
    </>
  );
};

export default History;
