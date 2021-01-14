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
                    <a href="#"></a>
                  </li>
                  <li>
                    <Link to="/">Home</Link>

                  </li>
                  <li>
                    <Link to="/aboutus">About Us</Link>
                  </li>
                  {/* <li>
                    <a href="#">Products</a>
                  </li> */}
                  <li>
                    {/* <a href="#">Services</a> */}
                    <Link to="/agilesoftwaredevelopment">Services</Link>
                  </li>
                  {/* <li>
                    <a href="#">Clients</a>
                  </li> */}
                  <li>
                    <Link to="/careerhome">Careers</Link>
                  </li>

                  <li>
                    <Link to="/contactus">Contact Us</Link>
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
                <a href="#"></a>
              </li>
              <li>
                <a href="#"></a>
              </li>
              <li>
                <Link to="/aboutus">
                  About Us
                </Link>
                {/* <a href="#"></a> */}
              </li>
              {/* <li>
                <a href="#">Products</a>
              </li> */}
              <li>
                {/* <a href="#">Services</a> */}
                <Link to="/agilesoftwaredevelopment">Services</Link>
              </li>
              {/* <li>
                <a href="#">Clients</a>
              </li> */}
              <li>
                <Link to="/careerhome">Careers</Link>
                {/* <a href="#">Careers</a> */}
              </li>
              
              <li>
                <Link to="/contactus">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default NavbarHome;
