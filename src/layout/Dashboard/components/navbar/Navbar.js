import React from "react"

// Bootstrap
import { Link } from "react-router-dom"

// Material Design icons
import AccountBalanceWalletOutlinedIcon from "@material-ui/icons/AccountBalanceWalletOutlined"
import RemoveFromQueueIcon from "@material-ui/icons/RemoveFromQueue"
import ExitToAppIcon from "@material-ui/icons/ExitToApp"
import AllInclusiveIcon from "@material-ui/icons/AllInclusive"

import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

// Authentication
import Auth from "../../../../Auth"

// Styles
import "./Navbar.css"

const Menu = ({ history }) => {
  return (
    <>
      <Navbar bg="light" expand="md">
        <div className="navbar_top">
          <Navbar.Brand to="/dashboard/trade">
            <Link to="/dashboard/trade">
              <AllInclusiveIcon fontSize="large" className="icon_logo" />
            </Link>
          </Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="collapse navbar-collapse" id="navbarSupportedContent">
          <Nav className="mr-auto">
            <Link className="link mt-md-4" to="/dashboard/trade">
              <span className="navbar_items">
                <AccountBalanceWalletOutlinedIcon
                  fontSize="large"
                  className="icon" />
              </span>
              <span className="navbar_items">TRADE</span>
            </Link>

            <Link className="link" to="/dashboard/wallet">
              <span className="navbar_items">
                <AccountBalanceWalletOutlinedIcon
                  fontSize="large"
                  className="icon" />
              </span>
              <span className="navbar_items">WALLET</span>
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

            <Nav className="align_bottom">
              <span className="link" onClick={() => {
                Auth.signout()
                history.push("/")
                window.location.reload()
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
              </span>
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default Menu