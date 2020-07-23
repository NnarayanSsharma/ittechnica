import React, { Component } from "react";
import SlideShows from "./homePageComponents/SlideShows";
import "./HomePageInner.css";
import Services from "./homePageComponents/Services";

class HomePageInner extends Component {
  render() {
    return (
      <div className="home-inner">
        <h1></h1>
        <SlideShows />
        <Services />
      </div>
    );
  }
}

export default HomePageInner;
