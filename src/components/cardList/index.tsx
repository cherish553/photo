import React from "react";
import style from "./index.module.scss";
import { HotList } from "@api/index/api";
import { useHistory } from "react-router-dom";
interface Props {
  dataList: any[];
}
export default function CardList(props: Props) {
  const router = useHistory();
  const { dataList } = props;
  const navigateToDetail = (id: string) => {
    router.push({
      pathname: "/printDetail",
      search: `?id=${id}`,
    });
  };
  return (
    <div>
      <div className={style.col}>
        {dataList.map((item) => (
          <div key={item.id} className={style.card}>
            <img
              onClick={() => navigateToDetail(item.id)}
              src={item.index_img}
              alt=""
            />
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
