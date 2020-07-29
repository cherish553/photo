import { postUploadImage as PostUploadImage } from '@api/user'
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

// 时间转换
export const changeMonth = (date: string | Date | number) => {
    if (!date) return null;
    const time = new Date(date);
    const year = time.getFullYear();
    let month: string | number = time.getMonth() + 1;
    month = month > 9 ? month : `0${month}`;
    const day = time.getDate();
    return `${year}-${month}-${day}`;
};

// 公共图片上传
export async function postUploadImage(fileBlob: any): Promise<string | false> {
    const reader = new FileReader();
    const formData = new FormData()
    reader.readAsDataURL(fileBlob);
    return new Promise(resolve => {
        reader.addEventListener('load', async () => {
            formData.append('img', reader.result as string)
            resolve(await PostUploadImage(formData))
        });
    })
}