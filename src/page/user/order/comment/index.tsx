import React, { useEffect, useState } from "react";
import TopTitle from "@/components/topTitle";
import style from "./index.module.scss";
import { Rate } from "antd";
import { ImagePicker } from "antd-mobile";
import address from "@static/cart/address.png";
import { getOrderInfo as GetOrderInfo } from "@api/user";
import { OrderInfoParam, OrderInfoData } from "@api/user/api";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { judgeSearchData } from "@/util/commonMethods";
function Comment(props: RouteComponentProps) {
  useEffect(() => {
    const data = judgeSearchData<Id>(props.location.search, "id");
    if (typeof data === "string") {
      getOrderInfo({ orderId: data });
    }
  }, []);
  const [data, setData] = useState<OrderInfoData>({
    order_goods: [],
    order_id: "",
    order_sn: "",
    pay_amount: "",
    pay_time: "",
    realname: "",
  });
  const [fileList, setFileList] = useState<any[]>([]);
  const getOrderInfo = async (param: OrderInfoParam) => {
    const data = await GetOrderInfo(param);
    console.log(data);
    setData(data);
  };
  return (
    <div>
      <TopTitle title="评价" />
      <div className={style.detail}>
        <img src="" alt="" />
        <div className={style.detailInner}>
          <p>《手账·照片》</p>
          <p>232323333</p>
          <p>￥88.88</p>
        </div>
      </div>
      <div className={style.star}>
        <div>选择评分</div>
        <Rate allowHalf defaultValue={2.5} />
      </div>
      <div className={style.comment}>
        <p>填写评价</p>
        <input type="text" value={123} />
      </div>
      <div className={style.upload}>
        <p>上传图片</p>
        <ImagePicker
          files={fileList}
          onChange={(e) => {
            setFileList(e);
          }}
          selectable={fileList.length < 1}
        />
      </div>
      <div className={style.btn}>
        <div>提交</div>
      </div>
    </div>
  );
}

export default withRouter(Comment);
