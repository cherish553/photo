import React from "react";
import style from "./index.module.scss";
interface Props{
    
}
export default function CardList(props:Props) {
  return (
    <div>
      {[1, 2, 3].map((item) => (
        <div key={item} className={style.col}>
          <div className={style.card}>
            <img src="" alt="" />
            <div className={style.ml20}>
              <p className={style.name}>微信书</p>
              <p className={style.price}>￥0.7/页起</p>
            </div>
          </div>
          <div className={style.card}>
            <img src="" alt="" />
            <div className={style.ml20}>
              <p className={style.name}>微信书</p>
              <p className={style.price}>￥0.7/页起</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
