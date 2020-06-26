import React from "react";
// import CardList from '../cardList'
import style from "./index.module.scss";
type Props = {
  children: any;
};
export default function CardList(props: Props) {
  return <div className={style.cardList}>{props.children}</div>;
}
