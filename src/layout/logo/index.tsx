import React from "react";
import logo from "@static/logo/logo.jpg";
import style from "./index.module.scss";
export default function Logo() {
  return (
    <div className={style.white}>
      <img src={logo} className={style.logo} alt="" />
    </div>
  );
}
