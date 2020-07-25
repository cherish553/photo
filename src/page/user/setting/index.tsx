import React, { useState } from "react";
import TopTitle from "@/components/topTitle";
import style from "./index.module.scss";
import classnames from "classnames";
import contact from "@static/user/book/contact.png";
import robot from "@static/user/robot/robot.png";
import { InputItem } from "antd-mobile";
import { postSettings as PostSettings } from "@api/user";
import { SettingParam } from "@api/user/api";
export default function Works() {
  const [formData] = useState({
    name: "",
    sex: "",
    avatarUrl: "",
    address: "",
  });
  const postSettings = async (param: SettingParam) => {
    const data = await PostSettings(param);
    console.log(data);
  };
  return (
    <div>
      <TopTitle title="设置" />
      <div className={style.avatar}>
        <div className={style.upload}></div>
      </div>
      <div className={style.list}>
        {[
          { title: "昵称", key: "name" },
          { title: "性别", key: "sex" },
          { title: "地区", key: "address" },
        ].map((item) => (
          <div className={style.card} key={item.key}>
            <p> {item.title}</p>
            <InputItem className={style.input} placeholder={item.title}></InputItem>
          </div>
        ))}
      </div>
    </div>
  );
}
