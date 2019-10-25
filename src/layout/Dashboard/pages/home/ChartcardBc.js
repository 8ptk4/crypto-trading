import React from "react"
import axios from "axios"
import { Scrollbars } from "react-custom-scrollbars"
import { Form, Field } from "react-final-form"
import { TextField } from "final-form-material-ui"
import { Grid, Button } from "@material-ui/core"
import { Col, Modal } from "react-bootstrap"

const validate = values => {
  const errors = {}
  const invalidChar = /\D/g

  if (!values.amount) {
    errors.amount = "Required"
  }

  if (values.amount < 0 || !values.amount) {
    errors.amount = "Input not accepted"
  }

  return errors
}

const Chartcards = (props) => {
  const [crypto, setCrypto] = React.useState('BitCoin')
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleTransaction = (values) => {
    axios({
      method: "post",
      url: "http://localhost:1337/holdings/transaction",
      data: {
        price: props.cryptoValue,
        action: values.option,
        crypto: "BitConnect",
        amount: values.amount,
        account: localStorage.getItem("username")
      }
    })
      .then(response => {
        props.fetchHoldings();
        props.fetchBalance();
      })
      .catch(error => {
        console.log(error)
      });
  }

  const onSubmit = (values) => {
    console.log("hej", props.holdings[1].amount)
    if ((values.amount * props.cryptoValue <= props.balance) && values.option === "buy") {
      handleTransaction(values)
      return null
    }

    if ((values.amount <= props.holdings[1].amount) && values.option === "sell") {
      handleTransaction(values)
      return null
    }

    handleShow()
  }
  return (
    <>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Insufficient Founds</Modal.Title>
        </Modal.Header>
        <Modal.Body></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="secondary" onClick={() => {
            props.history.push("/dashboard/deposit");
          }}>
            Add founds
          </Button>
        </Modal.Footer>
      </Modal>

      <Col sx={6}>
        <div className="chartcard_second">
          <div className="chartcard_top">
            <span className="chartcard_title">BitConnect</span>
            <span className="chartcard_value">{props.cryptoValue} Kr</span>
          </div>

          <div className="chartcard_bottom">
            <Form
              onSubmit={onSubmit}
              validate={validate}
              render={({ handleSubmit, values, submitting, pristine, form }) => (
                <form
                  className="chartcard_form"
                  onSubmit={handleSubmit}
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
                          form.change("option", "sell");
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
                          form.change("option", "buy");
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