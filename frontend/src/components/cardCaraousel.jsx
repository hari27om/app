import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function MyCardCaraousel() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.z
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        // autoPlay={this.props.deviceType !== "mobile" ? true : false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <div>
          <img
            src="/images/card/fushion.webp"
            alt="brand 1"
          />
        </div>
        <div>
        <img
            src="/images/card/kurtas.webp"
            alt="brand 2"
          />
        </div>
        <div>
          <img
            src="/images/card/sleepwear.webp"
            alt="brand 3"
          />
        </div>
        <div>
        <img
            src="/images/card/suit.webp"
            alt="brand 4"
          />
        </div>
        <div>
        <img
            src="/images/card/unstitched.jpg"
            alt="brand 4"
          />
        </div>
      </Carousel>
    </div>
  );
}

export default MyCardCaraousel;
