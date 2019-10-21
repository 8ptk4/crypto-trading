import React from "react";
import { Form, Field } from "react-final-form";
import { TextField } from "final-form-material-ui";
import { Grid, Button } from "@material-ui/core";
import ArrowBack from "@material-ui/icons/ArrowBack";
import axios from "axios";

// Authentication
import Auth from "../../Auth";

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

const Signin = ({ classes, history }) => {

  const handleSubmit = async values => {
    axios({
      method: "post",
      url: "http://localhost:1337/account/signin",
      data: values
    })
      .then(response => {
        Auth.authenticate(response.data.hemlighet, response.data.username);
        history.push("/dashboard/home");
        window.location.reload();
      })
      .catch(error => {
        console.log(error);
      });
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
      <h1>Sign In</h1>

      <Form onSubmit={handleSubmit} validate={validate}>
        {({ handleSubmit, values, pristine }) => (
          <form onSubmit={handleSubmit} noValidate>
            <div>
              <Grid container alignItems="flex-start" item={true} xs={12} spacing={2}>
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
                <Grid item={true} xs={12}>
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
