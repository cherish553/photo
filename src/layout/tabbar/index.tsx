import React from "react";
import style from "./index.module.scss";
import { HashRouter, Route, Switch } from "react-router-dom";
import home from "@/page/home";
import aa from "@/page/aa";
import bb from "@/page/bb";
import { withRouter } from "react-router";
const A = (props: any) => {
  console.log(props);
  return (
    <div className='h100'>
      <Switch>
        <Route exact path="/" component={home} />,
        <Route exact path="/aa" component={aa} />,
        <Route exact path="/bb" component={bb} />,
      </Switch>
    </div>
  );
};
export default withRouter(A);
