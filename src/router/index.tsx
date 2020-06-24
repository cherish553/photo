import React from "react";
import { HashRouter } from "react-router-dom";
import Tabbar from "@/layout/tabbar";


// import Sider from "@/layout/Sider";
// import Top from "@/layout/Top";
// import { Layout } from "antd";

const BasicRoute = () => {
  return (
    <HashRouter>
        <Tabbar>
        </Tabbar>
    </HashRouter>
  );
};

export default BasicRoute;
