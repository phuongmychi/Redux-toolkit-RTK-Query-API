/*
 * Copyright (c) 2022. Phuong My Chi Entertainment Co.,Ltd
 */

import React from "react";
import "./App.css";
import ImageLazy from "./components/ImageLazy";
import Loading from "./components/Loading";
import {Header} from "./components/Header";
import {useScollLoadMore} from "./hooks";

export const removeDuplicate = (arr: []) => {
  const resp = arr
    ? arr?.filter((v, i, a) => a.findIndex((t: {}) => t === v) === i)
    : [];
  return resp;
};

export type Photo = {
  id: number;
  width: number;
  height: number;
  url: string;
  photographer: string;
  photographer_url: string;
  photographer_id: number;
  avg_color: string;
  src: {
    original: string;
    large2x: string;
    large: string;
    medium: string;
    small: string;
    portrait: string;
    landscape: string;
    tiny: string;
  };
  liked: boolean;
  alt: string;
};

function App() {
  const {
    dataPhotos,
    data,
    error,
    isLoading,
    loadMore,
    handleHome,
    handleSearch,
  } = useScollLoadMore();
  return (
    <>
      <Header onSearch={handleSearch} homePage={handleHome} />
      <div className="pageContainer">
        <div className="imgContainer">
          {dataPhotos?.map((item: Photo, index: number) => (
            <div className={"cardItem"} key={index}>
              <ImageLazy
                loading={"lazy"}
                alt={`Ảnh chụp của ${item?.photographer}`}
                imgUrl={item?.src?.medium}
                className={"imgItem"}
              />
              <div className={"nameAuthor"}>{item?.photographer}</div>
            </div>
          ))}
        </div>
        <div className={"loadMore"}>
          {error ? <p>Đã sảy ra lỗi không mong muốn</p> : null}
        </div>
        <div className={"loadMore"}>{isLoading ? <Loading /> : null}</div>
      </div>
    </>
  );
}

export default App;
