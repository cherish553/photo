import React, { useEffect, useState } from "react";
import TopTitle from "@/components/topTitle";
import style from "./index.module.scss";
import { Tabs, Badge } from "antd-mobile";
import {
  getOrderList as GetOrderList,
  getReceiptOrder as GetReceiptOrder,
} from "@api/user";
import {
  OrderListParam,
  OrderListData,
  OrderInfoParam,
} from "@api/user/api";
import { changeMonth } from "@/util/commonMethods";
interface TabsInterface extends OrderListParam {
  title: JSX.Element;
}
enum Status {
  "未支付",
  "已付款",
  "已确认",
  "已完成",
  "已取消",
  "申请售后",
  "售后完成",
  "发货" = 8,
  "申请退款",
  "已退款",
}
export default function Works() {
  const tabs: TabsInterface[] = [
    { title: <Badge>全部</Badge>, key: "all" },
    { title: <Badge>待付款</Badge>, key: "unpaid" },
    { title: <Badge>待发货</Badge>, key: "waitDeliver" },
    { title: <Badge>待收货</Badge>, key: "waitReceipt" },
    { title: <Badge>待评价</Badge>, key: "waitComment" },
  ];
  const getOrderList = async (parma: OrderListParam, flag = false) => {
    const { data } = await GetOrderList(parma);
    if (!flag) {
      setOrderList([...orderList, ...data]);
    }
    setOrderList(data);
  };
  const [orderList, setOrderList] = useState<OrderListData[]>([]);
  useEffect(() => {
    getOrderList({ key: "all" }, true);
  }, []);
  const getReceiptOrder = async (param: OrderInfoParam) => {
    const data = await GetReceiptOrder(param);
    if (!data) return;
    getOrderList({ key: "all" }, true);
  };
  return (
    <div>
      <TopTitle title="我的订单" />
      <Tabs
        tabs={tabs}
        initialPage={0}
        onTabClick={(item, index) => {
          getOrderList({ key: item.key } as OrderListParam, true);
        }}
      ></Tabs>
      {orderList.map((item) => (
        <div key={item.order_id} className={style.card}>
          <div className={style.cardStatus}>
            <p>{changeMonth(+item.pay_time * 1000)}</p>
            <p>{Status[+item.status]}</p>
          </div>
          <div className={style.cardDetail}>
            <img src="" alt="" />
            <div className={style.cardDetailRight}>
              <p>{item.order_sn}</p>
              <p>232323333</p>
              <p>￥{item.order_amount}</p>
            </div>
          </div>
          <div className={style.btnList}>
            {Status[+item.status] === "已付款" && [
              <div className={style.btn}>申请售后</div>,
              <div
                onClick={() => getReceiptOrder({ orderId: item.order_id })}
                className={style.btn}
              >
                确认收货
              </div>,
            ]}
            {Status[+item.status] === "已确认" && [
              <div className={style.btn}>去评价</div>,
            ]}

            {/* <div className={style.btn}></div> */}
          </div>
        </div>
      ))}
    </div>
  );
}
