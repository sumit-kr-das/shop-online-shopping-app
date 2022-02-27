import React from "react";
import { Box } from "@mui/system";
import { DialogContentText, Typography } from "@mui/material";
import { styles } from "../../constants/styles";

const tagsStyle = {
  border: "1px solid rgba(0,0,0,0.1)",
  padding: "2px 4px",
  color: "rgba(0,0,0,0.5)",
  mr: 1,
  my: 1,
};

const ProductDescription = () => {
  return (
    <Box sx={{ px: 2 }}>
      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
        Fresh Green Leaf Lettuce
      </Typography>
      <Typography variant="p">1each</Typography>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          $2.64
        </Typography>
        <Typography sx={{ textDecoration: "line-through", px: 2 }}>
          $2.74
        </Typography>
        <Typography
          sx={{
            p: 1,
            background: "#E2F0E8",
            color: "#6FB48E",
            fontWeight: "bold",
            borderRadius: "2px",
          }}
        >
          4% OFF
        </Typography>
      </Box>
      <Typography sx={{ color: "#FCBF67", my: 2 }}>
        Only 70 item left!
      </Typography>
      <Box
        sx={{
          background: "#E2F0E8",
          px: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          py: 1,
          borderRadius: "2px",
        }}
      >
        <Box
          component="img"
          src="/assets/svg/add-outline.svg"
          sx={{ width: "30px", height: "30px", cursor: "pointer" }}
        />
        <Typography
          sx={{
            fontSize: "1.5rem",
            width: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mx: 2,
          }}
        >
          1
        </Typography>
        <Box
          component="img"
          src="/assets/svg/remove-outline.svg"
          sx={{ width: "30px", height: "30px", cursor: "pointer" }}
        />
      </Box>
      <Typography sx={[styles.buttonPrimary, { my: 2 }]}>
        Add to Cart
      </Typography>
      <Box sx={{ display: "flex", width: "100%" }}>
        <Typography sx={[styles.buttonSecondary, { width: "50%", mr: 1 }]}>
          Wishlist
        </Typography>
        <Typography sx={[styles.buttonSecondary, { width: "50%" }]}>
          Share
        </Typography>
      </Box>
      <Box
        sx={{ display: "flex", alignItems: "center", flexWrap: "wrap", py: 1 }}
      >
        <Typography variant="h6" sx={{ mr: 2 }}>
          Tags:
        </Typography>
        <Typography sx={tagsStyle}>Fresh food</Typography>
        <Typography sx={tagsStyle}>Organic</Typography>
        <Typography sx={tagsStyle}>Cilantro</Typography>
        <Typography sx={tagsStyle}>Vegetable</Typography>
      </Box>
      <Typography sx={{ fontWeight: "bold" }}>Product Details:</Typography>
      <DialogContentText>
        Vegetables are parts of plants that are consumed by humans or other
        animals as food. the first meaning remains commonly used and is applied
        to plants collectively to ask all edible plant matter, including the
        flowers, fruits, stems, leaves, roots
      </DialogContentText>
    </Box>
  );
};

export default ProductDescription;
