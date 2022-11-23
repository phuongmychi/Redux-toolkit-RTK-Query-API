/*
 * Copyright (c) 2022. Phuong My Chi Entertainment Co.,Ltd
 */

import React, { Component, FC, useState } from "react";
import styles from "./Slider.module.css";
import useSlider from "./useSlider";
import { Button, ImageLazy } from "../index";

interface SliderProps {
  data: [];
}
const Slider: FC<SliderProps> = ({ data }) => {
  const { prevSlide,nextSlide,current} = useSlider(data);

  return (
    <div className={styles?.sliderContainer}>
      <div className={styles.sliderContent}>

          <div className={styles.ButtonNavi}>
              <Button  buttonText={"Prev"} onClick={prevSlide} />
              <Button buttonText="Next" onClick={nextSlide} />
          </div>

          {data?.map((item: any, index: number) => (
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {index === current && (
              <ImageLazy
                imgUrl={item?.src?.medium}
                style={{ width: "350px" }}
              />
            )}
          </div>
        ))}
      </div>

    </div>
  );
};
export default Slider;
