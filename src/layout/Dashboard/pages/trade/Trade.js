import React from 'react';
import ChartcardBc from './ChartcardBc';
import ChartcardBtc from './ChartcardBtc';
import Chart from './Chart';
import './Trade.css';
import { Container, Col, Row } from 'react-bootstrap';

const Trade = (props) => {
  return (
    <>
      <Container className="chartcard_container" fluid>
        <Row className="chartcard_row">
          <ChartcardBtc
            balance={props.balance}
            history={props.history}
            holdings={props.holdings}
            btc={props.btc}
            cryptoValue={props.btc}
            fetchHoldings={props.fetchHoldings}
            fetchBalance={props.fetchBalance}
            fetchCrypto={props.fetchCrypto}
          />
          <ChartcardBc
            balance={props.balance}
            history={props.history}
            holdings={props.holdings}
            bc={props.bc}
            fetchHoldings={props.fetchHoldings}
            fetchBalance={props.fetchBalance}
            fetchCrypto={props.fetchCrypto}
            />
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