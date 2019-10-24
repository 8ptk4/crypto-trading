import React, { useState } from "react";

// Bootstrap
import { Link } from "react-router-dom";

// Material Design icons
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import AccountBalanceWalletOutlinedIcon from "@material-ui/icons/AccountBalanceWalletOutlined";
import AutorenewIcon from "@material-ui/icons/Autorenew";
import AddToQueueIcon from "@material-ui/icons/AddToQueue";
import RemoveFromQueueIcon from "@material-ui/icons/RemoveFromQueue";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AllInclusiveIcon from "@material-ui/icons/AllInclusive";

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// Authentication
import Auth from "../../../../Auth";

// Styles
import "./Navbar.css";

const Menu = ({ history }) => {
  return (
    <>
      <Navbar bg="light" expand="md">
        <div className="navbar_top">
          <Navbar.Brand to="/dashboard/home">
            <Link to="/dashboard/home">
              <AllInclusiveIcon fontSize="large" className="icon_logo" />
            </Link>
          </Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="collapse navbar-collapse" id="navbarSupportedContent">
          <Nav className="mr-auto">
            <Link className="link" to="/dashboard/home">
              <span className="navbar_items">
                <AccountBalanceWalletOutlinedIcon
                  fontSize="large"
                  className="icon" />
              </span>
              <span className="navbar_items">BUY</span>
            </Link>

            <Link className="link" to="/dashboard/wallet">
              <span className="navbar_items">
                <AccountBalanceWalletOutlinedIcon
                  fontSize="large"
                  className="icon" />
              </span>
              <span className="navbar_items">WALLET</span>
            </Link>

            <Link className="link" to="/dashboard/trade">
              <span className="navbar_items">
                <AddToQueueIcon
                  fontSize="large"
                  className="icon" />
              </span>
              <span className="navbar_items">TRADE</span>
            </Link>

            <Link className="link" to="/dashboard/deposit">
              <span className="navbar_items">
                <RemoveFromQueueIcon
                  fontSize="large"
                  className="icon"
                />
              </span>
              <span className="navbar_items">DEPOSIT</span>
            </Link>

            <Link className="link" to="/dashboard/withdraw">
              <span className="navbar_items">
                <RemoveFromQueueIcon
                  fontSize="large"
                  className="icon"
                />
              </span>
              <span className="navbar_items">WITHDRAW</span>
            </Link>

            <Nav className="align_bottom">
              <Link className="link" onClick={() => {
                Auth.signout();
                history.push("/");
                window.location.reload();
              }}>
                <span
                  className="navbar_items"
                >
                  <ExitToAppIcon
                    fontSize="large"
                    className="icon"
                  />
                </span>
                <span className="navbar_items">SIGN OUT</span>
              </Link>
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Menu;

/*
<div className="navbar_top">
    <AllInclusiveIcon fontSize="large" className="icon_logo" />
  </div>
  <div className="navbar_main">
    <Nav defaultActiveKey="/dashboard/home" className="flex-column">
      <Link to="/dashboard/home">
        <HomeOutlinedIcon fontSize="large" className="icon" />
        HOME
      </Link>
      <Link to="/dashboard/wallet">
        <AccountBalanceWalletOutlinedIcon
          fontSize="large"
          className="icon"
        />
        WALLET
      </Link>
      <Link to="/dashboard/trade">
        <AutorenewIcon fontSize="large" className="icon" />
        TRADE
      </Link>
      <Link to="/dashboard/deposit">
        <AddToQueueIcon fontSize="large" className="icon" />
        DEPOSIT
      </Link>
      <Link to="/dashboard/withdraw">
        <RemoveFromQueueIcon fontSize="large" className="icon" />
        WITHDRAW
      </Link>
      <span
        onClick={() => {
          Auth.signout();
          history.push("/");
          window.location.reload();
        }}
        className="sign_out"
      >
        <ExitToAppIcon fontSize="large" className="icon" />
        SIGN_OUT
      </span>
    </Nav>
  </div>
  */