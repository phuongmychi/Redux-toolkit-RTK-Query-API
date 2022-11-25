/*
 * Copyright (c) 2022. Phuong My Chi Entertainment Co.,Ltd
 */
/*
 * Copyright (c) 2022. Phuong My Chi Entertainment Co.,Ltd
 */
import { useCallback, useState } from "react";
import { photoDefault, photoType } from "type";

const useModal = () => {
  const [isShowModal, setIshowModal] = useState<boolean>(false);
  const [itemData, setItemData] = useState<photoType>(photoDefault);

  const toggleShowModal = useCallback(
    (item: photoType) => {
      setIshowModal(!isShowModal);
      setItemData(item);
    },
    [isShowModal, setIshowModal]
  );
  return {
    toggleShowModal,
    isShowModal,
    itemData,
  };
};
export default useModal;
