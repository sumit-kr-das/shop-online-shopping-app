import React from "react";
import { Box, Grid } from "@mui/material";
import Navigation from "../components/Navigation/Navigation";
import Categories from "../components/Categories/Categories";

import { category } from "../constants/data";

const Product = () => {
  return (
    <>
      <Navigation />
      {/* product section */}
      <Grid container sx={{mt: 10}}>
        <Grid item md={4} sx={{ border: "1px solid red"}}>
          <Categories category={category} />
        </Grid>
        <Grid item md={8} sx={{ border: "1px solid red"}}>

        </Grid>
      </Grid>
    </>
  );
};

export default Product;
