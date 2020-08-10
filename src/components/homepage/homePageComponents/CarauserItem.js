import React, { Component } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Item() {
  return (
    <div
      style={{
        height: "150px",
        width: "100%",
        border: "solid 1px red",
        background: "blue",
      }}
    >
      2
    </div>
  );
}

class CarauserItem extends Component {
  render() {
    return (
      <div style={{ margin: "4rem" }}>
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlay
          autoPlaySpeed={1500}
          centerMode={false}
          className=""
          customTransition="all 3s linear"
          containerClass="container-with-dots"
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
              items: 3,
              partialVisibilityGutter: 30,
            },
          }}
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </Carousel>
      </div>
    );
  }
}

export default CarauserItem;
