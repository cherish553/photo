import React from "react";
import style from "./index.module.scss";
import back from "@static/common/back.png";
interface Props {
  src: string;
  inner: string;
  line?: boolean;
}
export default function List(props: Props) {
  const { src, inner, line } = props;
  return (
    <div>
      <div className={style.list}>
        <div className={style.left}>
          <img src={src} alt="" />
          <p>{inner}</p>
        </div>
        <img src={back} className='go' alt=""/>
      </div>
      {line && <div className={style.line}></div>}
    </div>
  );
}
