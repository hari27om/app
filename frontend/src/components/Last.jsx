import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Last = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.z
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div>
    <div className="title" style={{display:"flex", justifyContent:"center", alignItems:"center", margin: "6vh 0vh 10vh 0vh"}}>
    <h1>Trending Collections</h1>
    </div>
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
        <div style={{width: '100%', paddingRight: '20px'}}>
          <img src="/images/collection/1.jpg" alt="brand 1" style={{width: '100%'}}/>
        </div>
        <div style={{width: '100%', paddingRight: '20px'}}>
          <img src="/images/collection/2.webp" alt="brand 2" style={{width: '100%'}} />
        </div>
        <div style={{width: '100%', paddingRight: '20px'}}>
          <img src="/images/collection/3.webp" alt="brand 3" style={{width: '100%'}}/>
        </div>
        <div style={{width: '100%', paddingRight: '20px'}}>
          <img src="/images/collection/4.jpg" alt="brand 4" style={{width: '100%'}}/>
        </div>
        <div style={{width: '100%', paddingRight: '20px'}}>
          <img src="/images/collection/5.jpg" alt="brand 5" style={{width: '100%'}} />
        </div>
        <div style={{width: '100%', paddingRight: '20px'}}>
          <img src="/images/collection/6.jpg" alt="brand 6" style={{width: '100%'}} />
        </div>
      </Carousel>
    </div>
  );
};

export default Last;
