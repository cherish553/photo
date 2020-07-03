import React from "react";
import style from "./index.module.scss";
import { Progress } from "antd-mobile";
import { Rate } from "antd";
import TopTitle from "@/components/topTitle";
export default function printDeaitalComment() {
  return (
    <div>
      <TopTitle title="商品评价" />
      <div className={style.rate}>
        <div className={style.rateLeft}>
          <div className={style.rateLeftScore}>4.8</div>
          <div>
            <Rate allowHalf defaultValue={2.5} />
          </div>
          <div className={style.rateLeftCount}>233个评价</div>
        </div>
        <div className={style.rateRight}>
          {[1, 2, 3, 4, 5].map((item) => (
            <div className={style.rateRightFlex}>
              <p className={style.rateRightFlexCount}>5</p>
              <Progress
                className={style.rateRightProgress}
                key={item}
                percent={40}
                position="normal"
                unfilled={true}
                appearTransition
              />
            </div>
          ))}
        </div>
      </div>
      <div className={style.list}>
        {[1, 2, 3].map((item) => (
          <div className={style.card}>
            <div className={style.cardUser}>
              <div className={style.cardUserAvatar}></div>
              <div className={style.cardUserName}>用户</div>
            </div>
            <div className={style.cardSelect}>
              <div>选择1 | 选择2 | 选择3</div>
              <Rate allowHalf defaultValue={2.5} />
            </div>
            <div className={style.cardComment}>
              评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
