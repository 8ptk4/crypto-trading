import React from "react";

const notFoundStyle = {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "#2f303e",
  color: "lightgrey"
}

const NoMatch = () => {
  return (
      <div style={notFoundStyle}>
        <h3>4o4 page not found!</h3>
      </div>
  );
};

export default NoMatch;
