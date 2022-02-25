import React from "react";
import { Container, Grid, Link, Typography } from "@mui/material";
import { Box } from "@mui/system";

const Footer = () => {
  return (
    <Box>
      <Container maxWidth="xl" sx={{ mt: 8, mb:2 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <Box>
              <Box>
                <Link href="/">
                  <Box
                    component="img"
                    src="/assets/logo.svg"
                    alt="footer-logo"
                    sx={{
                      width: "120px",
                    }}
                  />
                </Link>
              </Box>
              <Typography sx={{ py: 1 }}>
                We offers high-quality foods and the best delivery service, and
                the food market you can blindly trust
              </Typography>
              <Box>
                <Box component="img" src="/assets/social/facebook.svg" />
                <Box
                  sx={{ ml: 2 }}
                  component="img"
                  src="/assets/social/twitter.svg"
                />
                <Box
                  sx={{ ml: 2 }}
                  component="img"
                  src="/assets/social/instagram.svg"
                />
                <Box
                  sx={{ ml: 2 }}
                  component="img"
                  src="/assets/social/youtube.svg"
                />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Typography sx={{ pb: 2, fontWeight: "bold" }}>About Us</Typography>
            <Box>
              <Box>
                <Link
                  sx={{ textDecoration: "none", color: "#7E7E7E" }}
                  href="/"
                >
                  About us
                </Link>
              </Box>
              <Box sx={{ mt: 1 }}>
                <Link
                  sx={{ textDecoration: "none", color: "#7E7E7E" }}
                  href="/"
                >
                  Contact us
                </Link>
              </Box>
              <Box sx={{ mt: 1 }}>
                <Link
                  sx={{ textDecoration: "none", color: "#7E7E7E" }}
                  href="/"
                >
                  About team
                </Link>
              </Box>
              <Box sx={{ mt: 1 }}>
                <Link
                  sx={{ textDecoration: "none", color: "#7E7E7E" }}
                  href="/"
                >
                  Customer Support
                </Link>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Typography sx={{ pb: 2, fontWeight: "bold" }}>
              Our Information
            </Typography>
            <Box>
              <Box>
                <Link
                  sx={{ textDecoration: "none", color: "#7E7E7E" }}
                  href="/"
                >
                  Privacy policy update
                </Link>
              </Box>
              <Box sx={{ mt: 1 }}>
                <Link
                  sx={{ textDecoration: "none", color: "#7E7E7E" }}
                  href="/"
                >
                  Terms & conditions
                </Link>
              </Box>
              <Box sx={{ mt: 1 }}>
                <Link
                  sx={{ textDecoration: "none", color: "#7E7E7E" }}
                  href="/"
                >
                  Return Policy
                </Link>
              </Box>
              <Box sx={{ mt: 1 }}>
                <Link
                  sx={{ textDecoration: "none", color: "#7E7E7E" }}
                  href="/"
                >
                  Site Map
                </Link>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Typography sx={{ pb: 2, fontWeight: "bold" }}>
              Community
            </Typography>
            <Box>
              <Box>
                <Link
                  sx={{ textDecoration: "none", color: "#7E7E7E" }}
                  href="/"
                >
                  Announcements
                </Link>
              </Box>
              <Box sx={{ mt: 1 }}>
                <Link
                  sx={{ textDecoration: "none", color: "#7E7E7E" }}
                  href="/"
                >
                  Answer center
                </Link>
              </Box>
              <Box sx={{ mt: 1 }}>
                <Link
                  sx={{ textDecoration: "none", color: "#7E7E7E" }}
                  href="/"
                >
                  Discussion boards
                </Link>
              </Box>
              <Box sx={{ mt: 1 }}>
                <Link
                  sx={{ textDecoration: "none", color: "#7E7E7E" }}
                  href="/"
                >
                  Giving works
                </Link>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography sx={{ pb: 2, fontWeight: "bold" }}>
              Subscribe Now
            </Typography>
            <Box>
              <Typography sx={{ pb: 2 }}>
                We offers high-quality foods and the best delivery service, and
                the food market you can blindly trust
              </Typography>
              <Box
                sx={{
                  backgroundColor: "#fff",
                  maxWidth: "450px",
                  borderRadius: "50px",
                  position: "relative",
                  zIndex: "4",
                  display: "flex",
                }}
              >
                <input
                  style={{
                    border: "1px solid #ececec",
                    borderRadius: "50px 0 0 50px",
                    paddingLeft: "58px",
                    background:
                      "url(/assets/icon-plane.png) no-repeat 25px center",
                    height: "40px",
                    boxShadow: "none",
                    fontSize: "15px",
                    width: "100%",
                  }}
                  type="text"
                  placeholder="Enter your email"
                />
                <button
                  style={{
                    fontSize: "15px",
                    fontWeight: "500",
                    color: "#ffffff",
                    border: "none",
                    backgroundColor: "#3BB77E",
                    border: "1px solid #29A56C",
                    borderTopRightRadius: "50px",
                    borderBottomRightRadius: "50px",
                    paddingRight: "20px",
                  }}
                >
                  Subscribe
                </button>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={3} justifyContent="space-between" sx={{mt: 2}}>
            <Grid item>
                <Typography>© Copyright 2022 Sumit, Pvt. Ltd.  All rights reserved</Typography>
            </Grid>
            <Grid item>
                <Box component="img" src="/assets/payment-method.png" alt="payment methood" />
            </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
