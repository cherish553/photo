import React, { MouseEventHandler } from "react";
import style from "./index.module.scss";
import back from "@static/common/back.png";
import { useHistory } from "react-router-dom";
interface Props {
  src: string;
  inner: string;
  line?: boolean;
  url?: string;
}
export default function List(props: Props) {
  const { src, inner, line, url } = props;
  const router = useHistory();
  function jumpToPage(url: string|undefined) {
    if(!url) return
    router.push(url);
  }
  return (
    <div onClick={() => jumpToPage(url)}>
      <div className={style.list}>
        <div className={style.left}>
          <img src={src} alt="" />
          <p>{inner}</p>
        </div>
        <img src={back} className="go" alt="" />
      </div>
      {line && <div className={style.line}></div>}
    </div>
  );
}
