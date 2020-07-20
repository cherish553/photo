import { get, post, del } from '@axios'
import { getLoginParam, getLoginData, UserIndexData, EditAddressParam, AreaListParam } from './api'
// 印品列表页接口
export const getLogin = (data: getLoginParam): Promise<getLoginData> => get(`wxLogin`, data)

// 个人中心
export const getUserIndex = (): Promise<UserIndexData> => get(`userIndex`)

// 收货地址列表
export const getAddressList = () => get(`addressList`, { page: 1 })

// 用户新增编辑收货地址
export const postEditAddress = (data: EditAddressParam) => post(`editAddress`, data)

// 省市区列表
export const getAreaList = (data: AreaListParam) => get(`areaList`, data)