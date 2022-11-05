/*
 * Copyright (c) 2022. Phuong My Chi Entertainment Co.,Ltd
 */

import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useGetImageByNameQuery } from "./redux/service";
import ImageLazy from "./components/ImageLazy";

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

  const config = {
    name: "girl",
    page: 1,
  };

  const { data, error, isLoading } = useGetImageByNameQuery(config);
  if (error) {
    return <div className="pageContainer">Error</div>;
  } else if (isLoading) {
    return <div className="pageContainer">Loading page</div>;
  } else {
    return (
      <>
        <div className={"header"}>
          <h3>Redux toolkit RTK Query API </h3>

        </div>
        <div className="pageContainer">

          <div className="imgContainer">

            {data?.photos?.map((item: Photo) => (
                <div className={"cardItem"} key={item?.id}>
                  <ImageLazy imgUrl={item?.src?.medium} className={"imgItem"} />
                  <div className={"nameAuthor"}>
                    {item?.photographer}
                  </div>
                </div>
            ))}
          </div>
        </div>

      </>
    );
  }
}

export default App;
