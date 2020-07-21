import React, { useEffect, useState } from "react";
import TopTitle from "@/components/topTitle";
import style from "./index.module.scss";
import { Tabs, Badge } from "antd-mobile";
import { getOrderList as GetOrderList } from "@api/user";
import { OrderListParam, OrderListData } from "@api/user/api";
interface TabsInterface extends OrderListParam {
  title: JSX.Element;
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
          <div  key={item.order_id} className={style.card}>
            <div className={style.cardStatus}>
              <p>{`${new Date(item.pay_time).getFullYear()}-${
                new Date(item.pay_time).getMonth() + 1
              }-${new Date(item.pay_time).getDay()}`}</p>
              <p>待发货</p>
            </div>
            <div className={style.cardDetail}>
              <img src="" alt="" />
              <div className={style.cardDetailRight}>
                <p>{item.order_sn}</p>
                <p>232323333</p>
                <p>￥{item.order_amount}</p>
              </div>
            </div>
          </div>
      ))}
    </div>
  );
}
