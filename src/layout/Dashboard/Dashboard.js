import React from "react";
import Navbar from "./components/navbar/Navbar";
import History from "./components/History/History";
import Panel from "./components/Panel/Panel";
import socketIO from 'socket.io-client'

import "./Dashboard.css";

const DashboardLayout = ({ children, ...props }) => {

  const ENDPOINT = `${process.env.REACT_APP_BACKEND}/`;

  React.useEffect(() => {
    socket = io(ENDPOINT);
  }, [ENDPOINT]);

  return (
    <>
      <section className="main hbox space-between">
        <nav>
          <Navbar history={children.props.history} />
        </nav>
        <article>
          <Panel {...props} />
          {children}
        </article>
        <aside>
          <History socket={socket} />
        </aside>
      </section>
    </>
  );
};

export default DashboardLayout;