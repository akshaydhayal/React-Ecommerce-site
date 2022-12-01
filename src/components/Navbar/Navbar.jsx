import React from "react";
import "./Navbar.scss";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import {Link} from 'react-router-dom';

const Navbar = () => {
  return ( 
    <div className="navbar">
      <div className="wrapper">
        <div className="navbar-left">
          <div className="item">
            <span>USD</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <Link className="link" to="/products/1">Women</Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/2">Men</Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/3">Children</Link>
          </div>
        </div>

        <div className="navbar-center">
          <Link className="link" to="/">LAMASTORE</Link>
        </div>


        <div className="navbar-right">
          <div className="item">
            <Link className="link" to="">HomePage</Link>
          </div>
          <div className="item">
            <Link className="link" to="">About</Link>
          </div>
          <div className="item">
            <Link className="link" to="">Contact</Link>
          </div>
          <div className="item">
            <Link className="link" to="">Stores</Link>
          </div>

          <div className="icon-item">
            <SearchIcon />
            <PersonOutlineIcon />
            <FavoriteBorderIcon />
            <div className="cart-icon">
              <ShoppingCartOutlinedIcon />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
