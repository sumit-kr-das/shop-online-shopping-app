import React from "react";
import { Box, Grid } from "@mui/material";
import Navigation from "../components/Navigation/Navigation";

const Product = () => {
  return (
    <>
      <Navigation />
      {/* product section */}
      <Grid container>
        <Grid item md={4} sx={{ border: "1px solid red"}}>
          <Box>
            <Box component="img"  />
          </Box>
        </Grid>
        <Grid item md={8} sx={{ border: "1px solid red"}}>

        </Grid>
      </Grid>
    </>
  );
};

export default Product;
