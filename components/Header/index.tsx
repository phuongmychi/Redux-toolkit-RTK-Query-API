/*
 * Copyright (c) 2022. Phuong My Chi Entertainment Co.,Ltd
 */

import { Link } from "react-router-dom";
import Head from "next/head";
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
  return (
    <div className={"header"}>
      {" "}
      <Head>
        <title>{title ? title : ""}</title>
        <meta charSet="utf-8"/>
      </Head>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <h3 onClick={homePage} style={{ cursor: "pointer" }}>
          Photos{" "}
        </h3>
        <h3 style={{ cursor: "pointer", marginLeft: "100px" }}>
          <input
            placeholder={"Search a photos"}
            id={"input"}
            onChange={(e: any) => onSearch(e?.target?.value)}
            type={"search"}
          />
        </h3>
      </div>
    </div>
  );
};
