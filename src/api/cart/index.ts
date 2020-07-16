import { get, post, del } from '@axios'
import { IndexData } from './api'
export const getCartList = (): Promise<IndexData> => get(`cartList`)

// const getCartList = ()=>