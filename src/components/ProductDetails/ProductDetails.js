import React, { useState } from "react";
import ProductSlider from "./ProductSlider";
import ProductDescription from "./ProductDescription";
import {
  Dialog,
  DialogContent,
  Grid,
} from "@mui/material";

const productDetails = {
  img1: "https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-1-2.png&w=750&q=75",
  img2: "https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-1-1.png&w=256&q=75",
  img3: "https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-1-3.png&w=256&q=75",
};

const ProductDetails = ({ showDialog, setShowDialog }) => {
  return (
    <Dialog
      open={showDialog}
      onClose={() => {
        setShowDialog(false);
      }}
      maxWidth="lg"
    >
      <DialogContent>
        <Grid container sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          {/* Product Carousel */}
          <Grid item md={6} >
            <ProductSlider image={productDetails} />
          </Grid>
          {/* Product Details */}
          <Grid item md={6}>
            <ProductDescription />
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetails;
