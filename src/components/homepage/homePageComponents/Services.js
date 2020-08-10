import React, { Component } from "react";
import "./Services.css";
import Slider from "react-slick";
// import devops from "../../../images/devops.jpeg";
// import uiux from "../../../images/ui-ux.jpeg";
import terraform from "../../../images/cybersecuritylogo.jpeg";
import technology from "../../../images/agilelogo.jpeg";
import cloud from "../../../images/softwaredeliverylogo.jpeg";
import microsoft from "../../../images/digitalservicelogo.jpeg";

class Services extends Component {
  render() {
    var settings = {
      //   dots: true,
      infinite: false,
      speed: 500,
      //   fade: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 4,
      arrows: true,
      // prevArrow: <ArrowLeft />,
      // nextArrow: <ArrowRight />,
      slidesToScroll: 4,
      className: "slides",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false,
            arrows: true,
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
      <div className="services">
        <h1>What we do?</h1>
        <div>
          <div className="container">
            {/* <div class="row"> */}
            <Slider {...settings}>
              <div className="">
                <div className="serviceBox">
                  <a href="agiletransformation">
                    <div className="service-icon">
                      <span>
                        {/* <i className="fa fa-globe"></i> */}
                        <img src={technology} />
                      </span>
                    </div>
                  </a>
                  <h3 className="title">Agile Transformation</h3>
                  <p className="description">
                    Collaborate delivers high value, cost effective enterprise
                    applications and customized solutions that enable
                    organizations to be smarter and faster.
                  </p>
                </div>
              </div>
              <div className="">
                <div className="serviceBox blue">
                  <a href="/softwaredelivery">
                    <div className="service-icon">
                      <span>
                        {/* <i className="fa fa-rocket"></i> */}
                        <img src={cloud} />
                      </span>
                    </div>
                  </a>
                  <h3 className="title">Software Delivery</h3>
                  <p className="description">
                    Combining Deep Expertise In OpenStack, databases and data
                    processing with analytics solutions.
                  </p>
                </div>
              </div>
              <div className="">
                <div className="serviceBox">
                  <a href="/cybersecurity">
                    <div className="service-icon">
                      <span>
                        {/* <i className="fa fa-globe"></i> */}
                        <img src={terraform} />
                      </span>
                    </div>
                  </a>
                  <h3 className="title">Cyber Security</h3>
                  <p className="description">
                    Collaborate works in partnership with customers, leveraging
                    significant experience to deliver on the promise of SAP
                    applications.
                  </p>
                </div>
              </div>
              <div className="">
                <div className="serviceBox blue">
                  <a href="/digitalservices">
                    <div className="service-icon">
                      <span>
                        {/* <i className="fa fa-rocket"></i> */}
                        <img src={microsoft} />
                      </span>
                    </div>
                  </a>
                  <h3 className="title">Digital Services</h3>
                  <p className="description">
                    Our team boasts technologists with expertise in a wide array
                    of Microsoft tools and can deliver competent Custom
                    Development Solutions and Data Management Solutions.
                  </p>
                </div>
              </div>
              {/* <div className="">
                <div className="serviceBox">
                  <a href="uxui">
                    <div className="service-icon">
                      <span>
                        <i className="fa fa-globe"></i>
                        <img src={uiux} />
                      </span>
                    </div>
                  </a>
                  <h3 className="title">Mobility, UI/UX</h3>
                  <p className="description">
                    With increased mobile penetration both in consumer and
                    enterprise space, our solutions team quickly helps you
                    identify the mobile strategy, fine tune your strategies and
                    achieve roadmaps.
                  </p>
                </div>
              </div> */}
              {/* <div className="">
                <div className="serviceBox blue">
                  <a href="devops">
                    <div className="service-icon">
                      <span>
                        <i className="fa fa-rocket"></i>
                        <img src={devops} />
                      </span>
                    </div>
                  </a>
                  <h3 className="title">Devops Consulting</h3>
                  <p className="description">
                    You’re up. Technology is no longer a supporting player in
                    the business; it’s taken over the main stage, spurring new
                    opportunities for growth.
                  </p>
                </div>
              </div> */}
            </Slider>
            {/* </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
