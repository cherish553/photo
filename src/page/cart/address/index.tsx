import React, { useState, useEffect } from "react";
import style from "./index.module.scss";
import address from "@static/cart/address.png";
import TopTitle from "@/components/topTitle";
import {
  Modal,
  InputItem,
  TextareaItem,
  List,
  Switch,
  ActionSheet,
} from "antd-mobile";
import classnames from "classnames";
import {
  getAddressList as GetAddressList,
  getAreaList as GetAreaList,
} from "@api/user";
const wrapProps = {
  onTouchStart: (e: Event) => e.preventDefault(),
};
export default function Settlement() {
  const [modalVisbile, setModalVisbile] = useState(false);
  const getAddressList = async () => {
    const data = await GetAddressList();
    console.log(data);
  };
  useEffect(() => {
    getAreaList();
    getAddressList();
  }, []);
  const showActionSheet = () => {
    const BUTTONS = [
      "Operation1",
      "Operation2",
      "Operation2",
      "Delete",
      "Cancel",
    ];
    ActionSheet.showActionSheetWithOptions(
      {
        options: BUTTONS,
        cancelButtonIndex: BUTTONS.length - 1,
        destructiveButtonIndex: BUTTONS.length - 2,
        // title: 'title',
        message: "I am description, description, description",
        maskClosable: true,
      },
      (buttonIndex) => {
        console.log(buttonIndex);
      }
    );
  };

  const getAreaList = async () => {
    const data = await GetAreaList({ parentId: "" });
    console.log(data);
  };
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
        <div className={style.bottomBtn} onClick={() => setModalVisbile(true)}>
          新增地址
        </div>
      </div>
      <Modal
        className={classnames("address", style.modal)}
        onClose={() => setModalVisbile(false)}
        popup
        visible={modalVisbile}
        animationType="slide-up"
      >
        <div className={style.modalTitle}>新增收货地址</div>
        {[
          { title: "收货人", place: "请输入收货人姓名" },
          { title: "手机号码", place: "请输入手机号码" },
          { title: "省市地区", place: "点击选择" },
        ].map((item) => (
          <div className={style.card} key={item.title}>
            <p>{item.title}</p>
            <InputItem
              onClick={() => {
                if (item.title === "省市地区") {
                  showActionSheet();
                }
              }}
              placeholder={item.place}
              clear
            ></InputItem>
          </div>
        ))}
        <div className={classnames(style.card, style.detail)}>
          <p>详细地址</p>
          <TextareaItem
            placeholder="请输入详细地址（5-120个字）"
            rows={5}
            count={120}
          />
        </div>
        <div className={style.address}>
          <p>设为默认地址</p>
          <List.Item
            extra={<Switch checked={true} onChange={() => {}} />}
          ></List.Item>
        </div>
        <div className={style.modalBtn}>完成</div>
      </Modal>
    </div>
  );
}
