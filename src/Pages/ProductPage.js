import React, { useState } from "react";
import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import Navigation from "../components/Navigation/Navigation";
import Categories from "../components/Categories/Categories";
import Product from "../components/Product/Product";

import { category } from "../constants/data";
import Support from "../components/Support/Support";
import Footer from "../components/Footer/Footer";

const ProductPage = () => {
  const [age, setAge] = useState("");
  const handleChenge = (event) =>{
    setAge(event.target.value);
  }
  return (
    <>
      {/* navigation section */}
      <Navigation />
      {/* product section */}
      <Grid container sx={{ mt: 15 }}>
        <Grid item md={3} sx={{ display: {lg: "block", xs: "none"}}}>
          <Categories category={category} />
        </Grid>
        <Grid item xs={12} lg={9} >
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 4, mx: 2}}>
            <Typography>We found 29 items for you!</Typography>
            <FormControl sx={{ minWidth: 160 }}>
              <InputLabel id="demo-simple-select-label">Price</InputLabel>
              <Select value={age} label="Age" onChange={handleChenge}>
                <MenuItem value={10}>Lowest Price</MenuItem>
                <MenuItem value={20}>Heighest Price</MenuItem>
                <MenuItem value={30}>New Products</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Product />
        </Grid>
        {/* support section */}
        <Support />
        {/* footer section */}
        <Footer />
      </Grid>
    </>
  );
};

export default ProductPage;
