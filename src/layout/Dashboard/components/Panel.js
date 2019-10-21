import React from "react";
import Balance from "./Balance";

const Panel = (props) => {
  return (
    <>
      <div className="main_top">
        <div className="left">
          <span>HOLDINGS: </span>
          <span className="panel_first">Bitcoin
            <span className="panel_value"> 5</span>
          </span>
          <span className="panel_second">Bitconnect
           <span className="panel_value"> 10</span>
          </span>
        </div>
        <div className="right">
          <span>BALANCE: </span>
          <span className="panel_balance">
            <span className="panel_value"> <Balance {...props} /> Kr</span>
          </span>
        </div>
      </div>
    </>
  );
};

export default Panel;
