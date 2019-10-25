import React from "react"
import axios from "axios"
import Balance from "../Balance"
import "./Panel.css"
import { Container, Row, Col } from "react-bootstrap"

const Panel = (props) => {
  const [Btc, setBtc] = React.useState({})
  const [Bc, setBc] = React.useState({})

  React.useEffect(() => {
    axios({
      method: "get",
      url: `http://localhost:1337/holdings/show`
    })
      .then(response => {
        const [btc, bc] = response.data.row.map((crypto) => {
          return {
            "type": crypto.crypto,
            "amount": crypto.amount
          }
        })

        setBtc(btc)
        setBc(bc)
      })
      .catch(error => {
        console.error(error)

      })
  }, [])

  return (
    <>
      <Container fluid>
        <Row className="panel_wrapper">
          <Col className="panel_element_start" sx={6}>
            <div className="panel_first">
              <span>{Btc.type}</span>
              <span className="panel_value"> {Btc.amount}</span>
            </div>
            <div className="panel_second">
              <span>{Bc.type}</span>
              <span className="panel_value"> {Bc.amount}</span>
            </div>
          </Col>
          <Col className="panel_element_end" sx={6}>
            <div className="panel_balance">
              <span><Balance {...props} /> Kr</span>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Panel