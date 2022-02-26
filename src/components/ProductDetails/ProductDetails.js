import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
} from "@mui/material";
import { productDetails } from "../../constants/data";

const ProductDetails = ({ showDialog, setShowDialog }) => {
  return (
    <Dialog
      open={showDialog}
      onClose={() => {
        setShowDialog(false);
      }}
    >
      <DialogTitle>This is Dilog</DialogTitle>
      <DialogContent>
        <Grid container>
          {/* Product Carousel */}
          <Grid item md={6}>

          </Grid>
          {/* Product Details */}
          <Grid item md={6}></Grid>
        </Grid>
        <DialogContentText>
          This is message Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Aut, illo.
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetails;
