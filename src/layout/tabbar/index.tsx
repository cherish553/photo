import React, { useState, useEffect } from "react";
import style from "./index.module.scss";
import { Route, Switch } from "react-router-dom";
import index from "@/page/index";

import print from "@/page/print";

import show from "@/page/show";

import user from "@/page/user";
import works from "@/page/user/works";
import Coupon from "@/page/user/coupon";
import balance from "@/page/user/balance";
import history from "@/page/user/balance/history";
import log from "@/page/user/balance/log";
import apply from "@/page/user/balance/apply";
import invite from "@/page/user/invite";
import order from "@/page/user/order";
import orderDetail from "@/page/user/order/detail";

import afterSale from "@/page/user/order/afterSale";
import book from "@/page/user/book";
import robot from "@/page/user/robot";
import setting from '@/page/user/setting'
import cart from "@/page/cart";
import settlement from "@/page/cart/settlement";
import address from "@/page/cart/address";
import printDetail from "@/page/print/detail";
import printDetailComment from "@/page/print/detail/comment";
import login from "@/page/login";
import comment from "@/page/user/order/comment";


import { TabBar } from "antd-mobile";
import classnames from "classnames";
import { withRouter, RouteComponentProps } from "react-router";
import homeImg from "@static/tabbar/home.png";
import homeSelectImg from "@static/tabbar/homeSelect.png";
import cartImg from "@static/tabbar/cart.png";
import cartSelectImg from "@static/tabbar/cartSelect.png";
import userImg from "@static/tabbar/user.png";
import userSelectImg from "@static/tabbar/userSelect.png";
import showImg from "@static/tabbar/show.png";
import showSelectImg from "@static/tabbar/showSelect.png";
import printImg from "@static/tabbar/print.png";
import printSelectImg from "@static/tabbar/printSelect.png";
type SelectStatus = "/" | "cart" | "user" | "print" | "show";
const Tabbar = (props: RouteComponentProps) => {
  // SelectStatus /orderDetail?id=7
  const [select, setSelect] = useState<any>("/");
  useEffect(() => {
    // setSelect("print");
  }, []);
  const [showTabbar, setShowTabbar] = useState(true);
  useEffect(() => {
    props.history.push(select);
  }, [props.history, select]);

  useEffect(() => {
    const pathname = props.history.location.pathname;
    if (
      pathname === "/" ||
      pathname === "/print" ||
      pathname === "/show" ||
      pathname === "/cart" ||
      pathname === "/user"
    )
      return setShowTabbar(true);
    setShowTabbar(false);
  }, [props.history.location.pathname]);
  return (
    <div className={classnames("h100", style.relate)}>
      <div className={style.main}>
        <Switch>
          <Route strict exact path="/" component={index} />,
          <Route strict exact path="/print" component={print} />,
          <Route strict exact path="/show" component={show} />,
          <Route strict exact path="/cart" component={cart} />,
          <Route strict exact path="/user" component={user} />,
          <Route strict exact path="/printDetail" component={printDetail} />,
          <Route
            strict
            exact
            path="printDetailComment"
            component={printDetailComment}
          />
          ,
          <Route strict exact path="/settlement" component={settlement} />,
          <Route strict exact path="/address" component={address} />,
          <Route strict exact path="/works" component={works} />,
          <Route strict exact path="/coupon" component={Coupon} />,
          <Route strict exact path="/balance" component={balance} />,
          <Route strict exact path="/history" component={history} />,
          <Route strict exact path="/log" component={log} />,
          <Route strict exact path="/apply" component={apply} />,
          <Route strict exact path="/invite" component={invite} />,
          <Route strict exact path="/order" component={order} />,
          <Route strict exact path="/orderDetail" component={orderDetail} />,
          <Route strict exact path="/afterSale" component={afterSale} />,
          <Route strict exact path="/book" component={book} />,
          <Route strict exact path="/robot" component={robot} />,
          <Route strict exact path="/login" component={login} />,
          <Route strict exact path="/setting" component={setting} />,
          <Route strict exact path="/comment" component={comment} />,
        </Switch>
      </div>
      {showTabbar && (
        <div className={style.tabbar}>
          <TabBar
            unselectedTintColor="#BBBBBB"
            tintColor="#E52611"
            barTintColor="white"
          >
            {[
              {
                key: "/",
                title: "首页",
                icon: homeImg,
                selectedIcon: homeSelectImg,
              },
              {
                key: "print",
                title: "印品",
                icon: printImg,
                selectedIcon: printSelectImg,
              },
              {
                key: "show",
                title: "展厅",
                icon: showImg,
                selectedIcon: showSelectImg,
              },
              {
                key: "cart",
                title: "购物车",
                icon: cartImg,
                selectedIcon: cartSelectImg,
              },
              {
                key: "user",
                title: "我的",
                icon: userImg,
                selectedIcon: userSelectImg,
              },
            ].map((item) => (
              <TabBar.Item
                onPress={() => setSelect(item.key as SelectStatus)}
                selected={select === item.key}
                title={item.title}
                key={item.key}
                icon={<img className={style.icon} src={item.icon} alt="" />}
                selectedIcon={
                  <img className={style.icon} src={item.selectedIcon} alt="" />
                }
              ></TabBar.Item>
            ))}
          </TabBar>
        </div>
      )}
    </div>
  );
};
export default withRouter(Tabbar);
