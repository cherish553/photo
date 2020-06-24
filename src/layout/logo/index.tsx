import React from "react";
import logo from "@static/logo/logo.jpg";
import style from "./index.module.scss";
export default function Logo() {
  return <img src={logo} className={style.logo} alt="" />;
}
