import React from "react";
import { Drawer, List, ListItem, ListItemIcon } from "@mui/material";

const DrawerComponent = ({ opendrawer, setOpendrawer }) => {
  return (
    <Drawer
      open={opendrawer}
      onClose={() => {
        setOpendrawer(false);
      }}
    >
      <List sx={{ mt: 2 }}>
        <ListItem
          sx={{ pl: 4, pr: 20 }}
          divider
          button
          onClick={() => {
            setOpendrawer(false);
          }}
        >
          <ListItemIcon>Home</ListItemIcon>
        </ListItem>
        <ListItem
          sx={{ pl: 4, pr: 20 }}
          divider
          button
          onClick={() => {
            setOpendrawer(false);
          }}
        >
          <ListItemIcon>Products</ListItemIcon>
        </ListItem>
        <ListItem
          sx={{ pl: 4, pr: 20 }}
          divider
          button
          onClick={() => {
            setOpendrawer(false);
          }}
        >
          <ListItemIcon>About</ListItemIcon>
        </ListItem>
        <ListItem
          sx={{ pl: 4, pr: 20 }}
          divider
          button
          onClick={() => {
            setOpendrawer(false);
          }}
        >
          <ListItemIcon>Contact</ListItemIcon>
        </ListItem>
        <ListItem
          sx={{ pl: 4, pr: 20 }}
          divider
          button
          onClick={() => {
            setOpendrawer(false);
          }}
        >
          <ListItemIcon>Sign in</ListItemIcon>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default DrawerComponent;
