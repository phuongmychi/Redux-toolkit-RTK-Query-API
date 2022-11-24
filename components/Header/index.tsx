/*
 * Copyright (c) 2022. Phuong My Chi Entertainment Co.,Ltd
 */

import { Link } from "react-router-dom";
import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "./Header.module.css"
interface HeaderProps {
  homePage: () => void;
  onSearch: (keyword: string) => void;
  title?: string;
}
 const Header: React.FC<HeaderProps> = ({
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
    <div className={styles.header}>
      {" "}
        <Head>
            <title>Photos Free 4K, FULL HD</title>
            <meta content={`Tìm kiếm và tải xuống Hình ảnh miễn phí`} name="description" />
            <meta content={`Hình ảnh miễn phí, tải xuống hình ảnh miễn phí Full HD, 4K`} name="keywords" />
            <meta property="og:type" content="article" />
            <meta property="og:url" content="https://phuongmychi.vn" />


            <meta name="language" content="Vietnamese" />
            <meta name="googlebot" content="index,follow" />
            <meta name="theme-color" content="#000000" />
            <link rel="apple-touch-icon" href="/img/logo192.png" />
            <link rel="manifest" href="/manifest.json" />
            <link rel="icon" href="/favicon.ico" />
            <meta httpEquiv="content-language" content="vi" />
            <meta
                name="viewport"
                content="width=device-width, height=device-height, maximum-scale=1.0, initial-scale=1.0, user-scalable=no;user-scalable=0;"
            />
        </Head>
      <div style={{ display: "flex" }}>
        <h3 onClick={homePage} style={{ cursor: "pointer" }}>
          Photos{" "}
        </h3>
        <h3 style={{ cursor: "pointer"}}>
            <div className={styles.inputSearch}>
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
            </div>

        </h3>
      </div>
    </div>
  );
};
export default Header