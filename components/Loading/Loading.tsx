/*
 * Copyright (c) 2022. Phuong My Chi Entertainment Co.,Ltd
 */
import styles from "./Loading.module.css";
import { FC } from "react";
interface LoadingProps {
  width?: string;
}
const Loading: FC<LoadingProps> = ({ width }) => {
  return (
    <div className={styles.loadingSpinner}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
export default Loading;
