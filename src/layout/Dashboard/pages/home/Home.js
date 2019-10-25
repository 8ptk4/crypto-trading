import React from "react"
import axios from "axios"
import RemoveCircleTwoToneIcon from '@material-ui/icons/RemoveCircleTwoTone'
import AddCircleTwoToneIcon from '@material-ui/icons/AddCircleTwoTone'
import ChartcardBc from "./ChartcardBc"
import ChartcardBtc from "./ChartcardBtc"
import socketIO from "socket.io-client"
import "./Home.css"
import { Form, Field } from "react-final-form"
import { TextField } from "final-form-material-ui"
import { Grid, Button } from "@material-ui/core"
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

const Home = props => {
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

export default Home;

/*
<Container className="chartcard_container" fluid>
    <Row>
      <Col sx={6}>
        <div className="chartcard_first">
          <div className="chartcard_top">
            <span className="chartcard_title">{bitcoin.currency}</span>
            <span className="chartcard_value">{bitcoin.value} Kr</span>
          </div>

          <div className="chartcard_bottom">
            <Form
              onSubmit={onSubmit}
              validate={validate}
              render={({ handleSubmit, values, submitting, pristine, form }) => (
                <form
                  className="chartcard_form"
                  onSubmit={event => {
                    const promise = handleSubmit(event);
                    promise.then(() => {
                      form.reset()
                    })
                    return promise;
                  }}
                >

                  <div>
                    <Field
                      className="label"
                      name="amount"
                      fullWidth
                      required
                      component={TextField}
                      type="number"
                      label="Amount"
                      autoComplete="off"
                    />
                  </div>

                  <div className="chartcard_buttons">
                    <span>
                      <Button
                        variant="contained"
                        color="primary"
                        className="primary_button"
                        type="submit"
                        disabled={submitting || pristine}
                      >
                        Sell
                    </Button>
                    </span>

                    <span>
                      <Button
                        variant="contained"
                        color="primary"
                        className="primary_button"
                        type="submit"
                        disabled={submitting || pristine}
                      >
                        Buy
                    </Button>
                    </span>
                  </div>
                </form>
              )}
            />
          </div>
        </div>
      </Col>

      <Col sx={6}>
        <div className="chartcard_second">
          <div className="chartcard_top">
            <span className="chartcard_title">{bitcoin.currency}</span>
            <span className="chartcard_value">{bitcoin.value} Kr</span>
          </div>

          <div className="chartcard_bottom">
            <Form
              onSubmit={onSubmit}
              validate={validate}
              render={({ handleSubmit, values, submitting, pristine, form }) => (
                <form
                  className="chartcard_form"
                  onSubmit={event => {
                    const promise = handleSubmit(event);
                    promise.then(() => {
                      form.reset()
                    })
                    return promise;
                  }}
                >

                  <div>
                    <Field
                      className="label"
                      name="amount"
                      fullWidth
                      required
                      component={TextField}
                      type="number"
                      label="Amount"
                      autoComplete="off"
                    />
                  </div>

                  <div className="chartcard_buttons">
                    <span>
                      <Button
                        variant="contained"
                        color="primary"
                        className="primary_button"
                        type="submit"
                        disabled={submitting || pristine}
                      >
                        Sell
                      </Button>
                    </span>

                    <span>
                      <Button
                        variant="contained"
                        color="primary"
                        className="primary_button"
                        type="submit"
                        disabled={submitting || pristine}
                      >
                        Buy
                      </Button>
                    </span>
                  </div>
                </form>
              )}
            />
          </div>
        </div>
      </Col>
    </Row>

    <Row className="dashboard">
      <Col sx={12}>
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
  */