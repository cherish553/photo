import React, { useEffect, useState } from "react";
import style from "./index.module.scss";
import TopTitle from "@/components/topTitle";
import { Tabs, Badge } from "antd-mobile";
import { getCommissionLogs as GetCommissionLogs } from "@api/user";
import { CommissionLogsParam, CommissionLogsData } from "@api/user/api";
export default function Coupon() {
  const tabs = [
    { title: <Badge>近一月</Badge> },
    { title: <Badge>近半年</Badge> },
    { title: <Badge>近一年</Badge> },
  ];
  const [formData, setFormData] = useState<CommissionLogsParam>({
    type: "1",
  });
  const [data, setData] = useState<CommissionLogsData[]>([]);
  useEffect(() => {
    getCommissionLogs();
  }, [formData]);
  const getCommissionLogs = async () => {
    const {data} = await GetCommissionLogs(formData);
    setData(data)
  };
  return (
    <div>
      <TopTitle title="历史收入" />
      <Tabs
        tabs={tabs}
        initialPage={0}
        onTabClick={(tab, index) => {
          setFormData({ type: (++index).toString() } as CommissionLogsParam);
        }}
      ></Tabs>
      <div>
        {/* <p className={style.date}> 2019-12</p> */}
        <div className={style.list}>
          {data?.map((item) => (
            <div className={style.listCard} key={item.id}>
              <p className={style.listCardPrice}>￥{item.commission}</p>
              <div className={style.listCardBottom}>
                <p>来自朋友：{item.children_name}</p>
                <p>{item.created_time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
