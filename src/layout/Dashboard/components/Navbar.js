import React from "react";

// Bootstrap
import { Col, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

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
          <Nav defaultActiveKey="/dashboard/home" className="flex-column">
            <Link to="/dashboard/home">
              <HomeOutlinedIcon fontSize="large" className="icon" />
              HOME
            </Link>
            <Link to="/dashboard/wallet" eventKey="link-1">
              <AccountBalanceWalletOutlinedIcon
                fontSize="large"
                className="icon"
              />
              WALLET
            </Link>
            <Link to="/dashboard/trade" eventKey="link-2">
              <AutorenewIcon fontSize="large" className="icon" />
              TRADE
            </Link>
            <Link to="/dashboard/deposit" eventKey="link-2">
              <AddToQueueIcon fontSize="large" className="icon" />
              DEPOSIT
            </Link>
            <Link to="/dashboard/withdraw">
              <RemoveFromQueueIcon fontSize="large" className="icon" />
              WITHDRAW
            </Link>
            <Link to="signout" className="sign_out">
              <ExitToAppIcon fontSize="large" className="icon" />
              SIGN_OUT
            </Link>
          </Nav>
        </div>
      </Col>
    </>
  );
};

export default Navbar;
