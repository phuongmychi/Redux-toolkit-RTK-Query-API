/*
 * Copyright (c) 2022. Phuong My Chi Entertainment Co.,Ltd
 */

import { useEffect, useState } from 'react';

const useImageBroken = (url: string) => {
  // ban đầu nếu có hình ảnh, trả về true
  const [isHaveImg, setImg] = useState(true);
  useEffect(() => {
    const s = document.createElement('IMG') as HTMLImageElement;
    s.src = url;
    s.onerror = function () {
      setImg(false);
    };
    s.onload = function () {
      setImg(true);
    };
  }, [url]);

  return isHaveImg;
};

export default useImageBroken;
