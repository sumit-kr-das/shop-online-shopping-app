import React from "react";
import { data2 } from "../../constants/data";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
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

const ProductSlider = () => {
  return (
    <Box sx={{ margin: "4rem 1rem" }}>
      <Carousel
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={2000}
        removeArrowOnDeviceType={["desktop"]}
        infinite={true}
      >
        {data2.map((data, index) => (
          <Box
            sx={{
              border: "1px solid #ececec",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "300px",
              height: "50px",
              boxShadow: "5px 5px 15px rgb(0 0 0 / 5%)",
              borderRadius: "5px",
              padding: "10px 15px 10px 10px",
              mx: 1,
              ml: { xs: 6 },
            }}
            key={index}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box
                component="img"
                src={data.img}
                sx={{ width: "60px", height: "60px" }}
              />
              <Typography sx={{ ml: 1 }}>{data.title}</Typography>
            </Box>
            <ArrowForwardIosIcon
              sx={{
                fontSize: "15px",
                transition: "0.5s",
                "&:hover": { transform: "translateX(5px)" },
              }}
            />
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default ProductSlider;
