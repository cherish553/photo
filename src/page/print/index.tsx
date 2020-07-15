import React, { useState, useEffect, useRef, RefObject } from "react";
import style from "./index.module.scss";
import classnames from "classnames";
import Logo from "@/layout/logo";
import search from "@static/print/search.png";
import CardList from "@/components/cardList";
import {getGoodsList as GetGoodsList} from '@api/print'
export default function Print() {
  const inputRef = useRef<any>();
  const [selectIndex, setSelectIndex] = useState(0);
  const [tabs, setTabs] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const toggleTabs = (e: Event) => {
    window.removeEventListener("click", toggleTabs);
    setTabs(true);
  };
  useEffect(() => {
    if (inputRef.current && !tabs) {
      inputRef.current.focus();
    }
  }, [tabs]);
  useEffect(()=>{
    getGoodsList()
  },[])
  const getGoodsList=async ()=>{
    const data = await GetGoodsList()
    console.log(data)
  }
  const changeSearch = () => {};
  return (
    <div>
      <Logo></Logo>
      {(tabs && (
        <div className={style["search-tabs"]}>
          <div className={style.tabs}>
            {Array.from({ length: 20 }).map((_item, index) => (
              <div
                key={index}
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
              onClick={() => {
                console.log(123);
                setTabs(false);
                setTimeout(
                  () => window.addEventListener("click", toggleTabs),
                  0
                );
              }}
              className={style["search-icon"]}
              src={search}
              alt=""
            />
          </div>
        </div>
      )) || (
        <div
          onClick={(e) => e.stopPropagation()}
          className={style["search-dev"]}
        >
          <input
            ref={inputRef}
            onChange={(e) => setSearchValue(e.target.value)}
            value={searchValue}
            className={style["search-input"]}
          />
          <img className={style["search-icon1"]} src={search} alt="" />
        </div>
      )}
      <div className={style.cardList}>
        {/* <CardList /> */}
      </div>
    </div>
  );
}
