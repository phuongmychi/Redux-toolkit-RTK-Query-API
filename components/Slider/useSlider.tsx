/*
 * Copyright (c) 2022. Phuong My Chi Entertainment Co.,Ltd
 */

import { useCallback, useState } from "react";

const useSlider = (data: []) => {
  const [current, setCurrent] = useState(0);
  const length = data?.length;
  const nextSlide = useCallback(() => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }, [current, setCurrent]);
  const prevSlide = useCallback(() => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }, [current, setCurrent]);
  return {
    nextSlide,
    current,
    prevSlide,
  };
};
export default useSlider;
