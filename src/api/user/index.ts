import { get, post, del } from '@axios'
import { getLoginParam, getLoginData, UserIndexData, EditAddressParam, AreaListParam, AreaListData, AddressListData, AddressDetailParam, DelAddressParam, OrderListParam, OrderListData, CouponListParam, CouponListData, OrderInfoParam, OrderInfoData, SettingParam, CommissionLogsParam, ApplyWithdrawalParam, WithdrawApplyParam, WithdrawApplyData } from './api'
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
export const getOrderList = (data: OrderListParam): Promise<CommonPagination<OrderListData>> => get(`orderList`, data)

// 订单详情
export const getOrderInfo = (data: OrderInfoParam): Promise<OrderInfoData> => get(`orderInfo`, data)

// 用户红包列表
export const getCouponList = (data: CouponListParam): Promise<CommonPagination<CouponListData>> => get(`couponList`, data)

// 用户信息设置
export const postSettings = (data: SettingParam) => post(`settings`, data)

// 分佣历史
export const getCommissionLogs = (data: CommissionLogsParam) => get(`commissionLogs`, data)

// 提现申请
export const getApplyWithdrawal = (data: ApplyWithdrawalParam) => get(`applyWithdrawal`, data)

// 提现历史
export const getWithdrawApply = (data: WithdrawApplyParam): Promise<CommonPagination<WithdrawApplyData>> => get(`withdrawApply`, data)
