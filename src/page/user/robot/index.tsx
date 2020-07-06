import React from "react";
import TopTitle from "@/components/topTitle";
import style from "./index.module.scss";
import classnames from "classnames";
import contact from "@static/user/book/contact.png";
import robot from "@static/user/robot/robot.png";
import { Modal } from "antd-mobile";
export default function Works() {
  return (
    <div>
      <TopTitle title="您的机器人" />
      {[
        {
          title: "我还没有微信书",
          inner: "添加小编即可",
        },
        {
          title: "我要更改微信书",
          inner: "更新小编即可",
        },
      ].map((item) => (
        <div key={item.title} className={style.card}>
          <div className={style.cardDetail}>
            <p>{item.title}</p>
            <p>{item.inner}</p>
          </div>
          <img src={robot} alt="" />
        </div>
      ))}
      <div className={classnames(style.circle, style.contact)}>
        <img src={contact} alt="" />
      </div>
      <Modal
        className={style.modal}
        transparent
        visible={true}
        maskClosable={false}
      >
        <div className={style.modalInner}>
          <p>印米小编</p>
          <img src="" alt="" />
          <p>
            微信扫描上方二维码添加小编
            <br />
            即可开始制作微信书
          </p>
          <div>
            <p>添加小编需开发朋友圈哦</p>
            <p>
              请不要设置为三天或半年可见 <br />
              否则无法制作全部内容
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
}
