import React, { useState, useEffect } from "react";
import style from "./index.module.scss";
import Logo from "@/layout/logo";
import CartCard from "@/components/cartCard";
import { getCartList as GetCartList } from "@api/cart";
import { Checkbox, ListView } from "antd-mobile";
const { CheckboxItem } = Checkbox;
const ds = new ListView.DataSource({
  rowHasChanged: () => true,
});
export default function Cart() {
  const [dataSource, setDataSource] = useState(ds);
  useEffect(() => {
    setDataSource(dataSource.cloneWithRows([1, 2, 3, 4, 5, 6]));
  }, []);
  function onRequestMore() {
    console.log(123);
    // let newDate = [...data, ...data];
    // setDataSource(dataSource.cloneWithRows(newDate));
  }
  useEffect(() => {
    getCartList();
  }, []);
  const getCartList = async () => {
    const data = await GetCartList();
    console.log(data);
  };
  function renderItem(rowData: any, sectionID: any, rowID: any) {
    return (
      <CartCard className={style.CartCard}>
        <div className={style.flex}>
          <div className={style.check}>
            <CheckboxItem></CheckboxItem>
          </div>
          <div className={style.inner}>
            <img className={style.goodImg} src="" alt="" />
            <div className={style.rightInner}>
              <div className={style.name}>《手账·照片·周台历》</div>
              <div className={style.type}>作品类型</div>
              <div className={style.spec}>规格1 | 规格2</div>
              <div className={style.bottom}>
                <div className={style.price}>￥88.00</div>
                <div className={style.input}>
                  <div className={style.minius}>-</div>
                  <input type="phone" />
                  <div className={style.plus}>+</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CartCard>
    );
  }
  return (
    <div className={style.cart}>
      <Logo />
      <div className={style.cardList}>
        <div className={style.card}>
          <ListView
            dataSource={dataSource}
            renderRow={renderItem}
            initialListSize={20}
            pageSize={20}
            onEndReached={(event) => {
              onRequestMore();
            }}
            onEndReachedThreshold={10}
            style={{
              height: "100%",
              background: "#EEEEEE",
            }}
          />
        </div>
        <div className={style.pay}>
          <div className={style.payLeft}>
            <div className={style.check}>
              <CheckboxItem></CheckboxItem>
            </div>
            <p className={style.all}>全选</p>
            <p className={style.sum}>合计</p>
            <p className={style.allPirce}>￥88.00</p>
          </div>
          <div className={style.payBtn}>去结算</div>
        </div>
      </div>
    </div>
  );
}
