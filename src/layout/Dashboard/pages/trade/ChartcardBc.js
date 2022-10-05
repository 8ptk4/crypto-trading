import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Form, Field } from 'react-final-form';
import { TextField } from 'final-form-material-ui';
import { Button } from '@material-ui/core';
import { Col } from 'react-bootstrap';
import socketIO from 'socket.io-client';
const storage = localStorage.getItem('token');

const Chartcards = (props) => {
  const [bc, setBc] = useState(0);
  const parse = value => (isNaN(parseFloat(value)) ? "" : parseFloat(value));
  const sellError = value => (value <= props.holdings[1].amount ? 
    undefined : 
    `Can sell ${props.holdings[1].amount}`
  );
  const buyError = value => (value * bc <= props.balance ? 
    undefined : 
    `Can buy ${Math.floor(props.balance / bc)}`
  );

  const handleTransaction = (values) => {
    axios({
      method: 'post',
      headers: { 'x-access-token': storage },
      url: `${process.env.REACT_APP_BACKEND}/holdings/transaction`,
      data: {
        price: bc,
        action: values.option,
        crypto: 'BitConnect',
        amount: values.amount,
        account: localStorage.getItem('username')
      }
    }).then(response => {
      props.fetchHoldings();
      props.fetchBalance();
      handleHistory(values);
    }).catch(error => {
      console.error(error);
    });
  };

  const handleHistory = (values) => {
    axios({
      method: "post",
      headers: { 'x-access-token': storage },
      url: `${process.env.REACT_APP_BACKEND}/history/add`,
      data: {
        buyer: localStorage.getItem("username"),
        crypto: "BitConnect",
        action: values.option,
        amount: values.amount,
        price: bc
      }
    }).then(response => {
      fetch(`${process.env.REACT_APP_BACKEND}/history/get`, {
        method: 'GET',
        headers: { 'x-access-token': storage },
      })
      fetchCrypto();
    }).catch(error => {
      console.log(error)
    });
  }

  const fetchCrypto = () => {
    fetch(`${process.env.REACT_APP_BACKEND}/crypto`, {
      method: 'GET',
      headers: { 'x-access-token': storage },
    })
  }

  useEffect(() => {
    const ENDPOINT = `${process.env.REACT_APP_BACKEND}/`;
    const socket = socketIO(ENDPOINT);
    fetchCrypto();
    socket.on('crypto', (data) => {    
      setBc(data[1].value);
    });
    return () => {
      socket.close();
    };
  }, []);

  const onSubmit = (values) => {
    if ((values.amount * bc <= props.balance) && values.option === "purchased") {
      handleTransaction(values)
      return null
    }

    if ((values.amount <= props.holdings[1].amount) && values.option === "sold") {
      handleTransaction(values)
      return null
    }
  };

  return (
    <>
      <Col sx={6}>
        <div className="chartcard_second">
          <div className="chartcard_top">
            <span className="chartcard_title">BitConnect</span>
            <span className="chartcard_value">{bc} Kr</span>
          </div>

          <div className="chartcard_bottom">
            <Form
              onSubmit={onSubmit}
              allowNegative={false}
              render={({ handleSubmit, values, submitting, pristine, form, errors}) => (
                <form
                className="chartcard_form"
                onSubmit={ async values => {
                  await handleSubmit(values)
                  form.reset();
                }}
                >
                  <div>
                    <Field
                      className="label"
                      name="amount"
                      fullWidth
                      required
                      component={TextField}
                      type="text"
                      label="Amount"
                      autoComplete="off"
                      parse={parse}
                    />
                  </div>

                    { values.amount &&
                      <div className="error_msg">
                        <span>{sellError(values.amount)}</span>
                        <span>{buyError(values.amount)}</span>
                      </div> 
                    }

                  <div className="chartcard_buttons">
                    <span>
                      <Button
                        variant="contained"
                        color="primary"
                        className="primary_button"
                        type="submit"
                        onClick={() => {
                          form.change('option', 'sold');
                        }}
                        disabled={submitting || pristine || sellError(values.amount) }
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
                        onClick={() => {
                          form.change('option', 'purchased');
                        }}
                        disabled={submitting || pristine || buyError(values.amount)}
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
    </>
  );
};

export default Chartcards;