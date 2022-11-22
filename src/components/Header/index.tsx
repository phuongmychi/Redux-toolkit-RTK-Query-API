/*
 * Copyright (c) 2022. Phuong My Chi Entertainment Co.,Ltd
 */

import { Link } from "react-router-dom";
import React from "react";

interface HeaderProps {
  homePage: () => void;
}
export const Header: React.FC<HeaderProps> = ({ homePage }) => {
  function refreshPage() {
    setTimeout(() => {
      window.location.reload();
    }, 500);
  }
  return (
    <div className={"header"}>
      {" "}
      <h3 onClick={homePage} style={{ cursor: "pointer" }}>
        Redux toolkit RTK Query API{" "}
      </h3>
    </div>
  );
};
