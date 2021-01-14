import React, { Component } from "react";
import { Spring } from "react-spring";
import Slider from "react-slick";
import "./SlideShows.css";
import video3 from "../../../images/video3.mp4";
import slide16 from "../../../images/slide16.jpeg";
import slide15 from "../../../images/slide15.jpeg";
import slide12 from "../../../images/slide12.mp4";

import homepage2 from "../../../images/homepage2.jpg"
// import homepage1 from "../../../images/homepage1.jpg"
import banner6 from "../../../images/banner6.jpg"
import banner3 from "../../../images/banner3.jpg"
import banner4 from "../../../images/banner4.jpg"
import banner5 from "../../../images/banner5.jpg"

import image7 from "../../../images/image7.jpg"
import image5 from "../../../images/image5.jpg"
import image8 from "../../../images/image8.jpg"
import v26975 from "../../../images/26975.jpg"


export default class SlideShows extends Component {
  render() {
    var settings = {
      dots: true,
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
              {/* <video src={video3} autoPlay="true" loop="true"></video> */}
              {/* <img src={image8} /> */}
              {/* <img src={banner3} /> */}
              <img src={v26975} />
            </div>
            <div className="overlay"></div>

            <div
              className="content-box"
              data-aos="fade-right"
              data-aos-once="true"
              // data-aos-delay="50"
              // data-aos-offset="200"
            >
              <p>Ittechnica helps you achieve more and,</p>{" "}
              <p>aim higher giving you the freedom</p>
            </div>
          </div>
          <div className="box">
            {/* <div className="zoom-inout"> */}
            <div>

              {/* <img src={slide15} /> */}
              {/* <img src={image7} /> */}
              <img src={banner5} />
            </div>
            <div
              className="content-box"
              data-aos="fade-right"
              data-aos-once="true"
              // data-aos-delay="50"
              // data-aos-offset="200"
            >
              <p>Work anywhere and everywhere</p> <p>with Ittechnica</p>
            </div>
          </div>
          <div className="box">
            {/* <div><img src={} /></div> */}
            <div className="video">
              {/* <video src={slide12} autoPlay="true" loop="true"></video> */}
              <img src={banner6} />
            </div>
            <div
              className="content-box"
              data-aos="fade-right"
              data-aos-once="true"
              // data-aos-delay="50"
              // data-aos-offset="200"
            >
              <p>We help you reach the top</p> <p>and stay on top.</p>
            </div>
          </div>
          <div className="box">
            <div className="slide4">
              {/* <img src={slide16} /> */}
              <img src={banner4} />
            </div>
            <div
              className="content-box"
              data-aos="fade-right"
              data-aos-once="true"
              // data-aos-delay="50"
              // data-aos-offset="200"
            >
              <p>We take extra care for your </p> <p>golden career</p>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
