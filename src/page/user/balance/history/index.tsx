import React from "react";
import style from "./index.module.scss";
import TopTitle from "@/components/topTitle";
import { Tabs, Badge } from "antd-mobile";

export default function Coupon() {
  const tabs = [
    { title: <Badge>近一月</Badge> },
    { title: <Badge>近半年</Badge> },
    { title: <Badge>近一年</Badge> },
  ];
  return (
    <div>
      <TopTitle title="历史收入" />
      <Tabs
        tabs={tabs}
        initialPage={0}
        onChange={(tab, index) => {
          console.log("onChange", index, tab);
        }}
        onTabClick={(tab, index) => {
          console.log("onTabClick", index, tab);
        }}
      >
        <div>
          <p className={style.date}> 2019-12</p>
          <div className={style.list}>
            {[1, 2].map((item) => (
              <div className={style.listCard} key={item}>
                <p className={style.listCardPrice}>￥1.00</p>
                <div className={style.listCardBottom}>
                  <p>来自朋友：chrimer</p>
                  <p>2020-1-1</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div></div>
        <div></div>
      </Tabs>
    </div>
  );
}
