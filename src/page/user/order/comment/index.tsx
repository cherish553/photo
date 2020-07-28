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
      <TopTitle title="评价" />
    </div>
  );
}

export default withRouter(OrderDetail);
