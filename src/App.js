import React from "react";

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
          <div className="navbar_top">LOGA</div>
          <div className="navbar_main">
            <Nav defaultActiveKey="/home" className="flex-column">
              <Nav.Link href="/home">
                <HomeOutlinedIcon fontSize="large" className="icon" />
                HOME
              </Nav.Link>
              <Nav.Link eventKey="link-1">
                <AccountBalanceWalletOutlinedIcon
                  fontSize="large"
                  className="icon"
                />
                WALLET
              </Nav.Link>
              <Nav.Link eventKey="link-2">
                <AutorenewIcon fontSize="large" className="icon" />
                TRADE
              </Nav.Link>
              <Nav.Link eventKey="link-2">
                <AddToQueueIcon fontSize="large" className="icon" />
                DEPOSIT
              </Nav.Link>
              <Nav.Link eventKey="link-2">
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
        <Col className="main" md={9}>
          <div className="main_top">hmmeli hummm hummmmmmmm</div>
          <div className="main_main">en massa skit här sen!!!</div>
        </Col>
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
