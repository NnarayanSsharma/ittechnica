import React, { Component } from "react";
// import Carousel from "react-elastic-carousel";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import logo1 from "../../../images/logos/logo13.jpg";
import logo2 from "../../../images/logos/logo14.png";
import logo3 from "../../../images/logos/logo3.jpg";
import logo4 from "../../../images/logos/logo4.jpg";
import logo6 from "../../../images/logos/logo6.png";
import logo7 from "../../../images/logos/logo7.jpg";
import logo8 from "../../../images/logos/logo8.png";
import logo9 from "../../../images/logos/logo9.png";
import logo10 from "../../../images/logos/logo10.png";
import logo11 from "../../../images/logos/logo11.jpg";
import logo12 from "../../../images/logos/logo12.jpg";
import logo15 from "../../../images/logos/logo15.jpg";

import "./ClientPage.css";

class ClientPage extends Component {
  render() {
    const breakpoints = [
      { width: 1, itemsToShow: 1, itemsToScroll: 1 },
      { width: 550, itemsToShow: 1, itemsToScroll: 1 },
      { width: 760, itemsToShow: 2, itemsToScroll: 1 },
      { width: 1200, itemsToShow: 3, itemsToScroll: 1 },
    ];
    return (
      <div className="client-page">
        <h1>Our Trusted Clients</h1>
        <div className="carousel">
          <Carousel
            additionalTransfrom={0}
            arrows={false}
            autoPlay
            autoPlaySpeed={3}
            // centerMode={true}
            className=""
            containerClass="container-with-dots"
            transitionDuration={3000}
            itemPadding={[10, 50]}
            // customTransition="all 3s linear"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 1024,
                },
                items: 3,
                partialVisibilityGutter: 40,
              },
              mobile: {
                breakpoint: {
                  max: 464,
                  min: 0,
                },
                items: 1,
                partialVisibilityGutter: 30,
              },
              tablet: {
                breakpoint: {
                  max: 1024,
                  min: 464,
                },
                items: 2,
                partialVisibilityGutter: 30,
              },
            }}
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable
          >
            <div className="box big">
              <img src={logo2} />
            </div>
            <div className="box">
              <img src={logo15} />
            </div>
            <div className="box">
              <img src={logo3} />
            </div>
            <div className="box">
              <img src={logo4} />
            </div>
            {/* <div className="box">
              <img src={logo5} />
            </div> */}
            <div className="box">
              <img src={logo6} />
            </div>
            <div className="box">
              <img src={logo7} />
            </div>
            <div className="box height">
              <img src={logo11} />
            </div>
            <div className="box">
              <img src={logo8} />
            </div>
            <div className="box big">
              <img src={logo1} />
            </div>
            <div className="box">
              <img src={logo9} />
            </div>
            <div className="box">
              <img src={logo10} />
            </div>

            <div className="box heigth">
              <img src={logo12} />
            </div>
          </Carousel>
        </div>
      </div>
    );
  }
}

export default ClientPage;
