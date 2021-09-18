import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

const Header: React.FC<any> = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            You Laugh You Lose
          </Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Play</Button>
          <Button color="inherit">Rules</Button>
          <Button color="inherit">About us</Button>
          <Button color="inherit">Contact</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
