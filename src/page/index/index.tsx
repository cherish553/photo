import React, { useState } from "react";
import style from "./index.module.scss";
import { Carousel, WingBlank, Flex } from "antd-mobile";
import Logo from "@/layout/logo";
import classnames from "classnames";
export default function Index() {
  const [data] = useState(["1", "2", "3"]);
  const [imgHeight, setImgHeight] = useState<number | string>(176);
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
      <div className={style.title}>
        <p>热销产品</p>
        <span></span>
      </div>
      <div className={style.w100}>
        {[1, 2, 3].map((item) => (
          <div key={item} className={style.col}>
            <div className={style.card}>
              <img src="" alt="" />
              <div className={style.ml20}>
                <p className={style.name}>微信书</p>
                <p className={style.price}>￥0.7/页起</p>
              </div>
            </div>
            <div className={style.card}>
              <img src="" alt="" />
              <div className={style.ml20}>
                <p className={style.name}>微信书</p>
                <p className={style.price}>￥0.7/页起</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
