import React, { useState } from "react";
import style from "./index.module.scss";
import TopTitle from "@/components/topTitle";
import { getApplyWithdrawal as GetApplyWithdrawal } from "@api/user";
import { ApplyWithdrawalParam } from "@api/user/api";
import { Toast } from "antd-mobile";
export default function Coupon() {
  const [formData, setFormData] = useState<ApplyWithdrawalParam>({
    money: "",
  });
  const getApplyWithdrawal = async () => {
    if (!formData.money || +formData.money <= 0)
      return Toast.fail("请输入正确的金额");
    const data = await GetApplyWithdrawal(formData);
    if (!data) return;
    Toast.success("申请成功");
  };
  return (
    <div>
      <TopTitle title="申请提现" />
      <div className={style.detail}>
        <p className={style.detailTitle}>提现金额</p>
        <div className={style.detailPrice}>
          <p>￥</p>
          <input
            onChange={(e) => setFormData({ money: e.target.value })}
            value={formData.money}
            type="text"
          />
        </div>
        <div className={style.detailLine}></div>
        <div className={style.detailApply}>
          <p>可用余额 0.00元</p>
          <p>全额提现</p>
        </div>
      </div>
      <div className={style.bottom}>
        <div onClick={getApplyWithdrawal} className={style.bottomBtn}>
          提交申请
        </div>
      </div>
    </div>
  );
}
