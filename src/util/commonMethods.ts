// search转换为对象
export function query<T>(str: string): T | {} {
    if (!str.length) return false
    const arr = str.split('?')
    arr.shift()
    return arr.reduce((pre: { [propName: string]: any }, now) => {
        const data = now.split('=')
        pre[data[0]] = data[1]
        return pre
    }, {})
}
// 判断是否为空
export function judgeSearchData<T>(queryData: string, param: string) {
    const data = query<T>(queryData)
    if (!Object.keys(data).includes(param)) return false
    return (data as T)[param as keyof T];
}

