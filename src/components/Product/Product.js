import React from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { products } from "../../constants/data";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";

const Product = () => {
  return (
    <Grid
      container
      spacing={3}
      alignItems="center"
      sx={{ px: { xs: 1, md: 4 } }}
    >
      {products.map((data, index) => (
        <Grid
          item
          lg={2.4}
          sm={4}
          xs={6}
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
          key={index}
        >
          <Card
            sx={{
              Width: "250px",
              height: "300px",
              border: "1px solid #ececec",
              borderRadius: "5px",
              padding: {md: "10px", xs:0}
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={data.img}
                alt="product-image"
                sx={{
                  transition: "0.5s",
                  "&:hover": { transform: "scale(1.1)" },
                }}
              />
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                  <Typography sx={{ fontWeight: "bold" }}>
                    {data.newPricw}
                  </Typography>
                  <Typography sx={{ ml: 1, textDecoration: "line-through" }}>
                    {data.oldPrice}
                  </Typography>
                </Box>
                <Typography gutterBottom component="div">
                  {data.title}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mt: 2,
                  }}
                >
                  <Typography sx={{ color: "#7E7E7E" }}>{data.qty}</Typography>
                  <AddShoppingCartOutlinedIcon
                    sx={{
                      transition: "0.5s",
                      zIndex: "10",
                      "&:hover": { transform: "scale(1.1)", color: "#02B290" },
                    }}
                  />
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Product;
