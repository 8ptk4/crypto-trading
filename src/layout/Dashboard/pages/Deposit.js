import React, { useState, useEffect } from "react";
import { Col } from "react-bootstrap";
import { Form, Field } from "react-final-form";
import { TextField } from "final-form-material-ui";
import { Grid, Button } from "@material-ui/core";
import axios from "axios";
import Balance from "../components/Balance";

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

const Deposit = () => {
  const [status, setStatus] = useState("");
  const [balance, setBalance] = useState("");

  useEffect(() => {
    console.log(Balance);
  }, [status]);

  const handleSubmit = async values => {
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
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <>
      <Col className="main" md={9}>
        <div className="main_top">
          <div className="left">/Deposit</div>
          <div className="right"></div>
        </div>
        <div className="main_main">
          <h1>Deposit</h1>
          <Form onSubmit={handleSubmit} validate={validate}>
            {({ handleSubmit, values, pristine, reset }) => (
              <form onSubmit={handleSubmit} noValidate>
                <div>
                  <Grid container alignItems="flex-start" xs={6} spacing={2}>
                    <Grid item xs={12}>
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
                    <Grid item xs={6}>
                      <Button
                        variant="contained"
                        color="primary"
                        className="primary_button"
                        type="submit"
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
          </Form>
        </div>
      </Col>
    </>
  );
};

export default Deposit;
