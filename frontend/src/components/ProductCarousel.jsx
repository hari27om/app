import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function ProductCarousel() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={true} // Enable autoplay
        autoPlaySpeed={1500} // Set autoplay interval to 3 seconds
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <div>
          <img src="/images/brand/b1.jpg" alt="brand 1" />
        </div>
        <div>
          <img src="/images/brand/b2.jpg" alt="brand 2" />
        </div>
        <div>
          <img src="/images/brand/b3.jpg" alt="brand 3" />
        </div>
        <div>
          <img src="/images/brand/b4.jpg" alt="brand 4" />
        </div>
      </Carousel>
    </div>
  );
}

export default ProductCarousel;
