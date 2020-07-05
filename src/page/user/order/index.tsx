import React from "react";
import TopTitle from "@/components/topTitle";
import style from "./index.module.scss";
import { Tabs, Badge } from "antd-mobile";

export default function Works() {
  const tabs = [
    { title: <Badge>全部</Badge> },
    { title: <Badge>待付款</Badge> },
    { title: <Badge>待发货</Badge> },
    { title: <Badge>待收货</Badge> },
    { title: <Badge>待评价</Badge> },
  ];
  return (
    <div>
      <TopTitle title="我的订单" />
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
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "150px",
          }}
        >
          <div className={style.card}>
            <div className={style.cardStatus}>
              <p>2019-12-12</p>
              <p>待发货</p>
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
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "150px",
          }}
        >
          Content of second tab
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "150px",
          }}
        >
          Content of third tab
        </div>
      </Tabs>
    </div>
  );
}
