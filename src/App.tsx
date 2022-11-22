/*
 * Copyright (c) 2022. Phuong My Chi Entertainment Co.,Ltd
 */

import React, { useCallback, useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  useGetImageByNameQuery,
  useLazyGetImageByNameQuery,
} from "./redux/service";
import ImageLazy from "./components/ImageLazy";
import Loading from "./components/Loading";
import { Link } from "react-router-dom";
import {Header} from "./components/Header";

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
  const [page, setPage] = useState(1);

  const config = {
    name: "nature",
    page: page,
  };

  const { data, error, isLoading } = useGetImageByNameQuery(config);
  const [trigger] = useLazyGetImageByNameQuery();
  const [dataPhotos, setDataPhotos] = useState<any>([]);
  useEffect(() => {
    const fetchApi = async () => {
      const result = await trigger({
        name: "nature",
        page: 1,
      }).refetch();
      setDataPhotos(result?.data?.photos || []);
    };
    fetchApi();
  }, [trigger]);
  const loadMore = useCallback(() => {
    setPage(page + 1);
    setDataPhotos(dataPhotos.concat(...(data?.photos || [])));
  }, [page, dataPhotos, setDataPhotos, setPage]);

  const handleHome = async () => {
    setDataPhotos([]);
    const result = await trigger({
      name: "nature",
      page: 1,
    }).refetch();
    if (result?.data) {
      setDataPhotos(result?.data?.photos || []);
    }
  };

  useEffect(() => {
    function handleScrollEvent() {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        loadMore();
        // here add more items in the 'filteredData' state from the 'allData' state source.
      }
    }

    window.addEventListener('scroll', handleScrollEvent)

    return () => {
      window.removeEventListener('scroll', handleScrollEvent);
    }
  }, [loadMore])

  return (
    <>
      <Header homePage={handleHome}/>
      <div className="pageContainer">
        <div className="imgContainer">
          {dataPhotos?.map((item: Photo) => (
            <div className={"cardItem"} key={item?.id}>
              <ImageLazy imgUrl={item?.src?.medium} className={"imgItem"} />
              <div className={"nameAuthor"}>{item?.photographer}</div>
            </div>
          ))}
        </div>
        <div className={"loadMore"}>{error ? <p>Đã sảy ra lỗi không mong muốn</p>: null}</div>
        <div className={"loadMore"}>{isLoading ? <Loading /> : null}</div>

      </div>
    </>
  );
}

export default App;
