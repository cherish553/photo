import React from "react";
import style from "./index.module.scss";
import TopTitle from "@/components/topTitle";
import bgi from "@static/user/balance/bgi.png";
import back from "@static/common/back.png";
export default function Coupon() {
  return (
    <div>
      <TopTitle title="我的余额" />
      <div className={style.detail}>
        <img src={bgi} alt="" />
        <div className={style.detailInner}>
          <div className={style.detailInnerLeft}>
            <p>￥0.00</p>
            <p>我的余额</p>
          </div>
          <div className={style.detailInnerRight}>
            <div>
              <p>本月收入</p>
              <p>￥0.00</p>
            </div>
            <div>
              <p>总收入</p>
              <p>￥0.00</p>
            </div>
          </div>
        </div>
      </div>
      <div className={style.list}>
        {["历史收入", "提现记录"].map((item) => (
          <div className={style.listCard}>
            <p>{item}</p>
            <img src={back} className="go" alt="" />
          </div>
        ))}
      </div>
      <div className={style.apply}>
        <div className={style.applyBtn}>申请提现</div>
      </div>
    </div>
  );
}
