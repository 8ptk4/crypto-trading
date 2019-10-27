import React from "react"
import ChartcardBc from "./ChartcardBc"
import ChartcardBtc from "./ChartcardBtc"
import socketIO from "socket.io-client"
import Chart from "./Chart";
import "./Trade.css"
import axios from "axios";
import { Container, Col, Row } from "react-bootstrap"

const Trade = props => {
  const [data, setData] = React.useState()
  const socket = socketIO("http://localhost:1337/")
  const [btc, setBtc] = React.useState(0)
  const [bc, setBc] = React.useState(0)



  socket.on('crypto_value', (data) => {
    const [cryptoBtc, cryptoBc] = data.map((crypto) => {
      return crypto.value
    })

    setBtc(cryptoBtc)
    setBc(cryptoBc)
  })



  React.useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:1337/crypto",
    })
      .then(response => {
        socket.emit('crypto_value', response.data.response)

      })
      .catch(error => {
        console.error(error)
      });

    return () => {
      socket.off()
    }
  }, [])

  return (
    <>
      <Container className="chartcard_container" fluid>
        <Row className="chartcard_row">
          <ChartcardBtc
            balance={props.balance}
            history={props.history}
            holdings={props.holdings}
            cryptoValue={btc}
            fetchHoldings={props.fetchHoldings}
            fetchBalance={props.fetchBalance} />
          <ChartcardBc
            balance={props.balance}
            history={props.history}
            holdings={props.holdings}
            cryptoValue={bc}
            fetchHoldings={props.fetchHoldings}
            fetchBalance={props.fetchBalance} />
        </Row>

        <Row className="chart_wrapper">
          <Col sx={12} className="chart_wrapper">
            <Chart />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Trade;

/*
  const [data, setData] = React.useState()
  const socket = socketIO("http://localhost:1337/")
  const [btc, setBtc] = React.useState(0)
  const [bc, setBc] = React.useState(0)



  socket.on('crypto_value', (data) => {
    const [cryptoBtc, cryptoBc] = data.map((crypto) => {
      return crypto.value
    })

    setBtc(cryptoBtc)
    setBc(cryptoBc)
  })



  React.useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:1337/crypto",
    })
      .then(response => {
        socket.emit('crypto_value', response.data.response)

      })
      .catch(error => {
        console.error(error)
      });

    return () => {
      socket.off()
    }
  }, [])
*/