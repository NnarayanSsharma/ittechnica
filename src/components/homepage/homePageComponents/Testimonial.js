import React, { Component } from "react";
import clientpic from "../../../images/testimonial-pic1.jpeg";
import Slider from "react-slick";
import "./Testimonial.css";

class Testimonial extends Component {
  render() {
    let settings = {
      //   dots: true,
      infinite: false,
      speed: 500,
      //   fade: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 3,
      arrows: true,
      // prevArrow: <ArrowLeft />,
      // nextArrow: <ArrowRight />,
      slidesToScroll: 3,
      // className: "slides",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false,
            // arrows: true,
            // prevArrow: <ArrowLeft />,
            // nextArrow: <ArrowRight />,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
            arrows: true,
            // prevArrow: <ArrowLeft />,
            // nextArrow: <ArrowRight />,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            // prevArrow: <ArrowLeft />,
            // nextArrow: <ArrowRight />,
          },
        },
      ],
    };
    return (
      <div className="testimonial-box">
        <h2>Our Clients Testimonials</h2>
        {/* <div className="image">
          <img src={clientpic} />
        </div> */}
        <div className="testimonial-content">
          <Slider {...settings}>
            <div>
              <div>
                <i class="fas fa-quote-left"></i>
                <p>
                  Ittechnica continues to be one of our best partners for IT
                  services. They provide high-quality services in a flexible,
                  customer-centric framework. A key critical success factor is the
                  time the account team invests in understanding our business and
                  related needs.
                </p>
                <h3>Logan</h3>
                <h4>Account Manager, TEKsystems</h4>
              </div>
            </div>
            <div>
              <div>
                <i class="fas fa-quote-left"></i>
                <p>
                  We developed a great partnership with Ittechnica Inc and their
                  dedication towards services is excellent. We appreciate their work
                  and bringing new talents based on our requirements.{" "}
                </p>
                <h3>Christina</h3>
                <h4>Sr. Manager, Verizon</h4>
              </div>
            </div>
            <div>
              <div>
                <i class="fas fa-quote-left"></i>
                <p>
                  Ittechnica has exceeded our expectations! They guided us through
                  the entire process, from selection, to deployment to help desk
                  support. Excellent service and attention to detail!
                </p>
                <h3>Ryan</h3>
                <h4>Manager, Apex Systems</h4>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}

export default Testimonial;
