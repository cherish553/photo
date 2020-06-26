import React from "react";
import style from "./index.module.scss";
import Logo from "@/layout/logo";
import pay from "@static/user/pay.png";
import waitSend from "@static/user/waitSend.png";
import waitRecive from "@static/user/waitRecive.png";
import waitComment from "@static/user/waitComment.png";
import postSale from "@static/user/postSale.png";
import List from "./components/list";
import article from "@static/user/article.png";
export default function User() {
  return (
    <div>
      <Logo />
      <div className={style.introduction}>
        <img src="" alt="" className={style.avatar} />
        <div>
          <div className={style.userName}>
            <div className={style.name}>Mr.Mao</div>
            <div className={style.no}>No.23232333</div>
          </div>
          <div className={style.line}></div>
          <div className={style.gather}>
            <div className={style.article}>
              <div className={style.price}>23</div>
              <div className={style.my}>我的作品</div>
            </div>
            <div className={style.vertical}></div>
            <div className={style.commission}>
              <div className={style.price}>23.00</div>
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
            <div className={style.icon}>&gt;</div>
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
        <List line src={article} inner="我的作品" />
        <List line src={article} inner="我的作品" />
        <List line src={article} inner="我的作品" />
        <List line src={article} inner="我的作品" />
      </div>
    </div>
  );
}
