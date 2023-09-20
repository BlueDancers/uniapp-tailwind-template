export let baseUrl = ''

let isDev = import.meta.env.DEV

let { uniPlatform } = uni.getSystemInfoSync()
if (uniPlatform == 'web') {
  if (isDev) {
    baseUrl = '/manage/mall/admin'
    // baseUrl = '/test-manage/mall/admin'
  } else {
    baseUrl = 'https://manage.591wsh.com/mall/admin'
    // baseUrl = 'http://192.168.1.111:8000/mall/admin'
  }
} else if (uniPlatform == 'mp-weixin') {
  // baseUrl = 'https://manage.591wsh.com/mall/admin'
  baseUrl = 'http://192.168.1.111:8000/mall/admin'
}

/**
 * 福彩商家的编号
 */
export const FuCaiStoreNumber = 'SP00000116' // 线上正式的编号
// export const FuCaiStoreNumber = 'SP00000095' // 线上测试商家的编号
// export const FuCaiStoreNumber = 'SP00000041' // 测试环境的编号

export const FuCaiStoreMark = 'ZYzYBaWERX8BufSXodleWgkK1wCZN/Pr1ddf5evxh7E=' // 线上正式商家的标识
// export const FuCaiStoreMark = '7Moh/pz2W2nnl42vCLRrt2orW+IfAjGT6tBvKv0SOcc=' // 线上测试商家的标识
// export const FuCaiStoreMark = 'B3d15h7Kbknv65+RrUtonnIk5trAbBu8SbRmHzGOvdM=' // 测试环境商家的标识
