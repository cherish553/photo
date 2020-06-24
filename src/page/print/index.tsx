import React, { useState } from "react";
import style from "./index.module.scss";
import classnames from "classnames";
import Logo from "@/layout/logo";
import search from "@static/print/search.png";
import CardList from "@/components/cardList";
export default function Print() {
  const [selectIndex, setSelectIndex] = useState(0);
  const [tabs, setTabs] = useState(true);
  const [searchValue, setSearchValue] = useState("");

  const changeSearch = () => {};
  return (
    <div>
      <Logo></Logo>
      {tabs && (
        <div className={style["search-tabs"]}>
          <>
            <div className={style.tabs}>
              {Array.from({ length: 20 }).map((_item, index) => (
                <div
                  onClick={() => setSelectIndex(index)}
                  className={classnames(
                    style["tabs-detail"],
                    selectIndex === index ? style.active : ""
                  )}
                >
                  {index}
                </div>
              ))}
            </div>
            <div>
              <img
                onClick={() => setTabs(false)}
                className={style["search-icon"]}
                src={search}
                alt=""
              />
            </div>
          </>
        </div>
      )}
      {!tabs && (
        <div className={style["search-dev"]}>
          <input
            onChange={(e) => setSearchValue(e.target.value)}
            value={searchValue}
            className={style["search-input"]}
          />
          <img className={style["search-icon1"]} src={search} alt="" />
        </div>
      )}
      <div className={style.cardList}>
        <CardList />
      </div>
    </div>
  );
}
