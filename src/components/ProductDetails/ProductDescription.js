import React from "react";
import { Box } from "@mui/system";
import { DialogContentText, IconButton, Typography } from "@mui/material";

const ProductDescription = () => {
  return (
    <Box sx={{px: 2}}>
      <Typography variant="h5" sx={{fontWeight: "bold"}}>Fresh Green Leaf Lettuce</Typography>
      <Typography variant="p">1each</Typography>
      <Box sx={{display: "flex", alignItems: "center"}}>
        <Typography variant="h5" sx={{fontWeight: "bold"}}>$2.64</Typography>
        <Typography sx={{ textDecoration: "line-through", px: 2}}>$2.74</Typography>
        <Typography sx={{p:1,background: "#E2F0E8", color: "#6FB48E", fontWeight: "bold"}}>4% OFF</Typography>
      </Box>
      <Typography sx={{ color: "#FCBF67"}}>Only 70 item left!</Typography>
      <Box sx={{background: "#E2F0E8", px:2, display: "flex", alignItems: "center"}}>
          <IconButton>-</IconButton>
          <Typography>1</Typography>
          <IconButton>-</IconButton>
      </Box>
      <DialogContentText>
        This is message Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Aut, illo.
      </DialogContentText>
    </Box>
  );
};

export default ProductDescription;
