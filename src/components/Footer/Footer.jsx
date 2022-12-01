import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="section1">
          <div className="head">Categories</div>
          <div className="footer-category">
            <Link className="link" to="/">
              Men
            </Link>
            <Link className="link" to="/">
              Women
            </Link>
            <Link className="link" to="">
              Children
            </Link>
            <Link className="link" to="/">
              Shoes
            </Link>
            <Link className="link" to="/">
              Accessories
            </Link>
          </div>
        </div>
        <div className="section2">
          <div className="head">Links</div>
          <div className="footer-links">
            <Link className="link" to="/">
              FAQ
            </Link>
            <Link className="link" to="/">
              Pages
            </Link>
            <Link className="link" to="">
              Store
            </Link>
            <Link className="link" to="/">
              Compare
            </Link>
            <Link className="link" to="/">
              Cookies
            </Link>
          </div>
        </div>
        <div className="section3">
          <div className="head">About</div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          quos facere a consectetur amet? Quibusdam, necessitatibus iure ducimus
          culpa excepturi placeat obcaecati totam iste mollitia repellendus,
          qui, fugiat voluptate non?
        </div>
        <div className="section4">
          <div className="head">Contact</div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, optio
          enim. Illum nisi praesentium beatae, deleniti necessitatibus pariatur
          nihil quam quis hic? Ad in aut dolor repellendus suscipit sint
          laboriosam!
        </div>
      </div>

      <div className="footer-bottom">
        <div className="left">
          <img src="assets/Flipkart-Logo.png" height={90} width={200} />
        </div>
        <div className="right">
          <img src="assets/payments.png" height={60} width={400} />
        </div>
      </div>
    </div>
  );
};
export default Footer;
