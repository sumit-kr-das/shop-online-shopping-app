import React from "react";
import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { styles } from "../../constants/styles";

const Header = () => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "700px",
        background: "url(/assets/bg/banner-4.webp)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        objectFit: "cover",
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          height: "700px",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
            color: styles.colors.primaryText,
            fontSize: { lg: "3.5rem", xs: "1.8rem" },
          }}
        >
          Healthy vegetable that you deserve to eat fresh
        </Typography>
        <Typography
          sx={{
            color: styles.colors.secondaryText,
            fontSize: { lg: "1.2rem", xs: ".8rem" },
            my: 4,
          }}
        >
          We source and sell the very best beef, lamb and pork, sourced with the
          greatest care from farmer.
        </Typography>
        <Box sx={{ width: { lg: "500px", xs: "100%" } }}>
          <input
            style={{
              width: "100%",
              height: "60px",
              fontSize: "1rem",
              padding: "1rem",
              border: "none",
              borderRadius: "5px",
              backgroundImage: "url(/assets/search.png)",
              backgroundPosition: "center right",
              lineHeight: "60px",
              backgroundRepeat: "no-repeat",
            }}
            type="text"
            placeholder="What are you locking..."
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
