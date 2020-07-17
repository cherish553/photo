import React, { useState, useRef } from "react";
import Logo from "@/layout/logo";
import star from "@static/show/star.png";
import style from "./index.module.scss";
import cookie from "js-cookie";
import classnames from "classnames";
import { getLogin as GetLogin } from "@api/user";
import { Button } from "antd-mobile";

export default function Login() {
  const getLogin = async () => {
    const { access_token } = await GetLogin({ code: "11111111" });
    cookie.set("token", access_token);
  };
  return (
    <div className={style.relative}>
      <Button onClick={getLogin}>登录</Button>
    </div>
  );
}
