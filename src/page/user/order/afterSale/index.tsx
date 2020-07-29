import React, { useEffect, useState } from "react";
import TopTitle from "@/components/topTitle";
import style from "./index.module.scss";
import { ImagePicker } from "antd-mobile";
import { postUploadImage } from "@/util/commonMethods";
import {
  getOrderInfo as GetOrderInfo,
  postAfterSales as PostAfterSales,
} from "@api/user";
import { OrderInfoParam, OrderInfoData, AfterSalesParam } from "@api/user/api";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { judgeSearchData } from "@/util/commonMethods";
function Comment(props: RouteComponentProps) {
  useEffect(() => {
    const data = judgeSearchData<Id>(props.location.search, "id");
    if (typeof data === "string") {
      getOrderInfo({ orderId: data });
      setForm({...form,orderId:data})
    }
  }, []);
  const [data, setData] = useState<OrderInfoData>({
    order_goods: [],
    order_id: "",
    order_sn: "",
    pay_amount: "",
    pay_time: "",
    realname: "",
  });
  const [fileList, setFileList] = useState<any[]>([]);
  const getOrderInfo = async (param: OrderInfoParam) => {
    const data = await GetOrderInfo(param);
    setData(data);
  };
  const [form, setForm] = useState<AfterSalesParam>({
    info: "",
    img: "",
    orderId: "",
  });
  const postAfterSales = async (param: AfterSalesParam) => {
    const data = await PostAfterSales(param);
    console.log(data);
  };
  const confirm = async () => {
    const param = form;
    if (fileList.length) {
      const data = await postUploadImage(fileList[0].file);
      if (data) param.img = data;
    }
    const data = await PostAfterSales(param);
    console.log(data);
  };
  return (
    <div>
      <TopTitle title="申请售后" />
      {data.order_goods.map((item) => (
        <div className={style.detail} key={item.id}>
          <img src={item.index_img} alt="" />
          <div className={style.detailInner}>
            <p>{item.goods_name}</p>
            <p>232323333</p>
            <p>￥88.88</p>
          </div>
        </div>
      ))}
      {/* <div className={style.star}>
        <div>选择评分</div>
        <Rate allowHalf defaultValue={2.5} />
      </div> */}
      <div className={style.comment}>
        <p>填写售后说明</p>
        <input
          type="text"
          value={form.info}
          onChange={(e) => setForm({ ...form, info: e.target.value })}
        />
      </div>
      <div className={style.upload}>
        <p>上传凭证</p>
        <ImagePicker
          files={fileList}
          onChange={(e) => {
            setFileList(e);
          }}
          selectable={fileList.length < 1}
        />
      </div>
      <div className={style.btn}>
        <div onClick={confirm}>提交</div>
      </div>
    </div>
  );
}

export default withRouter(Comment);
