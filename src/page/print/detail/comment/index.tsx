import React from "react";
import style from "./index.module.scss";
export default function printDeaitalComment() {
  return (
    <div>
      <div className={style.title}>
        <div className={style.titleBack}>{"<"}</div>
        商品评价
      </div>
      <div></div>
      <div></div>
    </div>
  );
}
