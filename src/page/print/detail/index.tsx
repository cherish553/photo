import React, { useState, useEffect } from "react";
import style from "./index.module.scss";
import { Carousel, Tabs, Badge } from "antd-mobile";
import { Rate } from 'antd';
const tabs = [
  { title: <Badge>产品详情</Badge> },
  { title: <Badge>制作服务</Badge> },
];
export default function Print() {
  const [dataList] = useState([]);
  return (
    <div>
      <Carousel
        dotStyle={{
          right: "10px",
          background: "#FFFFFF",
          float: "right",
        }}
        dotActiveStyle={{
          background: "#E1B963",
        }}
        autoplay={false}
        infinite
        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
        afterChange={(index) => console.log("slide to", index)}
      >
        {[1, 2, 3].map((item) => (
          <img className={style.bannerImg} src="" alt="" />
        ))}
      </Carousel>
      <div className={style.introduce}>
        <div className={style.introduceName}>手账·照片·周台历</div>
        <div className={style.introduceDescribe}>
          描述描述描述描述描述描述描述描述
        </div>
        <div className={style.introducePrice}>￥88.00/本起</div>
        <div className={style.introduceFlex}>
          <div className={style.introduceFlexBtn}>已选</div>
          <div className={style.introduceFlexChoose}>
            <div>选择1 | 选择2 | 选择3</div>
            <div className={style.rightIcon}>{">"}</div>
          </div>
        </div>
      </div>
      <div className={style.userComment}>
        <div className={style.userCommentTitle}>
          <div>用户评价(234)</div>
          <div className={style.rightIcon}>{">"}</div>
        </div>
        <div className={style.userCommentList}>
          <div className={style.userCommentListStar}>
            <div className={style.userCommentListStarRate}>4.5</div>
            <Rate allowHalf defaultValue={2.5} />
          </div>
          <div className={style.userCommentListUser}>
            <img src="" alt="" />
            <p>用户</p>
          </div>
          <div className={style.userCommentListSelect}>
            <div className={style.userCommentListSelectSpec}>
              选择1 | 选择2 | 选择3
            </div>
            <div className={style.userCommentListSelectStar}><Rate allowHalf defaultValue={2.5} /></div>
          </div>
          <div className={style.userCommentListComment}>
            评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价
          </div>
        </div>
      </div>
      <div className={style.tabs}>
        <div className={style.tabsInner}>
          <Tabs
            tabs={tabs}
            initialPage={1}
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
                backgroundColor: "#fff",
              }}
            >
              Content of first tab
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "150px",
                backgroundColor: "#fff",
              }}
            >
              Content of second tab
            </div>
          </Tabs>
        </div>
      </div>
      <div className={style.pay}>
        <div className={style.payPrice}>￥88.00</div>
        <div className={style.payBtn}>开始制作</div>
      </div>
    </div>
  );
}
