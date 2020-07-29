import React, { useEffect, useState } from "react";
import TopTitle from "@/components/topTitle";
import style from "./index.module.scss";
import back from "@static/common/back.png";
import { getShareInfo as GetShareInfo } from "@api/user";
export default function Works() {
  useEffect(() => {
    getShareInfo();
  }, []);
  const getShareInfo = async () => {
    const data = await GetShareInfo();
    setForm(data)
  };
  const [form, setForm] = useState({
    children: "",
    id: "",
    total_commission: "",
  });
  return (
    <div>
      <TopTitle title="邀请有礼" />
      <div className={style.card}>
        <div className={style.cardLeft}>
          <p>邀请收入</p>
          <p>￥{form.total_commission}</p>
        </div>
        <div className={style.cardRight}>
          <p>邀请人数</p>
          <p>{form.children}</p>
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
