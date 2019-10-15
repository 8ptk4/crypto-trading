import React from "react";
import { Form, Field } from "react-final-form";
import { TextField } from "final-form-material-ui";
import { Grid, Button } from "@material-ui/core";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const showResults = async values => {
  await sleep(500);
  window.alert(JSON.stringify(values, undefined, 2));
};

const validate = values => {
  const errors = {};

  if (!values.email) {
    errors.email = "Required";
  }
  if (!values.password) {
    errors.password = "Required";
  }

  return errors;
};

const Signin = ({ classes }) => {
  return (
    <>
      <h1>Sign In</h1>

      <Form onSubmit={showResults} validate={validate}>
        {({ handleSubmit, values, pristine }) => (
          <form onSubmit={handleSubmit} noValidate>
            <div>
              <Grid container alignItems="flex-start" xs={6} spacing={2}>
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
                <Grid item xs={12}>
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
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    color="primary"
                    className="primary_button"
                    type="submit"
                  >
                    Sign In
                  </Button>
                </Grid>
              </Grid>
            </div>

            <br />
            <br />
            <pre style={{ color: "white" }}>
              {JSON.stringify(values, undefined, 2)}
            </pre>
          </form>
        )}
      </Form>
    </>
  );
};

export default Signin;
