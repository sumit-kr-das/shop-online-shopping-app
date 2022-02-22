import { Box, Typography } from "@mui/material";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { data1 } from "../../constants/data";
import { styles } from "../../constants/styles";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const CategorySlider = () => {
  return (
    <Box>
      <Carousel responsive={responsive}>
        {data1.map((data, index) => (
          <Box
            sx={{
              background: data.color,
              display: "flex",
              alignItems: "center",
              padding: "1rem",
              borderRadius: "4px",
              mx: 2,
            }}
            key={index}
          >
            <Box component="img" src={data.img} sx={{ width: "120px" }} />
            <Box>
              <Typography sx={{ fontWeight: "bold" }}>{data.title}</Typography>
              <Typography sx={{ color: styles.colors.secondaryText }}>
                {data.des}
              </Typography>
            </Box>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default CategorySlider;
