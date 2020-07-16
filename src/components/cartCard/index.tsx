import React from "react";
// import CardList from '../cardList'
import classnames from "classnames";
import style from "./index.module.scss";
type Props = {
  children: any;
  className: string;
};
export default function CardList(props: Props) {
  const { className } = props;
  return (
    <div className={classnames(style.cardList, className)}>
      {props.children}
    </div>
  );
}
