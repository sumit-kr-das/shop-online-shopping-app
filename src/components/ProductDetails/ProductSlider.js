import { Box } from "@mui/material";
import React, { useState } from "react";

const resixeImg = {
  width: { xs: "80px", md: "120px" },
  height: { xs: "80px", md: "120px" },
  border: "1px solid #ececec",
  mb: 1,
};

const ProductSlider = ({ image }) => {
  const [selectImg, setSelectImg] = useState(image.img1);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column-reverse", md: "row" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { md: "column" },
          height: { xs: "100%", md: "400px" },
        }}
      >
        <Box
          component="img"
          src={image.img1}
          sx={resixeImg}
          onClick={() => {
            setSelectImg(image.img1);
          }}
        />
        <Box
          component="img"
          src={image.img2}
          sx={resixeImg}
          onClick={() => {
            setSelectImg(image.img2);
          }}
        />
        <Box
          component="img"
          src={image.img3}
          sx={resixeImg}
          onClick={() => {
            setSelectImg(image.img3);
          }}
        />
      </Box>
      <Box sx={{ ml: 2 }}>
        <Box
          component="img"
          src={selectImg}
          sx={{
            width: { xs: "100%", md: "400px" },
            height: { xs: "100%", md: "400px" },
            border: "1px solid #ececec ",
          }}
        />
      </Box>
    </Box>
  );
};

export default ProductSlider;
