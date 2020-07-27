import { get, post, del } from '@axios'
export const getWorkList = () => get('worksList', { page: 1 })
// worksList