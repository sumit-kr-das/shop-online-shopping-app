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
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

import { styles } from "../../constants/styles";

const mainImg =
  "https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Flogin.png&w=1920&q=75";

const Signup = () => {
  return (
    <Container
      maxWidth="xl"
      sx={[styles.flexCenter, { height: "100vh" }]}
    >
      <Grid container justifyContent="center">
        <Grid item xs={12} md={4}>
          <Box
            component="img"
            src={mainImg}
            sx={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          sx={{ textAlign: "center", mt: { xs: 2, md: 0 } }}
        >
          <Typography variant="h4">SignUp for free!</Typography>
          <Typography sx={{ mt: 1 }}>
            Already have an account?{" "}
            <Link
              to="/login"
              style={{
                color: "#02B290",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Login
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
              label="Email"
              sx={{ mt: 1 }}
            />
            <TextField
              required
              id="outlined-required"
              label="Password"
              sx={{ mt: 1 }}
            />
            <TextField
              required
              id="outlined-required"
              label="Confirm Password"
              sx={{ mt: 1 }}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="I agree to terms & Policy."
              sx={{ my: 1 }}
            />
            <Box sx={styles.buttonPrimary}>Submit & Register</Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Signup;
