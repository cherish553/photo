import React from "react";
import style from "./index.module.scss";
import address from "@static/cart/address.png";
import payMethod from "@static/cart/payMethod.png";
export default function Settlement() {
  return (
    <div>
      <div className={style.title}>
        <div className={style.titleBack}>{"<"}</div>
        结算
      </div>
      <div className={style.address}>
        <div className={style.left}>
          <img className={style.addressIcon} src={address} alt="" />
          <div className={style.addressInner}>
            <div className={style.addressInnerUser}>
              收件人：Mr.Mao 13223234545
            </div>
            <div className={style.addressInnerDetail}>
              地址地址地址地址地址地址地址地址地址地址
            </div>
          </div>
        </div>
        <div className={style.addressBack}>{">"}</div>
      </div>
      <div className={style.good}>
        <div className={style.goodTop}>
          <img className={style.goodTopImg} src="" alt="" />
          <div className={style.goodTopDetail}>
            <div>手账·照片·周台历</div>
            <div>商品标题</div>
            <div>规格1 | 规格2</div>
            <div>
              <div>￥88.00</div>
              <div>x1</div>
            </div>
          </div>
        </div>
        <div className={style.goodComment}>
          <p>备注：</p>
          <input type="text" />
        </div>
        <div className={style.goodPay}>
          <div>支付金额</div>
          <div>￥88.00</div>
        </div>
      </div>
      <div className={style.list}>
        {[
          {
            title: "优惠券",
            value: "￥2.00",
          },
          {
            title: "快递公司",
            value: "申通快递",
          },
        ].map((item, index) => (
          <div className={style.listCard} key={index}>
            <div>{item.title}</div>
            <div>{item.value}</div>
          </div>
        ))}
      </div>
      <div className={style.payMethod}>
        <div className={style.payMethodLeft}>
          <img src={payMethod} alt="" />
          <div className={style.payMethodLeftInner}>
            <p>微信支付</p>
            <p>推荐已在微信中绑定银行卡的用户使用</p>
          </div>
        </div>
        <div>{">"}</div>
      </div>
      <div className={style.pay}>
        <div className={style.payLeft}>
          <p>合计</p>
          <p>￥88.00</p>
        </div>
        <div className={style.payBtn}>去结算</div>
      </div>
    </div>
  );
}
