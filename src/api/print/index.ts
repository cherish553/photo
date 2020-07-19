import { get, post, del } from '@axios'
import { GoodsListData, GoodsListPageParam, GoodsList, GoodsDetailData, GoodsDetailDatas, Compose } from './api'
// 印品列表页接口
export const getGoodsList = (): Promise<GoodsListData[]> => get(`goodsList`)

// 印品列表分页 
export const getGoodsListPage = (data: GoodsListPageParam): Promise<GoodsList> => get(`goodsListPage`, data)

// 印品详情
export const getGoodsDetail = (data: { id: string }): Promise<GoodsDetailDatas> => get<GoodsDetailDatas>(`goodsDetail`, data).then(res => {
    const arr = res.spec_list.reduce((pre, now) => {
        if (!~pre.size.findIndex((item: any) => (item.id === now.size_spec_id))) {
            pre.size.push({ id: now.size_spec_id, name: now.size_spec_info })
        }
        if (!~pre.style.findIndex((item: any) => (item.id === now.style_spec_id))) {
            pre.style.push({ id: now.style_spec_id, name: now.style_spec_info })
        }
        if (!~pre.paper.findIndex((item: any) => (item.id === now.paper_spec_id))) {
            pre.paper.push({ id: now.paper_spec_id, name: now.paper_spec_info })
        }
        if (!~pre.binding.findIndex((item: any) => (item.id === now.binding_spec_id))) {
            pre.binding.push({ id: now.binding_spec_id, name: now.binding_spec_info })
        }
        if (!~pre.printing.findIndex((item: any) => (item.id === now.printing_spec_id))) {
            pre.printing.push({ id: now.printing_spec_id, name: now.printing_spec_info })
        }
        return pre
    }, {
        size: [],
        style: [],
        paper: [],
        binding: [],
        printing: []
    } as Compose)
    res.compose = arr
    console.log(res)
    return res
})
// 获取优惠券列表
// export const getCouponList = ({ page }: { page: number }): (Promise<Array<CouponDetail> | []>) =>
    // get<CouponData | false>('admin/couponList', { page })
    //     .then(res => (!res ? [] : res.data))
// // 优惠券添加
// export const postAddBanner = (data: AddCouponDetail): Promise<[]> =>
//     post('admin/editCoupon', { ...data, id: '' })

// // 优惠券删除
// export const delCoupon = (data: DelIds): Promise<Boolean> => del<[]>('admin/delCoupon', data).then(res => !res.length ?? false)

// const NewUser = ['newUserActivity', 'newUserCoupon', 'newUserCouponMoney', 'newUserCouponMinMoney']

// // 新用户优惠券活动信息接口
// export const getNewUserActive = (): Promise<NewUserDetail> => get<Array<{ value: string }>>('admin/getNewUserActivity').then(res => (res.reduce((pre: NewUserDetail, now: { value: string }, index: number) => {
//     pre[NewUser[index] as keyof NewUserDetail] = now.value
//     return pre
// }, {} as NewUserDetail)))

// // 新用户优惠券活动设置接口
// export const postAddNewUserActive = (data: NewUserDetail): Promise<[]> => post('admin/addNewUserActivity', data)
