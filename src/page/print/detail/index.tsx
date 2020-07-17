import React, { useState, useEffect } from "react";
import style from "./index.module.scss";
import { Carousel, Tabs, Badge } from "antd-mobile";
import { Rate } from "antd";
import back from "@static/common/back.png";
import { query, judgeSearchData } from "@/util/commonMethods";
import { getGoodsDetail as GetGoodsDetail } from "@api/print";
import { GoodsDetailData } from "@api/print/api";
import { withRouter, RouteComponentProps } from "react-router-dom";
const tabs = [
  { title: <Badge>产品详情</Badge> },
  { title: <Badge>制作服务</Badge> },
];
function Print(props: RouteComponentProps) {
  const [dataDetail, setDataDetail] = useState<GoodsDetailData>({
    desc: {
      desc: "",
      service_introduction: "",
    },
    id: "",
    img_list: [],
    spec_list: [],
    index_img: "",
    is_recommend: 0,
    min_price: "",
    name: "",
  });
  useEffect(() => {
    const data = judgeSearchData<Id>(props.location.search, "id");
    console.log(data);
    if (typeof data === "string") {
      getGoodsDetail(data);
    }
  }, []);
  const getGoodsDetail = async (id: string) => {
    const data = await GetGoodsDetail({ id });
    setDataDetail(data);
  };
  return (
    <div>
      <Carousel
        className={style.bannerImg}
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
        {dataDetail.img_list.map((item) => (
          <img
            key={item.id}
            className={style.bannerImg}
            src={item.img_url}
            alt=""
          />
        ))}
      </Carousel>
      <div className={style.introduce}>
        <div className={style.introduceName}>{dataDetail.name}</div>
        <div className={style.introduceDescribe}>
          描述描述描述描述描述描述描述描述
        </div>
        <div className={style.introducePrice}>
          ￥{dataDetail.min_price}/本起
        </div>
        <div className={style.introduceFlex}>
          <div className={style.introduceFlexBtn}>已选</div>
          <div className={style.introduceFlexChoose}>
            <div>选择1 | 选择2 | 选择3</div>
            <img className="go" src={back} alt="" />
          </div>
        </div>
      </div>
      <div className={style.userComment}>
        <div className={style.userCommentTitle}>
          <div>用户评价(234)</div>
          <img src={back} className="go" alt="" />
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
            <div className={style.userCommentListSelectStar}>
              <Rate allowHalf defaultValue={2.5} />
            </div>
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
              dangerouslySetInnerHTML={{
                __html: dataDetail.desc.desc,
              }}
            ></div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "150px",
                backgroundColor: "#fff",
              }}
              dangerouslySetInnerHTML={{
                __html: dataDetail.desc.service_introduction,
              }}
            ></div>
          </Tabs>
        </div>
      </div>
      <div className={style.pay}>
        <div className={style.payPrice}>￥{dataDetail.min_price}</div>
        <div className={style.payBtn}>开始制作</div>
      </div>
    </div>
  );
}

export default withRouter(Print);
