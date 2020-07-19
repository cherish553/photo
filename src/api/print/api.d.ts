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
export interface GoodsDetailData {
   desc: Desc
   id: string
   img_list: ImgList[]
   index_img: string
   is_recommend: 0 | 1
   min_price: string
   name: string
   spec_list: SpecList[]
}
export interface GoodsDetailDatas extends GoodsDetailData {
   compose: Compose
}
export interface Compose {
   'binding': {
      id: string
      name: string
   }[]
   'paper': {
      id: string
      name: string
   }[]
   'printing': {
      id: string
      name: string
   }[]
   'size': {
      id: string
      name: string
   }[]
   'style': {
      id: string
      name: string
   }[]
}

export interface Desc {
   desc: string
   service_introduction: string
}
export interface ImgList {
   img_url: string
   id: string
}
export interface SpecList {
   binding_spec_id: string
   binding_spec_info: string
   goods_id: string
   id: string
   number: string
   paper_spec_id: string
   paper_spec_info: string
   price: string
   printing_spec_id: string
   printing_spec_info: string
   size_spec_id: string
   size_spec_info: string
   style_spec_id: string
   style_spec_info: string
}