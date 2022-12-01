import React from "react";
import './Contact.scss';
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import GoogleIcon from "@mui/icons-material/Google";

const Contact = () => {
  return (
    <div className="contact">
        <div className="left">
            <h4>BE IN TOUCH WITH US</h4>
        </div>
        <div className="center">
            <input type="text" placeholder="Enter your mail" />
            <button>Join us</button>
        </div>
        <div className="right">
            <FacebookIcon/>
            <InstagramIcon/>
            <TwitterIcon/>
            <PinterestIcon/>
            <GoogleIcon/>
        </div>

    </div>
  );
};

export default Contact;