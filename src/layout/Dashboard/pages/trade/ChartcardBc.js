import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Form, Field } from 'react-final-form';
import { TextField } from 'final-form-material-ui';
import { Button } from '@material-ui/core';
import { Col, Modal } from 'react-bootstrap';
import socketIO from 'socket.io-client';


const validate = values => {
  const errors = {};

  if (!values.amount) {
    errors.amount = 'Required';
  }

  if (values.amount < 0 || !values.amount) {
    errors.amount = 'Input not accepted';
  }

  return errors;
};

const Chartcards = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [bc, setBc] = useState(0);
  



  const handleTransaction = (values) => {
    axios({
      method: 'post',
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
      url: `${process.env.REACT_APP_BACKEND}/history/add`,
      data: {
        buyer: localStorage.getItem("username"),
        crypto: "BitConnect",
        action: values.option,
        amount: values.amount,
        price: bc
      }
    }).then(response => {
      fetch(`${process.env.REACT_APP_BACKEND}/history/get`)
      fetchCrypto();
    }).catch(error => {
      console.log(error)
    });
  }



  const fetchCrypto = () => {
    fetch(`${process.env.REACT_APP_BACKEND}/crypto`)
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

    console.log(values.amount, props.holdings[1].amount, values.option)
    if ((values.amount <= props.holdings[1].amount) && values.option === "sold") {
      handleTransaction(values)
      return null
    }

    handleShow()
  };


  return (
    <>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Insufficient Founds</Modal.Title>
        </Modal.Header>
        <Modal.Body></Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>
            Close
          </Button>
          <Button onClick={() => {
            props.history.push('/dashboard/deposit');
          }}>
            Add founds
          </Button>
        </Modal.Footer>
      </Modal>

      <Col sx={6}>
        <div className="chartcard_second">
          <div className="chartcard_top">
            <span className="chartcard_title">BitConnect</span>
            <span className="chartcard_value">{bc} Kr</span>
          </div>

          <div className="chartcard_bottom">
            <Form
              onSubmit={onSubmit}
              validate={validate}
              render={({ handleSubmit, values, submitting, pristine, form }) => (
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
                        onClick={() => {
                          form.change('option', 'sold');
                        }}
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
                        onClick={() => {
                          form.change('option', 'purchased');
                        }}
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
    </>
  );
};

export default Chartcards;