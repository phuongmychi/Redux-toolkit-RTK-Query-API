/*
 * Copyright (c) 2022. Phuong My Chi Entertainment Co.,Ltd
 */

/*
 * Copyright (c) 2022. Phuong My Chi Entertainment Co.,Ltd
 */

import React from "react";
import ImageLazy from "../components/ImageLazy";
import Loading from "../components/Loading";
import { Header } from "../components/Header";
import { useScollLoadMore } from "../hooks";
import { Photo } from "../components/Type/photoType";
import Head from "next/head"

export const removeDuplicate = (arr: []) => {
  const resp = arr
    ? arr?.filter((v, i, a) => a.findIndex((t: {}) => t === v) === i)
    : [];
  return resp;
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
      <Header title={"Photo Page "} onSearch={handleSearch} homePage={handleHome} />
      <div className="pageContainer">
        <div className="imgContainer">
          {dataPhotos?.map((item: Photo, index: number) => (
            <div className={"cardItem"} key={index}>
              <ImageLazy
                loading={"lazy"}
                alt={`${item?.alt} `}
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
