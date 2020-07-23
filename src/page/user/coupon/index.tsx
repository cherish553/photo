import React, { useState, useEffect } from "react";
import style from "./index.module.scss";
import TopTitle from "@/components/topTitle";
import { Tabs, Badge } from "antd-mobile";
import classnames from "classnames";
import { getCouponList as GetCouponList } from "@api/user";
import { CouponListParam, CouponListData } from "@api/user/api";
import { changeMonth } from "@/util/commonMethods";
// export const changeMonth = (date: string | Date | number) => {
//   if (!date) return null;
//   const time = new Date(date);
//   const year = time.getFullYear();
//   let month: string | number = time.getMonth() + 1;
//   month = month > 9 ? month : `0${month}`;
//   const day = time.getDate();
//   return `${year}-${month}-${day}`;
// };
export default function Coupon() {
  function tabs() {
    return [
      { title: <Badge>未使用</Badge> },
      { title: <Badge>已使用</Badge> },
      { title: <Badge>已过期</Badge> },
    ];
  }
  const [formData, setFormData] = useState<CouponListParam>({
    key: "1",
  });
  useEffect(() => {
    getCouponList();
  }, [formData]);
  const [couponList, setCouponList] = useState<CouponListData[]>([]);
  const getCouponList = async () => {
    const { data } = await GetCouponList(formData);
    setCouponList(data);
  };
  return (
    <div>
      <TopTitle title="我的优惠券" />
      <Tabs
        tabs={tabs()}
        initialPage={0}
        onTabClick={(_item, index: number) => {
          setFormData({
            key: (index + 1).toString(),
          } as CouponListParam);
        }}
      >
        <div>
          {couponList.map((item) => (
            <div key={item.bonus_id} className={style.list}>
              <div className={style.listCard}>
                <div
                  className={classnames(style.listCardNew, style.listCardLeft)}
                >
                  <p>￥ {(+item.type_money).toFixed(2)}</p>
                  <p>{item.type_name}</p>
                </div>
                <div className={style.listCardDetail}>
                  <div className={style.listCardDetailTop}>
                    <p>全类型商品可用</p>
                    <p>2019-10-01 ~{changeMonth(+item.expire_time * 1000)}</p>
                  </div>
                  <div className={style.listCardDetailBottom}>
                    <div className={style.listCardDetailBottomBtn}>去使用</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div>
          <div>
            {couponList.map((item) => (
              <div key={item.bonus_id} className={style.list}>
                <div className={style.listCard}>
                  <div
                    className={classnames(
                      style.listCardUsed,
                      style.listCardLeft
                    )}
                  >
                    <p>￥ {(+item.type_money).toFixed(2)}</p>
                    <p>{item.type_name}</p>
                  </div>
                  <div className={style.listCardDetail}>
                    <div className={style.listCardDetailTop}>
                      <p>全类型商品可用</p>
                      <p>2019-10-01 ~{changeMonth(+item.expire_time * 1000)}</p>
                    </div>
                    <div className={style.listCardDetailBottom}>
                      <div className={style.listCardDetailBottomBtn}>
                        已使用
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div>
            {couponList.map((item) => (
              <div key={item.bonus_id} className={style.list}>
                <div className={style.listCard}>
                  <div
                    className={classnames(
                      style.listCardOverdue,
                      style.listCardLeft
                    )}
                  >
                    <p>￥ {(+item.type_money).toFixed(2)}</p>
                    <p>{item.type_name}</p>
                  </div>
                  <div className={style.listCardDetail}>
                    <div className={style.listCardDetailTop}>
                      <p>全类型商品可用</p>
                      <p>2019-10-01 ~{changeMonth(+item.expire_time * 1000)}</p>
                    </div>
                    <div className={style.listCardDetailBottom}>
                      <div className={style.listCardDetailBottomBtn}>
                        已过期
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Tabs>
    </div>
  );
}
