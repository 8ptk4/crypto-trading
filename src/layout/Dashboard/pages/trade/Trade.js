import React from "react"
import ChartcardBc from "./ChartcardBc"
import ChartcardBtc from "./ChartcardBtc"
import socketIO from "socket.io-client"
import "./Trade.css"
import { Container, Col, Row } from "react-bootstrap"
import {
  AreaChart,
  Area,
  LabelList,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const Trade = props => {
  const [data, setData] = React.useState()
  const [btc, setBtc] = React.useState(0)
  const [bc, setBc] = React.useState(0)


  // Get chart data
  React.useEffect(() => {
    const socket = socketIO("http://localhost:1337/")

    socket.on('chart_data', (chartData) => {
      setData(chartData)
    })

    socket.on('crypto_data', (cryptoData) => {
      const [cryptoBtc, cryptoBc] = cryptoData.map((crypto) => {
        return crypto.value
      })

      setBtc(cryptoBtc)
      setBc(cryptoBc)
    })

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
            <ResponsiveContainer>
              <AreaChart
                data={data}
                margin={{
                  top: 10, right: 30, left: 0, bottom: 0,
                }}
              >
                <defs>
                  <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <YAxis stroke="white" />
                <XAxis dataKey="name" stroke="white" />
                <Tooltip />
                <LabelList
                  className="label"
                  dataKey="name"
                  position="insideTop"
                  angle="45" />
                <Area
                  type="monotone"
                  dataKey="BitCoin"
                  stroke="#82ca9d"
                  fillOpacity={1}
                  fill="url(#colorPv)" />
                <Area
                  type="monotone"
                  dataKey="BitConnect"
                  stroke="#8884d8"
                  fillOpacity={1}
                  fill="url(#colorUv)" />
              </AreaChart>
            </ResponsiveContainer>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Trade;