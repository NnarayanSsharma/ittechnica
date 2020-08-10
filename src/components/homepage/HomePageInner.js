import React, { Component } from "react";
import SlideShows from "./homePageComponents/SlideShows";
import "./HomePageInner.css";
import Services from "./homePageComponents/Services";
import WhyWeAreBest from "./homePageComponents/WhyWeAreBest";
import ClientPage from "./homePageComponents/ClientPage";
import Testimonial from "./homePageComponents/Testimonial";
import CarauserItem from "./homePageComponents/CarauserItem";

class HomePageInner extends Component {
  render() {
    return (
      <div className="home-inner">
        <h1></h1>
        <SlideShows />
        <Services />
        <WhyWeAreBest />
        <ClientPage />
        <Testimonial />
        {/* <CarauserItem /> */}
      </div>
    );
  }
}

export default HomePageInner;
