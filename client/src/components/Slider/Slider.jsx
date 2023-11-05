import { useState } from "react";
import classes from "./Slider.module.css";

import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";

const images = [
  "https://images.pexels.com/photos/1036627/pexels-photo-1036627.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/18838558/pexels-photo-18838558/free-photo-of-young-man-in-a-casual-outfit-and-sunglasses-standing-on-the-pavement-in-city-in-winter.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/8306363/pexels-photo-8306363.jpeg?auto=compress&cs=tinysrgb&w=1600",
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const moveToPreviousSlide = () => {
    setCurrentSlide((prevSlide) => {
      if (currentSlide === 0) return 2;

      return prevSlide - 1;
    });
  };
  const moveToNextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prevSlide) => prevSlide + 1);
  };

  return (
    <div className={classes.slider}>
      <div
        className={classes.container}
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <img src={images[0]} alt="" />
        <img src={images[1]} alt="" />
        <img src={images[2]} alt="" />
      </div>

      <div className={classes.icons}>
        <div className={classes.icon} onClick={moveToPreviousSlide}>
          <WestOutlinedIcon sx={{ color: "white" }} />
        </div>
        <div className={classes.icon} onClick={moveToNextSlide}>
          <EastOutlinedIcon sx={{ color: "white" }} />
        </div>
      </div>
    </div>
  );
};

export default Slider;
