/*
 * Copyright (c) 2022. Phuong My Chi Entertainment Co.,Ltd
 */
import { FC } from "react";
import styles from "./Modal.module.css";
import { ImageLazy } from "../index";
import {Photo} from "../Type/photoType";

interface ModalProp {
  toggleShowModal: (item: any) => void;
  item: Photo;
}
const Modal: FC<ModalProp> = ({ toggleShowModal, item }) => {
  return (
    <div id="myModal" className={styles.modal}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <span
            onClick={() => {
              toggleShowModal({});
            }}
            className={styles.close}
          >
            &times;
          </span>
          <h2>Hình ảnh : {item?.id}</h2>
        </div>
        <div className={styles.modalBody}>
          <ImageLazy imgUrl={item?.src?.large} style={{width:'100%',height:'max-content'}} />
          <p>{item?.alt}</p>
          <p>{`Tác giả : ${item?.photographer}`}</p>

        </div>
        {/*<div className={styles.modalFooter}>*/}
        {/*  <h3>Modal Footer</h3>*/}
        {/*</div>*/}
      </div>
    </div>
  );
};
export default Modal;
