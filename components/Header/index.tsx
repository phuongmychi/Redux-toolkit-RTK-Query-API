/*
 * Copyright (c) 2022. Phuong My Chi Entertainment Co.,Ltd
 */

import { Link } from "react-router-dom";
import Head from "next/head";
import { useEffect, useState } from "react";
interface HeaderProps {
  homePage: () => void;
  onSearch: (keyword: string) => void;
  title?: string;
}
export const Header: React.FC<HeaderProps> = ({
  homePage,
  onSearch,
  title,
}) => {
  const [keyword, setKeyword] = useState("");
  const handleSubmit = (e: any) => {
    if (keyword) {
      onSearch(keyword);
      return true;
    } else {
      return false;
    }
    return false;
    e.preventDefault();
  };
  useEffect(() => {
    let  input = document.getElementById("input") as HTMLInputElement;
    input.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        let btn = document.getElementById("myButton") as HTMLButtonElement;
        btn.click();
      }
    });
  }, []);
  return (
    <div className={"header"}>
      {" "}
      <Head>
        <title>{title ? title : ""}</title>
        <meta charSet="utf-8" />
      </Head>
      <div style={{ display: "flex" }}>
        <h3 onClick={homePage} style={{ cursor: "pointer" }}>
          Photos{" "}
        </h3>
        <h3 style={{ cursor: "pointer", marginLeft: "100px" }}>
          <input
            placeholder={"Tìm kiếm hình ảnh"}
            id={"input"}
            onChange={(e: any) => setKeyword(e?.target?.value)}
            type={"search"}
          />
          <button
            onClick={handleSubmit}
            id={"myButton"}
            style={{
              marginLeft: "5px",
              backgroundColor: "#4CAF50",
              border: "none",
              padding: " 10px",
              cursor: "pointer",
              borderRadius: "8px",
            }}
          >
            Tìm
          </button>
        </h3>
      </div>
    </div>
  );
};
