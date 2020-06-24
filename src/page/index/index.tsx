import React, { useState } from "react";
import style from "./index.module.scss";
import { Carousel, WingBlank } from "antd-mobile";
import Logo from "@/layout/logo";
import classnames from "classnames";
import CardList from '@/components/cardList'
export default function Index() {
  const [data] = useState(["1", "2", "3"]);
  // const [imgHeight, setImgHeight] = useState<number | string>(176);
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
        <CardList/>
      </div>
    </div>
  );
}
