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

import cart from "@/page/cart";
import settlement from "@/page/cart/settlement";
import address from "@/page/cart/address";
import printDetail from "@/page/print/detail";
import printDetailComment from "@/page/print/detail/comment";

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
  const [select, setSelect] = useState<SelectStatus>("/");
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
          <Route strict exact path="/history" component={index} />,
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
          <Route strict exact path="/Coupon" component={Coupon} />,
          <Route strict exact path="/balance" component={balance} />,
          <Route strict exact path="/" component={history} />,
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
