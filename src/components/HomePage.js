import React, { Component } from "react";
import Footer from "./footer/Footer";
import NavbarHome from "./navbar/NavbarHome";

class HomePage extends Component {
  render() {
    return (
      <div>
        <NavbarHome />
        <Footer />
      </div>
    );
  }
}

export default HomePage;
