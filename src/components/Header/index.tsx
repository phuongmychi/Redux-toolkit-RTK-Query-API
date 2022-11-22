/*
 * Copyright (c) 2022. Phuong My Chi Entertainment Co.,Ltd
 */

import { Link } from "react-router-dom";
import React from "react";

interface HeaderProps {
  homePage: () => void;
  onSearch: (keyword: string) => void;
}
export const Header: React.FC<HeaderProps> = ({ homePage, onSearch }) => {
  function refreshPage() {
    setTimeout(() => {
      window.location.reload();
    }, 500);
  }
  return (
    <div className={"header"}>
      {" "}
      <div style={{ display: "flex" }}>
        <h3 onClick={homePage} style={{ cursor: "pointer" }}>
          Redux toolkit RTK Query API{" "}
        </h3>
        <h3 style={{ cursor: "pointer", marginLeft: "100px" }}>
          <input
              placeholder={"Search a photos"}
            style={{
              padding: "8px",
              width: "100%",
              borderRadius: "8px",
              border: "blue solid ",
            }}
            onChange={(e: any) => onSearch(e?.target?.value)}
            type={"text"}
          />
        </h3>
      </div>
    </div>
  );
};
