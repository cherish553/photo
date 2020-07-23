import React, { useEffect, useState } from "react";
import style from "./index.module.scss";
import Logo from "@/layout/logo";
import pay from "@static/user/pay.png";
import waitSend from "@static/user/waitSend.png";
import waitRecive from "@static/user/waitRecive.png";
import waitComment from "@static/user/waitComment.png";
import postSale from "@static/user/postSale.png";
import List from "./components/list";
import article from "@static/user/article.png";
import money from "@static/user/money.png";
import coupon from "@static/user/coupon.png";
import invite from "@static/user/invite.png";
import address from "@static/user/address.png";
import setting from "@static/user/setting.png";
import chat from "@static/user/chat.png";
import { getUserIndex as GetUserIndex } from "@api/user";
import { UserIndexData } from "@api/user/api";
import about from "@static/user/about.png";
import classnames from "classnames";
import back from "@static/common/back.png";

export default function User() {
  useEffect(() => {
    getUserIndex();
  }, []);

  const [data, setData] = useState<UserIndexData>({
    address: "",
    avatarUrl: "",
    commission: "",
    name: "",
    sex: "",
    total_commission: "",
    id: "",
  });
  const getUserIndex = async () => {
    const data = await GetUserIndex();
    setData(data);
  };
  return (
    <div>
      <Logo />
      <div className={style.introduction}>
        <img src={data.avatarUrl} alt="" className={style.avatar} />
        <div>
          <div className={style.userName}>
            <div className={style.name}>{data.name}</div>
            <div className={style.no}>No.{data.id}</div>
          </div>
          <div className={style.line}></div>
          <div className={style.gather}>
            <div className={style.article}>
              <div className={style.price}>23</div>
              <div className={style.my}>我的作品</div>
            </div>
            <div className={style.vertical}></div>
            <div className={style.commission}>
              <div className={style.price}>{data.total_commission}</div>
              <div className={style.my}>我的佣金</div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.order}>
        <div className={style.orderDetail}>
          <div className={style.myOrder}>我的订单</div>
          <div className={style.all}>
            <div className={style.search}>查看全部</div>
            <img src={back} className="go" alt="" />
          </div>
        </div>
        <div className={style.status}>
          <div className={style.payImage}>
            <img src={pay} alt="" />
            <p>待付款</p>
          </div>
          <div className={style.waitSendImage}>
            <img src={waitSend} alt="" />
            <p>待发货</p>
          </div>
          <div className={style.waitReciveImage}>
            <img src={waitRecive} alt="" />
            <p>待收货</p>
          </div>
          <div className={style.waitCommentImage}>
            <img src={waitComment} alt="" />
            <p>待评价</p>
          </div>
          <div className={style.postSaleImage}>
            <img src={postSale} alt="" />
            <p>售后</p>
          </div>
        </div>
        <div className={style.list}>
          <List line src={article} inner="我的作品" />
          <List line src={money} inner="我的余额" />
          <List url="/coupon" line src={coupon} inner="我的优惠券" />
          <List src={invite} inner="邀请有礼" />
        </div>
        <div className={classnames(style.list, style.mb34)}>
          <List line src={address} inner="我的地址" />
          <List line src={setting} inner="设置" />
          <List line src={chat} inner="在线客服" />
          <List src={about} inner="关于我们" />
        </div>
      </div>
    </div>
  );
}
