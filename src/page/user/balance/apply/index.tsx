import React from "react";
import style from "./index.module.scss";
import TopTitle from "@/components/topTitle";

export default function Coupon() {
  return (
    <div>
      <TopTitle title="申请提现" />
      <div className={style.detail}>
        <p className={style.detailTitle}>提现金额</p>
        <div className={style.detailPrice}>
          <p>￥</p>
          <input type="text" />
        </div>
        <div className={style.detailLine}></div>
        <div className={style.detailApply}>
          <p>可用余额 0.00元</p>
          <p>全额提现</p>
        </div>
      </div>
      <div className={style.bottom}>
        <div className={style.bottomBtn}>提交申请</div>
      </div>
    </div>
  );
}
