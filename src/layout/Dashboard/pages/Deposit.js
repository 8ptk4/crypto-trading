import React, { useState } from "react";
import { Form, Field } from "react-final-form";
import { TextField } from "final-form-material-ui";
import { Grid, Button } from "@material-ui/core";
import axios from "axios";


const validate = values => {
  const errors = {};

  if (!values.amount) {
    errors.amount = "Required";
  }

  if (values.amount <= 0) {
    errors.amount = "Amount must be bigger than 0";
  }

  return errors;
};

const Deposit = (props) => {
  const [status, setStatus] = useState("")

  const onSubmit = (values) => {
    return new Promise(resolve => {
      axios({
        method: "post",
        url: "http://localhost:1337/wallet/deposit",
        data: {
          amount: values.amount,
          user: localStorage.getItem("username")
        }
      })
        .then(response => {
          setStatus(response.data.response);
          props.fetchBalance();
        })
        .catch(error => {
          console.log(error);
        });
      setTimeout(resolve, 2000);
    })
  }

  return (
    <>
      <div className="main_main">
        <h1>Deposit</h1>
        <Form
          onSubmit={onSubmit}
          validate={validate}
          render={({ handleSubmit, values, submitting, pristine, form }) => (
            <form
              onSubmit={event => {
                const promise = handleSubmit(event);
                promise.then(() => {
                  form.reset()
                })
                return promise;
              }}
            >
              <div>
                <Grid container alignItems="flex-start" item={true} xs={6} spacing={2}>
                  <Grid item={true} xs={12}>
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
                  </Grid>
                  <Grid item={true} xs={6}>
                    <Button
                      variant="contained"
                      color="primary"
                      className="primary_button"
                      type="submit"
                      disabled={submitting || pristine}
                    >
                      Deposit
                      </Button>
                  </Grid>
                </Grid>
              </div>
              <h4>{status}</h4>
              <br />
              <br />
              <pre style={{ color: "white" }}>
                {JSON.stringify(values, undefined, 2)}
              </pre>
            </form>
          )}
        />
      </div>
    </>
  );
};

export default Deposit;
