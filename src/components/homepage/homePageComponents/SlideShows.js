import React, { Component } from "react";
import Slider from "react-slick";
import "./SlideShows.css";
import video from "../../../images/video1.mp4";
import slide16 from "../../../images/slide16.jpeg";
import slide15 from "../../../images/slide15.jpeg";
import slide12 from "../../../images/slide12.mp4";

export default class SlideShows extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      pauseOnHover: true,
    };
    return (
      <div className="slide-show">
        <Slider {...settings}>
          <div className="box">
            <div className="video">
              <video src={video} autoPlay="true" loop="true"></video>
            </div>
            <div className="overlay"></div>
            <div className="content-box">
              <p>Ittechnica helps you achieve more and,</p>{" "}
              <p>aim higher giving you the freedom</p>
            </div>
          </div>
          <div className="box">
            <div className="zoom-inout">
              <img src={slide15} />
            </div>
            <div className="content-box">
              <p>Work anywhere and everywhere</p> <p>with Ittechnica</p>
            </div>
          </div>
          <div className="box">
            {/* <div><img src={} /></div> */}
            <div className="video">
              <video src={slide12} autoPlay="true" loop="true"></video>
            </div>
            <div className="content-box">
              <p>We help you reach the top</p> <p>and stay on top.</p>
            </div>
          </div>
          <div className="box">
            <div className="slide4">
              <img src={slide16} />
            </div>
            <div className="content-box">
              <p>We take extra care for your </p> <p>golden career</p>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
