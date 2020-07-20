import { get, post, del } from '@axios'
import { CartListParam, CartListData, EditCartParam, DelCartParam,SettlementParam } from './api'

// 购物车列表
export const getCartList = (): Promise<CommonPagination<CartListData>> => get<CommonPagination<CartListData>>(`cartList`).then(res => {
    res.data.forEach(item => item.check = false)
    return res
})

// 新增购物车
export const postAddCart = (data: CartListParam): Promise<any> => post(`addCart`, data)

// 购物车数量变更
export const postEditCart = (data: EditCartParam) => post(`editCart`, data)

// 删除购物车
export const delCart = (data: DelCartParam) => del(`delCart`, data)

// 立即下单
export const postCreateOrder = (data: DelCartParam) => post(`createOrder`, data)

// 结算页接口
export const getSettlement = (data: SettlementParam) => get(`settlement`, data)