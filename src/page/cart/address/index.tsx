import React from "react";
import style from "./index.module.scss";
import address from "@static/cart/address.png";
import TopTitle from "@/components/topTitle";
import { Modal, InputItem, TextareaItem, List, Switch } from "antd-mobile";
export default function Settlement() {
  return (
    <div>
      <TopTitle title="地址" />
      <div className={style.list}>
        {[1, 2].map((item) => (
          <div key={item} className={style.listCard}>
            <div className={style.listCardLeft}>
              <img src={address} alt="" />
              <div className={style.listCardLeftDetail}>
                <p>收件人：Mr.Mao 13223234545</p>
                <p>地址地址地址地址地址地址地址地址地址地址</p>
              </div>
            </div>
            <div className={style.listCardSelect}>默</div>
          </div>
        ))}
      </div>
      <div className={style.bottom}>
        <div className={style.bottomBtn}>新增地址</div>
      </div>
      <Modal popup visible={true} animationType="slide-up">
        {["收货人", "手机号码", "省市地区"].map((item, index) => (
          <InputItem key={index} placeholder="start from right" clear>
            {item}
          </InputItem>
        ))}
        <div className={style.address}>
          <TextareaItem title="详细地址" rows={5} count={100} />
        </div>
        <div className={style.address}>
          <List.Item extra={<Switch checked={true} onChange={() => {}} />}>
            设为默认地址
          </List.Item>
        </div>
      </Modal>
    </div>
  );
}
