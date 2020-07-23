import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import NavbarHome from "./navbar/NavbarHome";
import Footer from "./footer/Footer";
import HomePageInner from "./homepage/HomePageInner";
import Terraform from "./services/Terraform";
import Cloud from "./services/Cloud";
import Microsoft from "./services/Microsoft";
import UiUx from "./services/UiUx";
import Devops from "./services/Devops";
import Technology from "./services/Technology";

export class Menu extends Component {
  render() {
    return (
      <div>
        <NavbarHome />
        <Switch>
          <Route exact path="/" component={HomePageInner} />
          <Route exact path="/terraform" component={Terraform} />
          <Route exact path="/cloud" component={Cloud} />
          <Route exact path="/microsoft" component={Microsoft} />
          <Route exact path="/uxui" component={UiUx} />
          <Route exact path="/devops" component={Devops} />
          <Route exact path="/technology" component={Technology} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Menu;
