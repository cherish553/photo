export interface getLoginParam {
   code: string
}
export interface getLoginData {
   access_token: string
   expires_in: string
   refresh_token: string
   token_type: string
}
export interface UserIndexData {
   address: string
   avatarUrl: string
   commission: string
   name: string
   sex: string
   total_commission: string
   id: string
}
export interface EditAddressParam {
   address_id: string
   realname: string
   mobile: string
   is_default: 0 | 1
   province: string
   city: string
   district: string
   address: string
}
export interface AreaListParam {
   parentId?: string
}
export interface AreaListData {
   id: string
   level: string
   name: string
   parent_id: string
}
export interface AddressListData {
   address: string
   address_id: string
   city: string
   city_name: { name: string }
   created_at: string
   default: 0 | 1
   district: string
   district_name: { name: string }
   email: string
   latitude: string
   longitude: string
   mobile: string
   province: string
   province_name: { name: string }
   realname: string
   street: string
   street_name: null
   updated_at: string
   user_id: number
   zipcode: string
}
export type AddressDetailParam = Pick<AddressListData>
export interface DelAddressParam {
   address_ids: string
}
export interface OrderListParam {
   key: 'all' | 'unpaid' | 'waitDeliver' | 'waitReceipt' | 'waitComment'
}
export interface OrderListData {
   comments: string
   discount_amount: string
   order_amount: string
   order_id: string
   order_sn: string
   pay_time: string
   post_code: string
   post_mode: string
   realname: string
   status: string
   user_id: string
}
export interface CouponListParam {
   key: '1' | '2' | '3'
}
export interface CouponListData {
   bonus_id: string
   expire_time: string
   min_goods_amount: string
   type: number
   type_money: string
   type_name: string
}
export interface OrderInfoParam {
   orderId: string
}
export interface OrderInfoData {
   order_goods: OrderGoods[]
   order_id: string
   order_sn: string
   pay_amount: string
   pay_time: string
   realname: string
}

export interface OrderGoods {
   class_id: string
   goods_id: string
   goods_spec: string
   id: string
   index_img: string
   model_id: null
   number: string
   shop_price: string
   type: string
}
export interface SettingParam {
   name: string
   sex: string
   avatarUrl: string
   address: string
}
export interface CommissionLogsParam {
   type: '1' | '2' | '3'
}
export interface ApplyWithdrawalParam {
   money: string
}
export interface WithdrawApplyParam extends CommissionLogsParam {
}