export interface CartListData {
   cart_id: string
   class_id: string
   created_at: string
   goods_id: string
   goods_info: {
      index_img: string
      name: string
      status: string
   }
   goods_spec: string
   goods_spec_info: { number: string, status: string, price: string }
   model_id: null
   number: string
   price: string
   status: string
   type: string
   updated_at: string
   user_id: string
   check: boolean
}
export interface CartListParam {
   id: string
   goods_spec?: string
   number: number
   type: '1' | '2'
   work_id?: string
}
export interface EditCartParam {
   cartId: string
   number: string
}
export type DelCartParam = Pick<EditCartParam, 'cartId'>
export interface SettlementParam {
   orderId: string
}