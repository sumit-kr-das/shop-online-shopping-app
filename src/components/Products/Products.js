import React, { useState } from "react";
import { products } from "../../constants/data";
import { Grid } from "@mui/material";

import Product from "../Product/Product";
import ProductDetails from "../ProductDetails/ProductDetails";

const Products = () => {
  const [showDialog, setShowDialog] = useState(false);
  return (
    <>
      <Grid container spacing={3} alignItems="center" sx={{padding: "0 10px"}}  >
        {
          products.map((data,index)=>(
            <Product data={data} key={index} setShowDialog={setShowDialog} />
          ))
        }
      </Grid>
      <ProductDetails showDialog={showDialog} setShowDialog={setShowDialog} />
    </>
  );
};

export default Products;
