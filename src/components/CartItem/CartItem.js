import React from "react";
import CartProducts from './CartProducts';
import Checkout from './Checkout'
import { Box } from "@mui/system";
import { Grid, Typography } from "@mui/material";


import { products } from "../../constants/data";


const CartItem = () => {
  return (
    <Grid container sx={{ mt: 10}}>
      <Grid item xs={12} md={8} sx={{ px: 2 }}>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>Your Cart</Typography>
        <Typography sx={{ mb:2 }}>There are 3 products in your cart</Typography>
        <CartProducts product={products} />
      </Grid>
      <Grid item xs={12} md={4} sx={{pr:1, px:{xs: 2, md: 0}}}>
        <Typography variant="h5" sx={{ fontWeight: "bold", mb:2, mt:3 }}>Order Summary</Typography>
        <Checkout />  
      </Grid>
    </Grid>
  );
};

export default CartItem;
