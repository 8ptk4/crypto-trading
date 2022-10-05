import React from 'react';
import ChartcardBc from './ChartcardBc';
import ChartcardBtc from './ChartcardBtc';
import Chart from './Chart';
import './Trade.css';

const Trade = (props) => {
  return (
    <>
      <div className="test_container">
        <div className="test_card_container">
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
        </div>
        <div className="test_chart_container">
          <Chart />
        </div>
      </div>
    </>
  );
};

export default Trade;