import React from "react";
import style from "./index.module.scss";
import back from "@static/common/back.png";
interface Props {
  title: string;
}
export default function Logo(props: Props) {
  const { title } = props;
  return (
    <div className={style.title}>
      <img className={style.titleBack} src={back} alt="" />
      {title}
    </div>
  );
}
