import React from "react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

import { styles } from "../../constants/styles";

const mainImg =
  "https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fregistration.png&w=828&q=75";

const Signup = () => {
  return (
    <Container maxWidth="xl" sx={[styles.flexCenter, { height: "100vh" }]}>
      <Grid container justifyContent="center">
        <Grid item xs={12} md={4}>
          <Box
            component="img"
            src={mainImg}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              border: "1px solid #ececec",
              borderRight: "none",
              borderTopLeftRadius: "1rem",
              borderBottomLeftRadius: "1rem"
            }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            textAlign: "center",
            mt: { xs: 2, md: 0 },
            border: "1px solid #ececec",
            borderLeft: "none",
            pt: 4,
            borderTopRightRadius: "1rem",
            borderBottomRightRadius: "1rem"
          }}
        >
          <Typography variant="h4">Login</Typography>
          <Typography sx={{ mt: 1 }}>
            Don’t have an account?{" "}
            <Link
              to="/signup"
              style={{
                color: "#02B290",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Create Account
            </Link>
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", p: 2 }}>
            <TextField
              required
              id="outlined-required"
              label="Username"
              sx={{ mt: 2, mb: 1 }}
            />
            <TextField
              required
              id="outlined-required"
              label="Password"
              sx={{ mt: 1, mb: 4 }}
            />
            <Box sx={styles.buttonPrimary}>Login</Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Signup;
