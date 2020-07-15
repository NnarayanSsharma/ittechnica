import React, { Component } from "react";
import SlideShows from "./homePageComponents/SlideShows";
import "./HomePageInner.css";

class HomePageInner extends Component {
  render() {
    return (
      <div className="home-inner">
        <h1></h1>
        <SlideShows />
      </div>
    );
  }
}

export default HomePageInner;
