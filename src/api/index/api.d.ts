export interface IndexData {
   bannerList: BannerList[]
   hotList:HotList[]
}
export interface BannerList {
   id: number
   img_url: string
   jump_link: string
   sort: number
   title: string
}
export interface HotList {
   id: number
   index_img: string
   min_price: string
   name: string
}