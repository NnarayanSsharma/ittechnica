import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import NavbarHome from "./navbar/NavbarHome";
import Footer from "./footer/Footer";
import HomePageInner from "./homepage/HomePageInner";
import DigitalServices from "./services/DigitalServices";
import AgileTransformation from "./services/AgileTransformation";
import SoftwareDelivery from "./services/SoftwareDelivery";
import CyberSecurity from "./services/CyberSecurity";
import WeAreBest from "./homepage/homePageComponents/WeAreBest";

export class Menu extends Component {
  render() {
    return (
      <div>
        <NavbarHome />
        <Switch>
          <Route exact path="/" component={HomePageInner} />
          <Route exact path="/digitalservices" component={DigitalServices} />
          <Route
            exact
            path="/agiletransformation"
            component={AgileTransformation}
          />
          <Route exact path="/softwaredelivery" component={SoftwareDelivery} />
          {/* <Route exact path="/uxui" component={UiUx} />
          <Route exact path="/devops" component={Devops} /> */}
          <Route exact path="/cybersecurity" component={CyberSecurity} />
          <Route exact path="/wearebest" component={WeAreBest} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Menu;
