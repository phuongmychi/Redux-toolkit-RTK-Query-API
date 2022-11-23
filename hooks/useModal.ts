/*
 * Copyright (c) 2022. Phuong My Chi Entertainment Co.,Ltd
 */

import { useCallback, useState } from "react";

const useModal = () => {
  const [isShowModal, setIshowModal] = useState(false);
  const [itemData, setItemData] = useState<any>({});

  const toggleShowModal = useCallback((item:any) => {
    setIshowModal(!isShowModal);
    setItemData(item)
  }, [isShowModal, setIshowModal]);
  return {
    toggleShowModal,
    isShowModal,
    itemData

  };
};
export default useModal;
