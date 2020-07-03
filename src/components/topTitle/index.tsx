import React from "react";
import style from "./index.module.scss";
interface Props {
  title: string;
}
export default function Logo(props: Props) {
  const { title } = props;
  return (
    <div className={style.title}>
      <div className={style.titleBack}>{"<"}</div>
      {title}
    </div>
  );
}
