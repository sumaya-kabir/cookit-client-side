import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import banner1 from '../../assets/images/banner1.png';
import banner2 from '../../assets/images/banner2.png';


const Slider = () => {
    return (
        <Carousel fade>
      <Carousel.Item>
        <img
          className="img-fluid d-block w-100"
          src={banner1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img-fluid d-block w-100"
          src={banner2}
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
    );
};

export default Slider;