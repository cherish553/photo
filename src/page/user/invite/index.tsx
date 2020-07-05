import React from "react";
import TopTitle from "@/components/topTitle";
import style from "./index.module.scss";
import back from "@static/common/back.png";
export default function Works() {
  return (
    <div>
      <TopTitle title="邀请有礼" />
      <div className={style.card}>
        <div className={style.cardLeft}>
          <p>邀请收入</p>
          <p>￥0.00</p>
        </div>
        <div className={style.cardRight}>
          <p>邀请人数</p>
          <p>12</p>
        </div>
      </div>
      <div className={style.code}>
        <p>我的邀请码</p>
        <p>MV39CDJC85</p>
      </div>
      <div className={style.share}>
        <p>生成邀请函并分享至微信</p>
        <img src={back} className="go" alt="" />
      </div>
    </div>
  );
}
