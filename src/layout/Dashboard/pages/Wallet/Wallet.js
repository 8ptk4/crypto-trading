import React from "react"
import "./Wallet.css"
import { Container, Col, Row } from "react-bootstrap"

const Wallet = () => {
  return (
    <>
      <Container className="wallet_wrapper">
        <h1>Wallet</h1>
        <Row className="wallet_inner_wrapper">
          <Col md={{ span: 4, offset: 1 }} className="wallet_left">
            Heysan
        </Col>

          <Col md={{ span: 4, offset: 2 }} className="wallet_right">
            Sveysan
        </Col>
        </Row>

      </Container>
    </>
  )
}
export default Wallet
