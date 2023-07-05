/*
 * Copyright (c) 2022. Phuong My Chi Entertainment Co.,Ltd
 */

import { Header, ImageLazy, Loading, Modal } from "components";
import { useModal, useScollLoadMore } from "hooks";
import { photoType, photoDefault } from "type";

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
  const { toggleShowModal, isShowModal, itemData } = useModal();
  return (
    <>
      <Header
        title={"Photo Page "}
        onSearch={handleSearch}
        homePage={handleHome}
      />
      <div className="pageContainer">
        <div className="imgContainer">
          {dataPhotos?.map((item: photoType, index: number) => (
            <div className={"cardItem"} key={index}>
              <img
                loading={"lazy"}
                alt={`${item?.alt} `}
                src={item?.src?.medium}
                onClick={() => {
                  toggleShowModal(item);
                }}
                className={"imgItem"}
              />
              <div className={"nameAuthor"}>{item?.photographer}</div>
            </div>
          ))}
        </div>
        <div className={"loadMore"}>
          {error ? <p>Đã sảy ra lỗi không mong muốn</p> : null}
        </div>
        {isShowModal ? (
          <Modal
            item={itemData || photoDefault}
            toggleShowModal={toggleShowModal}
          />
        ) : null}

        <div className={"loadMore"}>{isLoading ? <Loading /> : null}</div>
      </div>
    </>
  );
}

export default App;
