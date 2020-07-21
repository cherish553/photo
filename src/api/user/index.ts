import { get, post, del } from '@axios'
import { getLoginParam, getLoginData, UserIndexData, EditAddressParam, AreaListParam, AreaListData, AddressListData, AddressDetailParam, DelAddressParam, OrderListParam ,OrderListData} from './api'
// 印品列表页接口
export const getLogin = (data: getLoginParam): Promise<getLoginData> => get(`wxLogin`, data)

// 个人中心
export const getUserIndex = (): Promise<UserIndexData> => get(`userIndex`)

// 收货地址列表
export const getAddressList = (): Promise<CommonPagination<AddressListData>> => get(`addressList`, { page: 1 })

// 用户新增编辑收货地址
export const postEditAddress = (data: EditAddressParam) => post(`editAddress`, { ...data, country: 1 })

// 省市区列表
export const getAreaList = (data: AreaListParam): Promise<AreaListData[]> => get(`areaList`, data)

// 收货地址详情
export const getAddressDetail = (data: AddressDetailParam): Promise<AddressListData> => get(`addressDetail`, data)
// addressDetai

// 删除收货地址
export const delAddress = (data: DelAddressParam) => del(`delAddress`, data)

// 用户订单列表
export const getOrderList = (data: OrderListParam):Promise<CommonPagination<OrderListData>> => get(`orderList`, data)