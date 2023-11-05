import React from "react";
import { Box } from "@mui/material";

import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <Box className={classes.footer}>
      <Box className={classes.top}>
        <Box className={classes.item}>
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Kids</span>
          <span>Footwear</span>
          <span>Accessories</span>
          <span>NEW ARRIVALS</span>
        </Box>

        <Box className={classes.item}>
          <h1>Links</h1>
          <span>FAQS</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </Box>

        <Box className={classes.item}>
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Necessitatibus distinctio facere iste quod sequi illo corporis,
            labore nemo eligendi modi quibusdam eius accusamus velit commodi
            dolores debitis culpa voluptatibus esse.
          </span>
        </Box>
        <Box className={classes.item}>
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Necessitatibus distinctio facere iste quod sequi illo corporis,
            labore nemo eligendi modi quibusdam eius accusamus velit commodi
            dolores debitis culpa voluptatibus esse.
          </span>
        </Box>
      </Box>
      <Box className={classes.bottom}>
        <Box className={classes.left}>
          <span className={classes.logo}>Classy Closet</span>
          <span className={classes.copyright}>
            {" "}
            © Copyright 2023. All Rights Reserved
          </span>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
