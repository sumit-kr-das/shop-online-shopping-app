import React from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import CountUp from "react-countup";

const heading = {
  ml: 4,
  mt: 2,
  fontWeight: "bold",
  fontSize: "1.2rem"
};

const container = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  px: 2,
  py: 1,
  border: "1px solid #ececec",
  mx: 4,
  my:2,
  borderRadius: "5px",
};

const counterStyle = {
  background: "#BCE3C9",
  padding: "5px",
  borderRadius: "50%",
  width: "30px",
  height: "30px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const Categories = ({ category }) => {
  return (
    <Box sx={{ border: "1px solid #ececec", m:2, borderRadius: "5px" }}>
      <Typography sx={heading}>Category</Typography>
      {category.map((data, index) => (
        <Box sx={container} key={index}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ mr: 1 }} component="img" src={data.img} />
            <Typography>{data.name}</Typography>
          </Box>
          <Box sx={counterStyle}>
            <CountUp end={40} />
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Categories;
