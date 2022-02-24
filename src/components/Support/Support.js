import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const mainImg = "https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fapp-thumbnail-2.png&w=750&q=100";
const androidImg = "https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fplay-store.png&w=256&q=75";
const iosImg = "https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fplay-store.png&w=256&q=75";

const Support = () => {
  return (
    <Grid container sx={{ background: "#CEE7DB", my: 4, py: 4 }}>
      <Grid
        item
        md={6}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyItems: "center",
        }}
      >
        <Box sx={{ px: 4 }}>
          <Typography variant="h4" sx={{ mb: 2 }}>
            Make your online shop easier with our mobile app
          </Typography>
          <Typography>
            Next makes online grocery shopping fast and easy. Get groceries
            delivered and order the best of seasonal farm fresh food.
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Box component="img" src={androidImg} />
            <Box component="img" src={iosImg} sx={{ ml: 1 }} />
          </Box>
        </Box>
      </Grid>
      <Grid item md={6}>
        <Box
          component="img"
          src={mainImg}
          sx={{ width: "100%", display: { md: "block", xs: "none" } }}
        />
      </Grid>
    </Grid>
  );
};

export default Support;
