import React, { useState, useEffect } from "react";
import style from "./index.module.scss";
import { Carousel, Tabs, Badge, Modal } from "antd-mobile";
import { Rate } from "antd";
import back from "@static/common/back.png";
import { query, judgeSearchData } from "@/util/commonMethods";
import { getGoodsDetail as GetGoodsDetail } from "@api/print";
import { GoodsDetailDatas, Compose } from "@api/print/api";
import { withRouter, RouteComponentProps } from "react-router-dom";
import classnames from "classnames";
const tabs = [
  { title: <Badge>产品详情</Badge> },
  { title: <Badge>制作服务</Badge> },
];
function Print(props: RouteComponentProps) {
  const [specVisible, setSpecVisible] = useState(false);
  const [checkData, setCheckData] = useState({
    size: "",
    style: "",
    paper: "",
    binding: "",
    printing: "",
  });
  const [dataDetail, setDataDetail] = useState<GoodsDetailDatas>({
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
    compose: {
      binding: [],
      paper: [],
      printing: [],
      size: [],
      style: [],
    },
  });
  const [chooseId, setChooseId] = useState([]);
  const confirmNext = () => {
    const data = dataDetail.spec_list.filter((item) => {
      if (
        item.binding_spec_id === checkData.binding &&
        item.size_spec_id === checkData.size &&
        item.paper_spec_id === checkData.paper &&
        item.printing_spec_id === checkData.printing &&
        item.style_spec_id === checkData.style
      )
        return true;
      return false;
    });
    if (data.length) setSpecVisible(false)
  };
  useEffect(() => {
    const data = judgeSearchData<Id>(props.location.search, "id");
    if (typeof data === "string") {
      getGoodsDetail(data);
    }
  }, []);
  const getGoodsDetail = async (id: string) => {
    const data = await GetGoodsDetail({ id });
    const spec_list = data.spec_list[0];
    const size = spec_list.size_spec_id;
    const style = spec_list.style_spec_id;
    const paper = spec_list.paper_spec_id;
    const binding = spec_list.binding_spec_id;
    const printing = spec_list.printing_spec_id;
    setCheckData({
      size,
      style,
      paper,
      binding,
      printing,
    });
    setDataDetail(data);
  };
  const showSpecModal = async () => {};
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
          <div
            onClick={() => setSpecVisible(true)}
            className={style.introduceFlexChoose}
          >
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
      <Modal
        popup
        visible={specVisible}
        onClose={() => setSpecVisible(false)}
        animationType="slide-up"
      >
        <div className={style.modal}>
          <div className={style.modalDetail}>
            <div className={style.modalDetailLeft}>
              <img src="" alt="" />
              <div className={style.modalDetailLeftInner}>
                <div>￥88.00</div>
                <div>已选</div>
                <div>选择1 | 选择2 | 选择3</div>
              </div>
            </div>
            <img
              onClick={() => setSpecVisible(false)}
              src={back}
              className={style.modalDetailHide}
              alt=""
            />
          </div>
          <div>
            {[
              {
                title: "尺寸",
                dataId: "size",
              },
              {
                title: "款式",
                dataId: "style",
              },
              {
                title: "纸张",
                dataId: "paper",
              },
              {
                title: "装订工艺",
                dataId: "binding",
              },
              {
                title: "印刷工艺",
                dataId: "printing",
              },
            ].map((item) => (
              <div className={style.spec} key={item.dataId}>
                <div className={style.modalSpec}>{item.title}</div>
                <div className={style.modalSpecDetail}>
                  {dataDetail.compose[item.dataId as keyof Compose].map(
                    (items) => (
                      <div
                        onClick={() =>
                          setCheckData({
                            ...checkData,
                            [item.dataId]: items.id,
                          })
                        }
                        key={items.id}
                        className={classnames(
                          items.id === checkData[item.dataId as keyof Compose]
                            ? style.active
                            : ""
                        )}
                      >
                        {items.name}
                      </div>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
          <div onClick={confirmNext} className={style.btn}>
            下一步
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default withRouter(Print);
