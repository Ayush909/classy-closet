import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  AppBar,
  Typography,
  Toolbar,
  Menu,
  MenuItem,
} from "@mui/material";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";

import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <AppBar position="static" sx={{ background: "#fff", color: "#000" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box className={classes.left}>
            <Box className={classes.item}>
              <span>USD</span>
              <KeyboardArrowDownIcon />
            </Box>
            <Box className={classes.item}>
              <Link className="link" to="/products/women">
                Women
              </Link>
            </Box>
            <Box className={classes.item}>
              <Link className="link" to="/products/men">
                Men
              </Link>
            </Box>
            <Box className={classes.item}>
              <Link className="link" to="/products/kids">
                Kids
              </Link>
            </Box>
          </Box>

          <Box className={classes.center}>
            <Link className="link" to="/">
              CLASSY CLOSET
            </Link>
          </Box>

          <Box className={classes.right}>
            <Box className={classes.item}>
              <Link className="link" to="/">
                Home
              </Link>
            </Box>
            <Box className={classes.item}>
              <Link className="link" to="/">
                About
              </Link>
            </Box>
            <Box className={classes.item}>
              <Link className="link" to="/">
                Contact
              </Link>
            </Box>
            <Box className={classes.item}>
              <Link className="link" to="/">
                Stores
              </Link>
            </Box>

            <Box className={classes.icons}>
              <SearchIcon />
              <PersonOutlineOutlinedIcon />
              <FavoriteBorderOutlinedIcon />
              <Box className={classes.cartIcon}>
                <ShoppingCartOutlinedIcon />
                <span>0</span>
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
