import React, { useState, useEffect } from "react";
import style from "./index.module.scss";
import Logo from "@/layout/logo";
import CartCard from "@/components/cartCard";
import {
  getCartList as GetCartList,
  postEditCart as PostEditCart,
  delCart as DelCart,
  postCreateOrder as PostCreateOrder
} from "@api/cart";
import { CartListData, EditCartParam, DelCartParam } from "@api/cart/api";
import { Checkbox, ListView, SwipeAction, Toast } from "antd-mobile";
import { useHistory } from "react-router-dom";
const { CheckboxItem } = Checkbox;
const ds = new ListView.DataSource({
  rowHasChanged: () => true,
});
function Cart() {
  const router = useHistory();
  const [dataSource, setDataSource] = useState(ds);
  const [dataList, setDataList] = useState<CartListData[]>([]);
  const [allCheck, setAllCheck] = useState(false);
  useEffect(() => {
    const arr = [...dataList];
    if (allCheck) {
      arr.forEach((item) => (item.check = true));
    } else {
      arr.forEach((item) => (item.check = false));
    }
    setDataSource(dataSource.cloneWithRows(arr));
    setDataList(arr);
  }, [allCheck]);
  function onRequestMore() {
    console.log(123);
    // let newDate = [...data, ...data];
    // setDataSource(dataSource.cloneWithRows(newDate));
  }
  useEffect(() => {
    if (!dataList) return setTotalPirce(0);
    const price = dataList
      .filter((item) => item.check)
      .reduce((pre, item) => {
        pre += +item.price * +item.number;
        return pre;
      }, 0);
    setTotalPirce(price);
  }, [dataList]);
  const [totalPirce, setTotalPirce] = useState(0);
  useEffect(() => {
    getCartList();
  }, []);
  const getCartList = async () => {
    const { data } = await GetCartList();
    setDataSource(dataSource.cloneWithRows([...dataList, ...data]));
    setDataList(data);
  };
  const postEditCart = async (
    formData: EditCartParam,
    index: React.ReactText
  ) => {
    await PostEditCart(formData);
    const data = [...dataList];
    const newData = data.splice(+index, 1)[0];
    newData.number = formData.number;
    data.splice(+index, 0, newData);
    setDataList(data);
    setDataSource(dataSource.cloneWithRows(data));
  };
  const delCart = async (param: DelCartParam) => {
    await DelCart(param);
    const arr = dataList.filter((item) => item.cart_id !== param.cartId);
    setDataList(arr);
    setDataSource(dataSource.cloneWithRows(arr));
  };
  const postCreateOrder = async () => {
    const cartId = dataList
      .filter((item) => item.check)
      .map((item) => item.cart_id)
      .join(",");
    if (!cartId.length) return Toast.fail("请选择商品后结算");
    const data = await PostCreateOrder({ cartId });
    if (!data) return;
    router.push({
      pathname: "/settlement",
      search: `?id=${data}`,
    });
  };
  function renderItem(
    rowData: CartListData,
    sectionID: any,
    rowID: React.ReactText
  ) {
    return (
      <CartCard className={style.CartCard}>
        <SwipeAction
          className={style.SwipeAction}
          right={[
            {
              text: "删除",
              onPress: () => delCart({ cartId: rowData.cart_id }),
              style: { backgroundColor: "#E52611", color: "white" },
            },
          ]}
        >
          <div className={style.flex}>
            <div className={style.check}>
              <CheckboxItem
                checked={rowData.check}
                onChange={(e: any) => {
                  const arr = [...dataList];
                  arr[+rowID].check = e.target.checked;
                  setDataList(arr);
                  setDataSource(dataSource.cloneWithRows(arr));
                  const flag = arr.every((item) => item.check);
                  if (flag) setAllCheck(true);
                  else setAllCheck(false);
                }}
              ></CheckboxItem>
            </div>
            <div className={style.inner}>
              <img
                className={style.goodImg}
                src={rowData.goods_info.index_img}
                alt=""
              />
              <div className={style.rightInner}>
                <div className={style.name}>{rowData.goods_info.name}</div>
                <div className={style.type}>
                  {rowData.type === "1" ? "印品" : "作品"}
                </div>
                <div className={style.spec}>规格1 | 规格2</div>
                <div className={style.bottom}>
                  <div className={style.price}>{rowData.price}</div>
                  <div className={style.input}>
                    <div
                      className={style.minius}
                      onClick={() => {
                        if (parseInt(rowData.number) - 1 !== 0) {
                          postEditCart(
                            {
                              number: (+rowData.number - 1).toString(),
                              cartId: rowData.cart_id,
                            },
                            rowID
                          );
                        }
                      }}
                    >
                      -
                    </div>
                    <input value={rowData.number} type="phone" />
                    <div
                      onClick={() => {
                        if (+rowData.goods_spec_info.number === +rowData.number)
                          return Toast.fail("商品库存不足");
                        postEditCart(
                          {
                            number: (+rowData.number + 1).toString(),
                            cartId: rowData.cart_id,
                          },
                          rowID
                        );
                      }}
                      className={style.plus}
                    >
                      +
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwipeAction>
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
              <CheckboxItem
                checked={allCheck}
                onChange={(e: any) => setAllCheck(e.target.checked)}
              ></CheckboxItem>
            </div>
            <p className={style.all}>全选</p>
            <p className={style.sum}>合计</p>
            <p className={style.allPirce}>￥{totalPirce}</p>
          </div>
          <div onClick={postCreateOrder} className={style.payBtn}>
            去结算
          </div>
        </div>
      </div>
    </div>
  );
}
export default Cart;
