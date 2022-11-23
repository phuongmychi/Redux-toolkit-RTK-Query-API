/*
 * Copyright (c) 2022. Phuong My Chi Entertainment Co.,Ltd
 */

import ImageLazy from "../components/ImageLazy";
import Loading from "../components/Loading";
import { Header } from "../components/Header";
import { useScollLoadMore } from "../hooks";
import { Photo } from "../components/Type/photoType";
import { useGetImageByNameQuery } from "../redux/service";
import axios from "axios";
import Head from "next/head";
import {GetServerSideProps} from "next";
export const removeDuplicate = (arr: []) => {
  const resp = arr
    ? arr?.filter((v, i, a) => a.findIndex((t: {}) => t === v) === i)
    : [];
  return resp;
};
interface AppProp {
  dataprops: [];
}
function App({ dataprops }: AppProp) {
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

      <Header
        title={"Photo Page "}
        onSearch={handleSearch}
        homePage={handleHome}
      />
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

// export const getServerSideProps: GetServerSideProps<{
//   dataprops: {};
// }> = async ({ res }) => {
//   res.setHeader(
//       "Cache-Control",
//       "public, s-maxage=10, stale-while-revalidate=59"
//   );
//   const data = await axios.get("https://api.phuongmychi.vn/v1/photos?query=nature&page=1");
//   let dataprops = data.data;
//   return {
//     props: { dataprops },
//   };
// };

export default App;
