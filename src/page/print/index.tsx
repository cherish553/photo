import React, { useState, useEffect, useRef, RefObject } from "react";
import style from "./index.module.scss";
import classnames from "classnames";
import Logo from "@/layout/logo";
import search from "@static/print/search.png";
import CardList from "@/components/cardList";
import { ListView } from "antd-mobile";
import {
  getGoodsList as GetGoodsList,
  getGoodsListPage as GetGoodsListPage,
} from "@api/print";
import {
  GoodsListData,
  GoodsListPageParam,
  GoodsList,
  DataDetail,
} from "@api/print/api";
const ds = new ListView.DataSource({
  rowHasChanged: () => true,
});
export default function Print() {
  const [dataSource, setDataSource] = useState(ds);
  useEffect(() => {
    setDataSource(dataSource.cloneWithRows([0]));
  }, []);
  function onRequestMore() {
    console.log(123);
    // let newDate = [...data, ...data];
    // setDataSource(dataSource.cloneWithRows(newDate));
  }
  const [flag, setFlag] = useState(true);
  const inputRef = useRef<any>();
  const [formData, setFormData] = useState<GoodsListPageParam>({
    page: 1,
    size: 20,
    class_id: "",
  });
  const [selectIndex, setSelectIndex] = useState(0);
  const [tabs, setTabs] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [dataList, setDataList] = useState<DataDetail[]>([]);
  const toggleTabs = (e: Event) => {
    window.removeEventListener("click", toggleTabs);
    setTabs(true);
  };
  const [classList, setClassList] = useState<GoodsListData[]>([]);
  useEffect(() => {
    if (inputRef.current && !tabs) {
      inputRef.current.focus();
    }
  }, [tabs]);
  useEffect(() => {
    getGoodsList();
  }, []);
  const getGoodsListPage = async (class_id?: string) => {
    const data = await GetGoodsListPage({
      ...formData,
      class_id: class_id || formData.class_id,
    });
    const { current_page, last_page, data: dataList } = data;
    if (current_page === last_page) setFlag(false);
    // setDataSource(dataSource.cloneWithRows(dataList));
    setDataList(dataList);
  };
  const getGoodsList = async () => {
    const data = await GetGoodsList();
    setClassList(data);
    const {
      class_id,
      goodsList: { current_page, last_page },
    } = data[0];
    setFormData({ ...formData, class_id });
    if (current_page === last_page) setFlag(false);
    getGoodsListPage(class_id);
    return true;
  };
  function renderItem(item: any, sectionID: any, rowID: any) {
    return (
      <CardList dataList={dataList} /> 
    );
  }
  const changeSearch = () => {};
  return (
    <div className={style.container}>
      <Logo></Logo>
      {(tabs && (
        <div className={style["search-tabs"]}>
          <div className={style.tabs}>
            {classList.map((item, index) => (
              <div
                key={item.class_id}
                onClick={() => setSelectIndex(index)}
                className={classnames(
                  style["tabs-detail"],
                  selectIndex === index ? style.active : ""
                )}
              >
                {item.name}
              </div>
            ))}
          </div>
          <div>
            <img
              onClick={() => {
                console.log(123);
                setTabs(false);
                setTimeout(
                  () => window.addEventListener("click", toggleTabs),
                  0
                );
              }}
              className={style["search-icon"]}
              src={search}
              alt=""
            />
          </div>
        </div>
      )) || (
        <div
          onClick={(e) => e.stopPropagation()}
          className={style["search-dev"]}
        >
          <input
            ref={inputRef}
            onChange={(e) => setSearchValue(e.target.value)}
            value={searchValue}
            className={style["search-input"]}
          />
          <img className={style["search-icon1"]} src={search} alt="" />
        </div>
      )}
      <div className={style.cardList}>
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
        {/* <CardList dataList={dataList} /> */}
      </div>
    </div>
  );
}
