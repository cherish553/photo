import React from "react";
import style from "./index.module.scss";
import TopTitle from "@/components/topTitle";
import { Upload } from "antd";
export default function afterSale() {
  return (
    <div>
      <TopTitle title="售后" />
      <div className={style.card}>
        <div className={style.cardStatus}>
          <p>2019-12-12</p>
          <p>退货退款</p>
        </div>
        <div className={style.cardDetail}>
          <img src="" alt="" />
          <div className={style.cardDetailRight}>
            <p>《手账·照片》</p>
            <p>232323333</p>
            <p>￥88.88</p>
          </div>
        </div>
      </div>
      <div className={style.comment}>
        <p>填写售后说明</p>
        <input type="text" />
      </div>
      <div className={style.submit}>
        <div>提交</div>
      </div>
    </div>
  );
}
