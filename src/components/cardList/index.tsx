import React from "react";
import style from "./index.module.scss";
import { HotList } from "@api/index/api";
interface Props {
  dataList: any[];
}
export default function CardList(props: Props) {
  const { dataList } = props;
  return (
    <div>
      <div className={style.col}>
        {dataList.map((item) => (
          <div key={item.id} className={style.card}>
            <img src={item.index_img} alt="" />
            <div className={style.ml20}>
              <p className={style.name}>{item.name}</p>
              <p className={style.price}>￥{item.min_price}/页起</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
