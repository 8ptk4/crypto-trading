import React from "react"
import axios from "axios";
import { Scrollbars } from "react-custom-scrollbars"
import { Form, Field } from "react-final-form"
import { TextField } from "final-form-material-ui"
import { Grid, Button } from "@material-ui/core"
import { Col } from "react-bootstrap"

const validate = values => {
  const errors = {}

  if (!values.amount) {
    errors.amount = "Required"
  }

  return errors;
}

const Chartcards = () => {
  const [crypto, setCrypto] = React.useState('BitConnect')
  const [BtcValue, setBtcValue] = React.useState(0)
  const [BcValue, setBcValue] = React.useState(0)

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
        console.error(error)
      })
  })

  const onSubmit = (values) => {
    return new Promise(resolve => {
      console.log("Heysan")
      setTimeout(resolve, 500)
    })
  }

  return (
    <>
      <Col sx={6}>
        <div className="chartcard_second">
          <div className="chartcard_top">
            <span className="chartcard_title">BitConnect</span>
            <span className="chartcard_value">{BcValue} Kr</span>
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
    </>
  );
};

export default Chartcards;