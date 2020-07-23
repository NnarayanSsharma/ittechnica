import React, { Component } from "react";
import Footer from "./footer/Footer";
import NavbarHome from "./navbar/NavbarHome";
import HomePageInner from "./homepage/HomePageInner";
import Menu from "./Menu";

class HomePage extends Component {
  render() {
    return (
      <div>
        {/* <NavbarHome />
        <HomePageInner />
        <Footer /> */}
        <Menu />
      </div>
    );
  }
}

export default HomePage;
