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