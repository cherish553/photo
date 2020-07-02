import React from "react";
import style from "./index.module.scss";
import address from "@static/cart/address.png";
export default function Settlement() {
  return (
    <div>
      <div className={style.title}>
        <div className={style.titleBack}>{"<"}</div>
        地址
      </div>
      <div className={style.list}>
        {[1, 2].map((item) => (
          <div key={item} className={style.listCard}>
            <div className={style.listCardLeft}>
              <img src={address} alt="" />
              <div className={style.listCardLeftDetail}>
                <p>收件人：Mr.Mao 13223234545</p>
                <p>地址地址地址地址地址地址地址地址地址地址</p>
              </div>
            </div>
            <div className={style.listCardSelect}>默</div>
          </div>
        ))}
      </div>
      <div className={style.bottom}>
        <div className={style.bottomBtn}>新增地址</div>
      </div>
    </div>
  );
}
