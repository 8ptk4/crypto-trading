import React from "react";

// Router
import Router from "./components/router/Router";

// Style
import "./style.css";
import { Scrollbars } from "react-custom-scrollbars";

// React bootstrap stylesheet
import { Container, Row, Col } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";

// Material Design icons
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import AccountBalanceWalletOutlinedIcon from "@material-ui/icons/AccountBalanceWalletOutlined";
import AutorenewIcon from "@material-ui/icons/Autorenew";
import AddToQueueIcon from "@material-ui/icons/AddToQueue";
import RemoveFromQueueIcon from "@material-ui/icons/RemoveFromQueue";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AllInclusiveIcon from "@material-ui/icons/AllInclusive";

const layout = "second";

function App() {
  if (layout === "first") {
    return (
      <div>
        <h1>When user not Logged in</h1>
      </div>
    );
  }

  return (
    <Container fluid>
      <Row className="test">
        <Col className="navbar_left" md={1}>
          <div className="navbar_top">
            <AllInclusiveIcon fontSize="large" className="icon_logo" />
          </div>
          <div className="navbar_main">
            <Nav defaultActiveKey="/" className="flex-column">
              <Nav.Link href="/">
                <HomeOutlinedIcon fontSize="large" className="icon" />
                HOME
              </Nav.Link>
              <Nav.Link href="/wallet" eventKey="link-1">
                <AccountBalanceWalletOutlinedIcon
                  fontSize="large"
                  className="icon"
                />
                WALLET
              </Nav.Link>
              <Nav.Link href="/trade" eventKey="link-2">
                <AutorenewIcon fontSize="large" className="icon" />
                TRADE
              </Nav.Link>
              <Nav.Link href="/deposit" eventKey="link-2">
                <AddToQueueIcon fontSize="large" className="icon" />
                DEPOSIT
              </Nav.Link>
              <Nav.Link href="/withdraw" eventKey="link-2">
                <RemoveFromQueueIcon fontSize="large" className="icon" />
                WITHDRAW
              </Nav.Link>
              <Nav.Link eventKey="link-2" className="sign_out">
                <ExitToAppIcon fontSize="large" className="icon" />
                SIGN_OUT
              </Nav.Link>
            </Nav>
          </div>
        </Col>
        <Router></Router>
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
      </Row>
    </Container>
  );
}

export default App;
