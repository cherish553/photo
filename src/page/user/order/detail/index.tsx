import React, { useEffect, useState } from "react";
import TopTitle from "@/components/topTitle";
import style from "./index.module.scss";
import { Tabs, Badge } from "antd-mobile";
import address from "@static/cart/address.png";
import { getOrderInfo as GetOrderInfo } from "@api/user";
import { OrderInfoParam, OrderInfoData } from "@api/user/api";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { judgeSearchData } from "@/util/commonMethods";
function OrderDetail(props: RouteComponentProps) {
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
  const getOrderInfo = async (param: OrderInfoParam) => {
    const data = await GetOrderInfo(param);
    console.log(data);
    setData(data);
  };
  return (
    <div>
      <TopTitle title="订单详情" />
      <div className={style.address}>
        <img src={address} alt="" />
        <div className={style.addressDetail}>
          <p>收件人：{data.realname} 13223234545</p>
          <p>地址地址地址地址地址地址地址地址地址地址</p>
        </div>
      </div>
      {data.order_goods.map((item) => (
        <div className={style.good}>
          <img src={item.index_img} alt="" />
          <div className={style.goodRight}>
            <p className={style.goodRightName}>手账·照片·周台历</p>
            <p className={style.goodRightTitle}>商品标题</p>
            <div className={style.goodRightSpec}>
              <p>规格1 | 规格2</p>
              <p>x{item.number}</p>
            </div>
          </div>
        </div>
      ))}

      {[
        { title: "商品总价", key: "pay_amount" },
        { title: "快递费" },
        { title: "优惠" },
      ].map((item) => (
        <div key={item.title} className={style.price}>
          <p>{item.title}</p>
          <p>￥22</p>
        </div>
      ))}
      <div className={style.pay}>
        <p>实付款</p>
        <p>￥22</p>
      </div>
      <div className={style.delivery}>
        <p>快递公司</p>
        <p>申通快递</p>
      </div>
      <div className={style.order}>
        <div className={style.orderTitle}>订单信息</div>
        {["订单编号", "创建时间", "付款时间", "发货时间", "成交时间"].map(
          (item) => (
            <div className={style.orderCard}>
              <p>{item}</p>
              <p>20041568833461</p>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default withRouter(OrderDetail);
