import React from "react";
import Navbar from "./components/navbar/Navbar";
import History from "./components/History/History";
import Panel from "./components/Panel/Panel";

import "./Dashboard.css";

const DashboardLayout = ({ children, ...props }) => {
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
          <History />
        </aside>
      </section>
    </>
  );
};

export default DashboardLayout;


/*
      <div className="dashboard_wrapper hbox space-between">
        <Navbar history={children.props.history} />
        <Panel {...props} />
        <div className="main_wrapper">
          {children}
        </div>
        <History className="history_wrapper" />
      </div>
*/