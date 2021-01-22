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
import { motion } from "framer-motion"
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
        <motion.h1
          whileHover={{
            scale: 1.1,
            TextShadow: "0px 0px 8px rgb(255,255,255)"
          }}
          data-aos="fade-up"
          data-aos-duration="2000" 
        >Our Trusted Clients</motion.h1>
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
            <motion.div className="box big" 
              whileHover={{
                scale: 1.1
              }}
            >
              <img src={logo2} />
            </motion.div>
            <motion.div className="box" 
              whileHover={{
                scale: 1.1
              }}
            >
              <img src={logo15} />
            </motion.div>
            <motion.div className="box"
              whileHover={{
                scale: 1.1
              }}
            >
              <img src={logo3} />
            </motion.div>
            <motion.div className="box"
              whileHover={{
                scale: 1.1
              }}
            >
              <img src={logo4} />
            </motion.div>
            {/* <div className="box">
              <img src={logo5} />
            </div> */}
            <motion.div className="box"
              whileHover={{
                scale: 1.1
              }}
            >
              <img src={logo6} />
            </motion.div>
            <motion.div className="box"
              whileHover={{
                scale: 1.1
              }}
            >
              <img src={logo7} />
            </motion.div>
            <motion.div className="box height"
              whileHover={{
                scale: 1.1
              }}
            >
              <img src={logo11} />
            </motion.div>
            <motion.div className="box"
              whileHover={{
                scale: 1.1
              }}
            >
              <img src={logo8} />
            </motion.div>
            <motion.div className="box big"
              whileHover={{
                scale: 1.1
              }}
            >
              <img src={logo1} />
            </motion.div>
            <motion.div className="box"
              whileHover={{
                scale: 1.1
              }}
            >
              <img src={logo9} />
            </motion.div>
            <motion.div className="box"
              whileHover={{
                scale: 1.1
              }}
            >
              <img src={logo10} />
            </motion.div>

            <motion.div className="box heigth"
              whileHover={{
                scale: 1.1
              }}
            >
              <img src={logo12} />
            </motion.div>
          </Carousel>
        </div>
      </div>
    );
  }
}

export default ClientPage;
