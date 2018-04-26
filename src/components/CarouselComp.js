import React from 'react';
import { Carousel } from 'antd';


function onChange(a, b, c) {
  console.log(a, b, c);
}

const CarouselComp = (props) => {
  return (
    <Carousel afterChange={onChange}>
      <div><h3><img src="src/img/bird_flower.jpeg" alt="bird" /></h3></div>
      <div><h3><img src="src/img/color_explosion.jpeg" alt="color" /></h3></div>
      <div><h3><img src="src/img/gorilla.jpeg" alt="gorilla" /></h3></div>
      <div><h3><img src="src/img/shades.jpeg" alt="shades" /></h3></div>
    </Carousel>
  );
  // }
};

export default CarouselComp;
