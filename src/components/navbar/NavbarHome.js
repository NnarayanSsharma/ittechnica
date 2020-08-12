import React, { Component } from "react";
import "./NavbarHome.css";
import imgLogo from "../../images/ITtechnica-header.jpeg";
import { Link } from "react-router-dom";

class NavbarHome extends Component {
  render() {
    return (
      <div className="navbar-home">
        <div className="menu-wrap">
          <input type="checkbox" className="toggler" />
          <div className="hamburger">
            <div></div>
          </div>
          <div className="menu">
            <div>
              <div>
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Products</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <a href="#">Clients</a>
                  </li>
                  <li>
                    <a href="#">Careers</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar-desktop">
          <div className="logo">
            <a href="/">
              <img src={imgLogo} />
            </a>
          </div>
          <div className="content">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Clients</a>
              </li>
              <li>
                <Link to="careerhome">Careers</Link>
                {/* <a href="#">Careers</a> */}
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default NavbarHome;
