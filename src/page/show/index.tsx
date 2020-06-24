import React, { useState } from "react";
import Logo from "@/layout/logo";
import star from "@static/show/star.png";
import style from "./index.module.scss";
import CardlList from "@/components/cardList";
import classnames from "classnames";
import { Carousel, WingBlank } from "antd-mobile";
export default function A() {
  const [active, setActive] = useState(0);
  const [data] = useState(["1", "2", "3"]);
  const [slideIndex, setSlideIndex] = useState<number>(0);
  return (
    <div>
      <Logo />
      <WingBlank className={style.h550}>
        <Carousel
          autoplayInterval={40000}
          className={style["space-carousel"]}
          frameOverflow="visible"
          cellSpacing={10}
          slideWidth={0.8}
          autoplay
          infinite
          afterChange={(now) => {
            setSlideIndex(now);
            console.log(now);
          }}
        >
          {data.map((val, index) => (
            <div className={style.h400} key={val}>
              <img
                alt=""
                className={classnames(slideIndex === index ? style.active : "")}
              />
            </div>
          ))}
        </Carousel>
      </WingBlank>
      <div className={style.tabs}>
        <div className={style.tabsLeft}>
          <div
            className={classnames(active === 0 ? style.active : "", style.hot)}
          >
            最热
          </div>
          <div>最新</div>
        </div>
        <div className={style.tabsLeft}>
          <div className={active === 1 ? style.active : ""}>筛选</div>
          <div>&lt;</div>
        </div>
      </div>
      <div className={style.mt20}>
        <div className={style.titleText}>陈毅的六周岁纪念</div>
        <div className={style["flex-detail"]}>
          <div className={style.detail}>精装日历</div>
          <div className={style["detail-right"]}>
            <img src={star} alt="" />
            <p>160</p>
          </div>
        </div>
      </div>
      <div >
        <CardlList />
      </div>
    </div>
  );
}
