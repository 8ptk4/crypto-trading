import React from "react"
import axios from "axios"
import { Scrollbars } from "react-custom-scrollbars"
import { Form, Field } from "react-final-form"
import { TextField } from "final-form-material-ui"
import { Grid, Button } from "@material-ui/core"
import { Col } from "react-bootstrap"

const validate = values => {
  const errors = {}
  const invalidChar = /\D/g

  if (!values.amount) {
    errors.amount = "Required"
  }

  if (values.amount === "30") {
    errors.amount = "du kan inte köpa 30"
  }

  return errors
}

const Chartcards = (props) => {
  const [crypto, setCrypto] = React.useState('BitCoin')
  const [BtcValue, setBtcValue] = React.useState(0);
  const [BcValue, setBcValue] = React.useState(0);

  React.useEffect(() => {
    axios({
      method: "get",
      url: `http://localhost:1337/crypto/`
    })
      .then(response => {
        const [Btc, Bc] = response.data.response.map((crypto) => {
          return crypto.value
        })

        setBtcValue(Btc)
        setBcValue(Bc)
      })
      .catch(error => {
        console.error(error);
      })
  })

  const onSubmit = (values) => {
    return new Promise(resolve => {
      console.log(`
        Crypto to Buy: ${crypto}
        Current Price: ${BtcValue}
        console.log("BALANCE", ${props.balance});
        Amount of crypto to buy: ${values.amount}
      `)
      // BUY BITCOIN
      // FOR current price / Bitcoin
      // AMOUNT AVAILABLE TO BUY SHOULD BE * 
      // * BANK VALUE / current crypto value
      // HOLDINGS SHALL GO UNDER DB holdings

      /* NEEDED: 
      Current BitCoin Price
      Amount of money on bank
      Amount of BitCoins to buy
      */

      setTimeout(resolve, 500)
    })
  }


  return (
    <>
      <Col sx={6}>
        <div className="chartcard_first">
          <div className="chartcard_top">
            <span className="chartcard_title">{crypto}</span>
            <span className="chartcard_value">{BtcValue} Kr</span>
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
                      pattern="^[0-9] * $"
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
    </>
  );
};

export default Chartcards;