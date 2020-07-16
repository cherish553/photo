export interface GoodsListData {
   class_id: string
   name: string
   goodsList: GoodsList
}
export interface GoodsList {
   current_page: number
   data: DataDetail[]
   last_page: number
   per_page: number
   to: number
   total: number
}
export interface DataDetail {
   id: number
   index_img: string
   is_recommend: number
   min_price: string
   name: string
}
export interface GoodsListPageParam {
   page: number
   size: number
   class_id: string
}