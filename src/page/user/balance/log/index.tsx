import React, { useState, useEffect } from "react";
import style from "./index.module.scss";
import TopTitle from "@/components/topTitle";
import { Tabs, Badge } from "antd-mobile";
import { getWithdrawApply as GetWithdrawApply } from "@api/user";
import { WithdrawApplyParam, WithdrawApplyData } from "@api/user/api";
export default function Coupon() {
  const tabs = [
    { title: <Badge>近一月</Badge> },
    { title: <Badge>近半年</Badge> },
    { title: <Badge>近一年</Badge> },
  ];
  const [formData, setFormData] = useState<WithdrawApplyParam>({
    type: "1",
  });
  const [dataList, setDataList] = useState<WithdrawApplyData[]>([]);
  useEffect(() => {
    getWithdrawApply();
  }, [formData]);
  const getWithdrawApply = async () => {
    const { data } = await GetWithdrawApply(formData);
    setDataList(data);
  };
  return (
    <div>
      <TopTitle title="提现记录" />
      <Tabs
        tabs={tabs}
        initialPage={0}
        onTabClick={(tab, index) => {
          setFormData({ type: (++index).toString() } as WithdrawApplyParam);
        }}
      ></Tabs>
      <div>
        {/* <p className={style.date}> 2019-12</p> */}
        <div className={style.list}>
          {dataList.map((item) => (
            <div className={style.listCard} key={item.id}>
              <p className={style.listCardPrice}>￥{item.money}</p>
              <p>{item.created_time}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
