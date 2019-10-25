import React, { useState } from "react";
import { Form, Field } from "react-final-form";
import { TextField } from "final-form-material-ui";
import { Grid, Button } from "@material-ui/core";
import ArrowBack from "@material-ui/icons/ArrowBack";
import axios from "axios";
import "./Signup.css";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const validate = values => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "Required";
  }
  if (!values.lastName) {
    errors.lastName = "Required";
  }
  if (!values.email) {
    errors.email = "Required";
  }
  if (!values.password) {
    errors.password = "Required";
  }
  if (!values.verifyPassword) {
    errors.verifyPassword = "Required";
  }
  if (values.password !== values.verifyPassword) {
    errors.password = "Passwords doesn't match";
    errors.verifyPassword = "Passwords doesn't match";
  }
  return errors;
};

const Signup = ({ classes, history }) => {
  const [status, setStatus] = useState(" ");

  const handleSubmit = async values => {
    await sleep(500);
    axios({
      method: "post",
      url: `http://localhost:1337/account/signup`,
      data: values
    }).then(
      response => {
        setStatus(response.data.response);
        setTimeout(() => {
          history.push("/signin");
        }, 1500);
      },
      error => {
        setStatus("Account couldn't be created!");
      }
    );
  };

  return (
    <>
      <p>
        <ArrowBack
          fontSize="large"
          className="arrow_back"
          onClick={() => {
            history.push("/");
          }}
        />
      </p>
      <h1>Create Account</h1>

      <Form onSubmit={handleSubmit} validate={validate}>
        {({ handleSubmit, values, pristine }) => (
          <form onSubmit={handleSubmit} noValidate>
            <div>
              <Grid container alignItems="flex-start" spacing={2}>
                <Grid item={true} xs={6}>
                  <Field
                    className="label"
                    fullWidth
                    required
                    name="firstName"
                    component={TextField}
                    type="text"
                    label="First Name"
                  />
                </Grid>
                <Grid item={true} xs={6}>
                  <Field
                    className="label"
                    fullWidth
                    required
                    name="lastName"
                    component={TextField}
                    type="text"
                    label="Last Name"
                  />
                </Grid>
                <Grid item={true} xs={12}>
                  <Field
                    className="label"
                    name="email"
                    fullWidth
                    required
                    component={TextField}
                    type="email"
                    label="Email"
                  />
                </Grid>
                <Grid item={true} xs={6}>
                  <Field
                    className="label"
                    fullWidth
                    required
                    name="password"
                    component={TextField}
                    type="password"
                    label="Password"
                    autoComplete="false"
                  />
                </Grid>
                <Grid item={true} xs={6}>
                  <Field
                    className="label"
                    fullWidth
                    required
                    name="verifyPassword"
                    component={TextField}
                    type="password"
                    label="Verify Password"
                    autoComplete="false"
                  />
                </Grid>
                <Grid item={true} xs={6}>
                  <Button
                    variant="contained"
                    color="primary"
                    className="primary_button"
                    type="submit"
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </div>
            <div className="status">
              <h4>{status}</h4>
            </div>
          </form>
        )}
      </Form>
    </>
  );
};

export default Signup;
