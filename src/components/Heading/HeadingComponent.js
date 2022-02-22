import { Container, Typography } from "@mui/material";
import React from "react";

const HeadingComponent = ({ heading, des }) => {
  return (
    <Container maxWidth="lg" sx={{ mt: 8, mb: 4, textAlign: "center" }}>
      <Typography variant="h5" sx={{ mb: 1, fontWeight: "bold" }}>
        {heading}
      </Typography>
      <Typography>{des}</Typography>
    </Container>
  );
};

export default HeadingComponent;
