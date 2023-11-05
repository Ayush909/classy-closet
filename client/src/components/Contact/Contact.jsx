import React from "react";
import "./Contact.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import GoogleIcon from "@mui/icons-material/Google";
import Pinterest from "@mui/icons-material/Pinterest";

const Contact = () => {
  return (
    <div className="contact">
      <div className="wrapper">
        <span>Be In Touch with Us: </span>
        <div className="mail">
          <input type="email" placeholder="Enter your email..." />
          <button>Join Us</button>
        </div>
        <div className="icons">
          <FacebookIcon />
          <GoogleIcon />
          <InstagramIcon />
          <TwitterIcon />
          <Pinterest />
        </div>
      </div>
    </div>
  );
};

export default Contact;
