// @ts-ignore
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
// @ts-ignore
import { Link, Router } from "react-router-dom";
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

          <Link style={{ textDecoration: "none" }} to="/">
            <Button sx={{ color: "#FFF" }}>Home</Button>
          </Link>
          <Link to="/session" style={{ textDecoration: "none" }}>
            <Button color="inherit" sx={{ color: "#FFF" }}>
              Play
            </Button>
          </Link>
          <Link to="/about-us" style={{ textDecoration: "none" }}>
            <Button color="inherit" sx={{ color: "#FFF" }}>
              About
            </Button>
          </Link>

          <Link to="/contact-us" style={{ textDecoration: "none" }}>
            <Button color="inherit" sx={{ color: "#FFF" }}>
              Contact
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
