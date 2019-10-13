import React from "react";

// Bootstrap
import { Col, Nav } from "react-bootstrap";

// Material Design icons
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import AccountBalanceWalletOutlinedIcon from "@material-ui/icons/AccountBalanceWalletOutlined";
import AutorenewIcon from "@material-ui/icons/Autorenew";
import AddToQueueIcon from "@material-ui/icons/AddToQueue";
import RemoveFromQueueIcon from "@material-ui/icons/RemoveFromQueue";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AllInclusiveIcon from "@material-ui/icons/AllInclusive";

const Navbar = () => {
  return (
    <>
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
    </>
  );
};

export default Navbar;
