import React from "react"
import axios from "axios"
import { Form, Field } from "react-final-form"
import { TextField } from "final-form-material-ui"
import { Button } from "@material-ui/core"
import { Col, Modal } from "react-bootstrap"

const validate = values => {
  const errors = {}

  if (!values.amount) {
    errors.amount = "Required"
  }

  if (values.amount < 0 || !values.amount) {
    errors.amount = "Input not accepted"
  }

  return errors
}

const Chartcards = (props) => {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  const handleTransaction = (values) => {
    axios({
      method: "post",
      url: `${process.env.REACT_APP_BACKEND}/holdings/transaction`,
      data: {
        price: props.cryptoValue,
        action: values.option,
        crypto: "BitConnect",
        amount: values.amount,
        account: localStorage.getItem("username")
      }
    })
      .then(response => {
        props.fetchHoldings()
        props.fetchBalance()

        handleHistory(values)
      })
      .catch(error => {
        console.error(error)
      })
  }



  const handleHistory = (values) => {
    axios({
      method: "post",
      url: `${process.env.REACT_APP_BACKEND}/history/add`,
      data: {
        buyer: localStorage.getItem("username"),
        crypto: "BitConnect",
        action: values.option,
        amount: values.amount,
        price: props.cryptoValue
      }
    })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error)
      });
  }



  const onSubmit = (values) => {
    if ((values.amount * props.cryptoValue <= props.balance) && values.option === "purchased") {
      handleTransaction(values)
      return null
    }

    if ((values.amount <= props.holdings[1].amount) && values.option === "sold") {
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
                          form.change("option", "sold");
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
                          form.change("option", "purchased");
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