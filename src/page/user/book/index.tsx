import React from "react";
import TopTitle from "@/components/topTitle";
import style from "./index.module.scss";
import classnames from "classnames";
import contact from "@static/user/book/contact.png";
export default function Works() {
  return (
    <div>
      <TopTitle title="您的微信书" />
      <div className={style.detail}>
        <div className={style.detailTitle}>您的微信书</div>
        <div className={style.detailInner}>
          <p>您还没有微信书</p>
          <p>导入朋友圈原创内容，自动排版，一键成书</p>
        </div>
        <div className={style.detailBtn}>制作微信书</div>
      </div>
      <div className={classnames(style.circle, style.add)}>
        <p>+</p>
      </div>
      <div className={classnames(style.circle, style.contact)}>
        <img src={contact} alt="" />
      </div>
    </div>
  );
}
