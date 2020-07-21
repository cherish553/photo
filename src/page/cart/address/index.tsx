import React, { useState, useEffect } from "react";
import style from "./index.module.scss";
import address from "@static/cart/address.png";
import TopTitle from "@/components/topTitle";
import {
  InputItem,
  TextareaItem,
  List,
  Switch,
  Modal,
  Toast,
  SwipeAction,
} from "antd-mobile";
import classnames from "classnames";
import {
  getAddressList as GetAddressList,
  getAreaList as GetAreaList,
  postEditAddress as PostEditAddress,
  getAddressDetail as GetAddressDetail,
  delAddress as DelAddress,
} from "@api/user";
import {
  AreaListData,
  EditAddressParam,
  AddressListData,
  AddressDetailParam,
  DelAddressParam,
} from "@api/user/api";

const wrapProps = {
  onTouchStart: (e: Event) => e.preventDefault(),
};
enum Choose {
  "null",
  "province",
  "city",
  "region",
}
export default function Settlement() {
  const [province, setProvince] = useState<AreaListData[]>([]);
  const [city, setCity] = useState<AreaListData[]>([]);
  const [region, setRegion] = useState<AreaListData[]>([]);
  const [formData, setFormData] = useState<EditAddressParam>({
    address_id: "",
    realname: "",
    mobile: "",
    is_default: 0,
    province: "",
    city: "",
    district: "",
    address: "",
  });
  const [mappingAddress, setMappingAddress] = useState({
    province: "",
    city: "",
    district: "",
  });
  const [addressList, setAddressList] = useState<AddressListData[]>([]);
  const [addressVisbile, setAddressVisbile] = useState(false);
  const [chooseVisbile, setChooseVisbile] = useState<Choose>(Choose.null);
  const getAddressList = async () => {
    const { data } = await GetAddressList();
    setAddressList(data);
  };
  useEffect(() => {
    getAreaList();
    getAddressList();
  }, []);
  const postEditAddress = async () => {
    const data = await PostEditAddress(formData);
    if (!data) return;
    getAddressList();
    setAddressVisbile(false);
  };
  const getAreaList = async (parentId = "") => {
    const data = await GetAreaList({ parentId });
    if (!parentId) setProvince(data);
    return data;
  };
  const chooseProvince = async (id: string) => {
    setFormData({ ...formData, province: id, city: "", district: "" });
    const data = await getAreaList(id);
    setCity(data);
    return true;
  };
  const chooseCity = async (id: string) => {
    setFormData({ ...formData, city: id });
    const data = await getAreaList(id);
    setRegion(data);
    return true;
  };
  const chooseRegion = (id: string) => {
    setFormData({ ...formData, district: id });
  };
  const validateForm = async () => {
    if (!formData.address) return Toast.fail("请输入详细地址");
    if (!formData.province || !formData.city || !formData.district)
      return Toast.fail("请选择省市区");
    if (!formData.mobile) return Toast.fail("请输入手机号");
    if (!formData.realname) return Toast.fail("请输入收货人");
    postEditAddress();
  };
  const getAddressDetail = async (param: AddressDetailParam) => {
    const data = await GetAddressDetail(param);
    const {
      address,
      address_id,
      realname,
      mobile,
      default: is_default,
      province,
      city,
      district,
      city_name,
      district_name,
      province_name,
    } = data;
    setFormData({
      address,
      address_id,
      realname,
      mobile,
      is_default,
      province,
      city,
      district,
    });
    setMappingAddress({
      city: city_name.name,
      district: district_name.name,
      province: province_name.name,
    });
  };
  const delAddress = async (param: DelAddressParam) => {
    const data = await DelAddress(param);
    if (!data) return;
    getAddressList();
  };
  return (
    <div>
      <TopTitle title="地址" />

      {addressList.map((item) => (
        <SwipeAction
          key={item.address_id}
          className={style.list}
          autoClose
          right={[
            {
              text: "删除",
              onPress: () => {
                delAddress({ address_ids: item.address_id });
              },
              style: { backgroundColor: "#E52611", color: "white" },
            },
            {
              text: "编辑",
              onPress: async () => {
                setFormData({
                  ...formData,
                  address_id: item.address_id,
                });
                setAddressVisbile(true);
                await getAddressDetail({ address_id: item.address_id });
              },
              style: { backgroundColor: "#EEEEEE", color: "#000000" },
            },
          ]}
        >
          <div className={style.listCard}>
            <div className={style.listCardLeft}>
              <img src={item.default ? address : ""} alt="" />
              <div className={style.listCardLeftDetail}>
                <p>
                  收件人：{item.realname} {item.mobile}
                </p>
                <p>
                  {item.province_name?.name}
                  {item.city_name?.name}
                  {item.district_name?.name}
                  {item.address}
                </p>
              </div>
            </div>
            {item.default ? (
              <div
                className={classnames(
                  style.listCardDefault,
                  style.listCardSelect
                )}
              >
                默
              </div>
            ) : (
              <div className={style.listCardDefault}></div>
            )}
          </div>
        </SwipeAction>
      ))}

      <div className={style.bottom}>
        <div
          className={style.bottomBtn}
          onClick={() => {
            setFormData({
              address_id: "",
              realname: "",
              mobile: "",
              is_default: 0,
              province: "",
              city: "",
              district: "",
              address: "",
            });
            setMappingAddress({
              city: "",
              province: "",
              district: "",
            });
            setAddressVisbile(true);
          }}
        >
          新增地址
        </div>
      </div>
      <Modal
        className={classnames("address", style.modal)}
        onClose={() => setAddressVisbile(false)}
        popup
        visible={addressVisbile}
        animationType="slide-up"
      >
        <div className={style.modalTitle}>新增收货地址</div>
        {[
          { title: "收货人", place: "请输入收货人姓名", key: "realname" },
          { title: "手机号码", place: "请输入手机号码", key: "mobile" },
          { title: "省市地区", place: "点击选择" },
        ].map((item) => (
          <div className={style.card} key={item.title}>
            <p>{item.title}</p>
            <InputItem
              onClick={() => {
                if (item.title === "省市地区") {
                  setChooseVisbile(Choose.province);
                }
              }}
              placeholder={item.place}
              value={
                item.key
                  ? formData[
                      item.key as keyof Pick<
                        EditAddressParam,
                        "realname" | "mobile"
                      >
                    ]
                  : mappingAddress["province"] &&
                    mappingAddress["city"] &&
                    mappingAddress["district"]
                  ? `${mappingAddress["province"]}  ${mappingAddress["city"]}  ${mappingAddress["district"]}`
                  : ""
              }
              onChange={(e) => {
                if (item.key) {
                  setFormData({ ...formData, [item.key]: e });
                }
              }}
            ></InputItem>
          </div>
        ))}
        <div className={classnames(style.card, style.detail)}>
          <p>详细地址</p>
          <TextareaItem
            value={formData.address}
            placeholder="请输入详细地址（5-120个字）"
            rows={5}
            count={120}
            onChange={(e) => {
              if (!e) e = "";
              setFormData({ ...formData, address: e });
            }}
          />
        </div>
        <div className={style.address}>
          <p>设为默认地址</p>
          <List.Item
            extra={
              <Switch
                checked={!!formData.is_default}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    is_default: e ? 1 : 0,
                  });
                }}
              />
            }
          ></List.Item>
        </div>
        <div onClick={validateForm} className={style.modalBtn}>
          完成
        </div>
      </Modal>
      <Modal
        popup
        visible={chooseVisbile !== Choose.null}
        onClose={() => setChooseVisbile(Choose.null)}
        animationType="slide-up"
      >
        {chooseVisbile === Choose.province ? (
          <div>
            <div className={style.choose}>选择省</div>
            <div className={style.province}>
              {province.map((item) => (
                <div
                  key={item.id}
                  onClick={async () => {
                    await chooseProvince(item.id);
                    setMappingAddress({
                      ...mappingAddress,
                      province: item.name,
                    });
                    setChooseVisbile(Choose.city);
                  }}
                >
                  {item.name}
                </div>
              ))}
            </div>
          </div>
        ) : chooseVisbile === Choose.city ? (
          <div>
            <div className={style.choose}>选择市</div>
            <div className={style.province}>
              {city.map((item) => (
                <div
                  key={item.id}
                  onClick={async () => {
                    await chooseCity(item.id);
                    setMappingAddress({
                      ...mappingAddress,
                      city: item.name,
                    });
                    setChooseVisbile(Choose.region);
                  }}
                >
                  {item.name}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <div className={style.choose}>选择区</div>
            <div className={style.province}>
              {region.map((item) => (
                <div
                  key={item.id}
                  onClick={() => {
                    chooseRegion(item.id);
                    setMappingAddress({
                      ...mappingAddress,
                      district: item.name,
                    });
                    setChooseVisbile(Choose.null);
                  }}
                >
                  {item.name}
                </div>
              ))}
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
