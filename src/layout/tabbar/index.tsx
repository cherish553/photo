import React, { useState, useEffect } from "react";
import style from "./index.module.scss";
import { Route, Switch } from "react-router-dom";
import index from "@/page/index";
import print from "@/page/print";
import show from "@/page/show";
import user from "@/page/user";
import cart from "@/page/cart";
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
  useEffect(() => {
    props.history.push(select);
  }, [props.history, select]);
  return (
    <div className={classnames("h100", style.relate)}>
      <div className={style.main}>
        <Switch>
          <Route exact path="/" component={index} />,
          <Route exact path="/print" component={print} />,
          <Route exact path="/show" component={show} />,
          <Route exact path="/cart" component={cart} />,
          <Route exact path="/user" component={user} />,
        </Switch>
      </div>
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
    </div>
  );
};
export default withRouter(Tabbar);
