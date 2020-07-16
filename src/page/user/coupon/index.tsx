import React from "react";
import style from "./index.module.scss";
import TopTitle from "@/components/topTitle";
import New from "@static/user/coupon/new.png";
import used from "@static/user/coupon/used.png";
import overdue from "@static/user/coupon/overdue.png";
import { Tabs, Badge } from "antd-mobile";
export default function Coupon() {
  const tabs = [
    { title: <Badge>未使用</Badge> },
    { title: <Badge>已使用</Badge> },
    { title: <Badge>已过期</Badge> },
  ];
  return (
    <div>
      <TopTitle title="我的优惠券" />
      <Tabs tabs={tabs} initialPage={0}>
        <div className={style.list}>
          <div className={style.listCard}>
            <div className={style.listCardLeft}>
              <p>￥ 2.00</p>
              <p>满88元可用</p>
            </div>
            <div className={style.listCardDetail}>
              <div className={style.listCardDetailTop}>
                <p>全类型商品可用</p>
                <p>2019-10-01 ~ 2019-12-31</p>
              </div>
              <div className={style.listCardDetailBottom}>
                <div className={style.listCardDetailBottomBtn}>去使用</div>
              </div>
            </div>
          </div>
        </div>
        <div>Content of second tab</div>
        <div>Content of third tab</div>
      </Tabs>
      {/* {[1, 2, 3].map((item) => (
        <div key={item} className={style.card}>
          <div>
            <p>￥ 2.00</p>
            <p>满88元可用</p>
          </div>
          <div>
            <div>
              <p>全类型商品可用</p>
              <p>2019-10-01 ~ 2019-12-31</p>
            </div>
            <div>
              <div>去使用</div>
            </div>
          </div>
        </div>
      ))} */}
    </div>
  );
}
