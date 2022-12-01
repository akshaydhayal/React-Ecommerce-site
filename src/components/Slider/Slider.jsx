import React from "react";
import "./Slider.scss";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import { useState } from "react";



const Slider = () => {

  const prevSlide = () => {
    if(currentSlide==0){
        setCurrentSlide(2)
    }
    else{
        setCurrentSlide(currentSlide-1)
    }
      console.log(currentSlide);

  }
  const nextSlide = () => {
    if(currentSlide==2){
        setCurrentSlide(0)
    }
    else{
        setCurrentSlide(currentSlide+1)
    }
    console.log(currentSlide)
  }
  

  const images = [
    "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="slider">
      <div
        className="container"
        style={{ transform: `translateX(${currentSlide * -100}vw)` }}
      >
        <img className="slider-img" src={images[0]} />
        <img className="slider-img" src={images[1]} />
        <img className="slider-img" src={images[2]} />
      </div>
      <div className="slider-dir">
        <div className="left-dir" onClick={prevSlide}>
          <ArrowCircleLeftOutlinedIcon />
        </div>
        <div className="right-dir" onClick={nextSlide}>
          <ArrowCircleRightOutlinedIcon />
        </div>
      </div>
    </div>
  );
};
export default Slider;
