/*
 * Copyright (c) 2022. Phuong My Chi Entertainment Co.,Ltd
 */

import { FC } from "react";
import styles from "./Button.module.css";
interface ButtonProps {
  onClick?: () => void;
  type?: "submit" | "reset" | "button";
  buttonText: string;
}
const Button: FC<ButtonProps> = ({ onClick, type, buttonText }) => {
  return (
    <button type={type} onClick={onClick} className={styles.button}>
      {buttonText}
    </button>
  );
};
export default Button;