import React from "react";
import { Form, Field } from "react-final-form";
import { TextField } from "final-form-material-ui";
import { Grid, Button } from "@material-ui/core";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const handleSubmit = async values => {
  await sleep(500);
  values.status = "Account created successfuly";
  setTimeout(() => {
    window.alert("you will be redirected now!");
  }, 2000);
};

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

const Signup = ({ classes }) => {
  return (
    <>
      <h1>Create Account</h1>

      <Form onSubmit={handleSubmit} validate={validate}>
        {({ handleSubmit, values, pristine }) => (
          <form onSubmit={handleSubmit} noValidate>
            <div>
              <Grid container alignItems="flex-start" spacing={2}>
                <Grid item xs={6}>
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
                <Grid item xs={6}>
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
                <Grid item xs={12}>
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
                <Grid item xs={6}>
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
                <Grid item xs={6}>
                  <Field
                    className="label"
                    fullWidth
                    required
                    name="verifyPassword"
                    component={TextField}
                    type=""
                    label="Verify Password"
                    autoComplete="false"
                  />
                </Grid>
                <Grid item xs={6}>
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
            <br />
            <br />

            <br />
            <br />
            <pre style={{ color: "white" }}>
              {JSON.stringify(values, undefined, 2)}
            </pre>
            <h4>{values.status}</h4>
          </form>
        )}
      </Form>
    </>
  );
};

export default Signup;
