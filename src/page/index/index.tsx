import React, { useState, useEffect } from "react";
import style from "./index.module.scss";
import { Carousel, WingBlank } from "antd-mobile";
import Logo from "@/layout/logo";
import classnames from "classnames";
import CardList from "@/components/cardList";
import { getIndex as GetIndex } from "@api/index";
import { BannerList, HotList } from "@api/index/api";
export default function Index() {
  // const [imgHeight, setImgHeight] = useState<number | string>(176);
  const [slideIndex, setSlideIndex] = useState<number>(0);
  const [bannerList, setBannerList] = useState<BannerList[]>([]);
  const [hotList, setHotList] = useState<HotList[]>([]);
  useEffect(() => {
    getIndex();
  }, []);
  const getIndex = async () => {
    let { bannerList, hotList } = await GetIndex();
    setBannerList(bannerList);
    setHotList(hotList);
  };
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
          }}
        >
          {bannerList.map((item, index) => (
            <div className={style.h400} key={item.id}>
              <img
                alt=""
                src={item.img_url}
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
        <CardList dataList={hotList} />
      </div>
    </div>
  );
}
