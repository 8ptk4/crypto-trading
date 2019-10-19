import React, { useState, useEffect } from "react";
import axios from "axios";

const Balance = () => {
  const [balance, setBalance] = useState("");
  const user = localStorage.getItem("username");
  useEffect(() => {
    axios({
      method: "get",
      url: `http://localhost:1337/wallet/balance${user}`
    })
      .then(response => {
        setBalance(response.data.response.balance);
      })
      .catch(error => {
        console.log(error);
      });
  }, [user]);

  return (
    <>
      <span>{balance}</span>
    </>
  );
};

export default Balance;
