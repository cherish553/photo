import React, { useState, useRef, useEffect } from "react";
import Logo from "@/layout/logo";
import star from "@static/show/star.png";
import style from "./index.module.scss";
import CardlList from "@/components/cardList";
import classnames from "classnames";
import { Carousel, WingBlank } from "antd-mobile";
import { Refs } from "./components/modal/declare";
import Modal from "./components/modal";
import { getWorkList as GetWorkList } from "@api/show";
import { getIndex as GetIndex } from "@api/index";
import { BannerList, HotList, IndexData } from "@api/index/api";
export default function A() {
  const [slideIndex, setSlideIndex] = useState<number>(0);
  const [bannerList, setBannerList] = useState<BannerList[]>([]);
  useEffect(() => {
    getIndex();
  }, []);

  const [dataList, setDataList] = useState<
    Pick<IndexData, "newList" | "hotList">
  >({
    hotList: [],
    newList: [],
  });
  const getIndex = async () => {
    let { bannerList, ...rest } = await GetIndex();
    setBannerList(bannerList);
    setDataList({ ...rest });
  };
  const Ref = useRef<Refs>();
  const [active, setActive] = useState(0);
  useEffect(() => {
    // active;
  }, [active]);
  const [data] = useState(["1", "2", "3"]);
  const showModal = () => {
    Ref.current?.setActive(true);
  };
  useEffect(() => {
    getWorkList();
  }, []);
  const getWorkList = async () => {
    const data = await GetWorkList();
    console.log(data);
  };
  return (
    <div className={style.relative}>
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
          {bannerList.map((item, index) => (
            <div className={style.h400} key={item.id}>
              <img
                src={item.img_url}
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
            onClick={() => setActive(0)}
            className={classnames(active === 0 ? style.active : "", style.hot)}
          >
            最热
          </div>
          <div
            className={classnames(active === 1 ? style.active : "", style.hot)}
            onClick={() => setActive(1)}
          >
            最新
          </div>
        </div>
        <div className={style.tabsLeft} onClick={showModal}>
          <div>筛选</div>
          <div>&lt;</div>
        </div>
      </div>
      {/* <div className={style.mt20}>
        <div className={style.card}>
        <div className={style.titleText}>陈毅的六周岁纪念</div>
        <div className={style["flex-detail"]}>
          <div className={style.detail}>精装日历</div>
          <div className={style["detail-right"]}>
            <img src={star} alt="" />
            <p>160</p>
          </div>
        </div>
        </div>
      </div> */}
      <div>
        <CardlList dataList={dataList[active === 0 ? "hotList" : "newList"]} />
      </div>
      <Modal ref={Ref}></Modal>
    </div>
  );
}
