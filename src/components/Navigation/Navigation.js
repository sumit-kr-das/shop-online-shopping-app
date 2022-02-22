import React, { useState } from "react";
import DrawerComponent from "./DrawerComponent";
import AlartBox from "../AlartBox/AlartBox";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Badge,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import { styles } from "../../constants/styles";

const menuStyle = {
  padding: "5px 10px",
  borderRadius: "5px",
  "&:hover": { background: "#F3F6F9" },
  mr: 2,
  cursor: "pointer",
  transition: "0.6s",
  fontFamily: "'Inter',arial",
};

const Navigation = () => {
  const [opendrawer, setOpendrawer] = useState(false);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <AppBar color="inherit" elevation={0}>
      <Toolbar sx={[styles.alignCenter, { justifyContent: "space-between" }]}>
        <Box sx={styles.alignCenter}>
          <Box
            component="img"
            src="/assets/logo.svg"
            sx={{ width: "100px", mr: 4 }}
          />
          {matches ? (
            <DrawerComponent
              opendrawer={opendrawer}
              setOpendrawer={setOpendrawer}
            />
          ) : (
            <Box sx={styles.alignCenter}>
              <Box sx={menuStyle}>Home</Box>
              <Box sx={menuStyle}>Products</Box>
              <Box sx={menuStyle}>About</Box>
              <Box sx={menuStyle}>Contact</Box>
            </Box>
          )}
        </Box>
        <Box sx={styles.alignCenter}>
          <Box sx={[styles.alignCenter, { marginRight: 1 }]}>
            <Badge badgeContent={4} color="primary">
              <AddShoppingCartOutlinedIcon />
            </Badge>
            <Typography sx={{ ml: 1 }}>Cart</Typography>
          </Box>
          {matches ? (
            <IconButton
              sx={{ ml: 1 }}
              onClick={() => {
                setOpendrawer(!opendrawer);
              }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={styles.alignCenter}>
              <AccountCircleOutlinedIcon />
              <Typography sx={{ ml: 1 }}>Sign in</Typography>
            </Box>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
