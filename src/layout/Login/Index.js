import React from "react";

import { Grid, Button } from "@material-ui/core";

const Home = ({ classes }) => {
  return (
    <>
      <h1>Buy, Sell and Trade Cryptocurrency </h1>
      <p>The place to trade Ethereum, Bitcoin and ...</p>
      <div>
        <Grid container alignItems="flex-start" spacing={2}>
          <Grid item={true} xs={6}>
            <Button
              variant="contained"
              color="primary"
              className="primary_button"
              href="/signup"
            >
              Create Account
            </Button>
          </Grid>
          <Grid item={true} xs={6}>
            <Button
              variant="contained"
              color="secondary"
              className="secondary_button"
              href="/signin"
            >
              Sign In
            </Button>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Home;
