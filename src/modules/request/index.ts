import { toLowerCase } from '@yipai-front-end/lib'

const appStore = useAppStore()

/**
 * 后端返回数据格式
 */
export type BaseRequestData<requestDataType> = {
  result: number
  msg: string
  data: requestDataType
}

/**
 * 微信请求API的参数
 */
type wxReqConfig = UniNamespace.RequestOptions

/**
 * 核心请求方法
 * @returns
 */
export async function _request<requestDataType>(
  config: wxReqConfig
): Promise<BaseRequestData<requestDataType>> {
  return new Promise((resolve, reject) => {
    uni.request({
      url: `${baseUrl}${config.url}`,
      data: config.data,
      header: {
        SESSION: uni.getStorageSync('session') || '',
        ...config.header,
      },
      method: config.method,
      success: (res) => {
        let header: any = toLowerCase(res.header)
        if (header.session) {
          uni.setStorageSync('session', header.session)
        }
        let data: BaseRequestData<requestDataType> = res.data as any
        if (data.result == 1) {
          resolve(data)
        } else if (data.result == 4) {
          appStore.logout()
          reject(data)
        } else {
          uni.showToast({
            title: data.msg,
            icon: 'none',
          })
          reject(data)
        }
      },
      fail: (err) => {
        console.log('请求失败', err)
        uni.showToast({
          title: err.errMsg,
          icon: 'none',
        })
        reject(err)
      },
    })
  })
}

/**
 * 请求体的类型数据
 */
type RequestConfig = {
  url: string
  method?: 'POST' | 'GET'
  data?: any
  header?: any
}

/**
 * 请求封装体
 * @param data
 * @returns
 */
export function request<requestDataType = any>(data: RequestConfig) {
  return _request<requestDataType>({
    url: data.url,
    method: data.method || 'POST',
    data: data.data,
    header: data.header,
  })
}

/**
 * 上传文件
 * @param url 上传的url
 * @param name 需要上传的文件名称
 * @param filePath 需要上传的文件
 */
export function uploadFile({
  url,
  name,
  filePath,
}: {
  url: string
  name: string
  filePath: string
}): Promise<BaseRequestData<string>> {
  return new Promise((resolve, reject) => {
    uni.uploadFile({
      url: `${baseUrl}${url}`,
      filePath,
      name,
      header: {
        SESSION: uni.getStorageSync('session') || '',
      },
      success: (data) => {
        let res = JSON.parse(data.data)
        if (res.result === '1') {
          resolve(res)
        } else {
          console.log('发生了错误', res)
          uni.showToast({
            title: res.msg,
            icon: 'none',
          })
          reject(res)
        }
      },
      fail: (error) => {
        console.log(error)
        reject(error)
      },
    })
  })
}
