import React, { useState } from "react";
import { products } from "../../constants/data";
import { styles } from "../../constants/styles";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ProductDetails from "../ProductDetails/ProductDetails";

const Product = () => {
  const [showDialog, setShowDialog] = useState(false);
  return (
    <>
    <Grid container spacing={3} alignItems="center" sx={{padding: "0 10px"}}  >
      {
        products.map((data,index)=>(
          <Grid item key={index} xs={6} md={2.4} sx={{display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "center"}}>
          <Card sx={{ maxWidth: 200, border: "1px solid #ececec",cursor: "pointer" }}>
            <Box>
              <CardMedia
                component="img"
                height="140"
                image={data.img}
                alt="green iguana"
                sx={{
                  transition: "0.5s",
                  "&:hover": { transform: "scale(1.1)" },
                }}
                onClick = { () =>  {setShowDialog(true)}}
              />
              <CardContent>
                <Box
                  sx={[styles.alignCenter, { justifyContent: "space-between" }]}
                >
                  <Typography
                    gutterBottom
                    component="div"
                    sx={{ fontWeight: "bold" }}
                  >
                    {products[1].newPricw}
                  </Typography>
                  <Typography
                    gutterBottom
                    component="div"
                    sx={{ textDecoration: "line-through" }}
                  >
                    {data.newPricw}
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.primary" sx={{ transition: "0.4s","&:hover": {color: "#02B290"}}} onClick = { () =>  {setShowDialog(true)}}>
                  {data.title}
                </Typography>
                <Box
                  sx={[
                    styles.alignCenter,
                    { justifyContent: "space-between", mt: 2 },
                  ]}
                >
                  <Typography
                    gutterBottom
                    component="div"
                    sx={{ color: styles.colors.secondaryText }}
                  >
                    {data.qty}
                  </Typography>
                  <Typography
                    gutterBottom
                    component="div"
                    sx={{ textDecoration: "line-through" }}
                  >
                    <AddShoppingCartIcon
                      sx={{
                        transition: "0.5s",
                        "&:hover": { transform: "scale(1.2)", color: "#02B290" },
                      }}
                    />
                  </Typography>
                </Box>
              </CardContent>
            </Box>
          </Card>
        </Grid>
        ))
      }
    </Grid>
    <ProductDetails showDialog={showDialog} setShowDialog={setShowDialog} />
    </>
  );
};

export default Product;
