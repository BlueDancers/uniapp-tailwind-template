export const useAppStore = defineStore('app', () => {
  const isLogin = ref(false)
  /**
   * 刷新登录状态
   */
  function reloadLogin() {
    const session = uni.getStorageSync('session')
    isLogin.value = session ? true : false
  }

  /**
   * 退出登录
   */
  function logout() {
    uni.removeStorageSync('session')
    isLogin.value = false
    uni.redirectTo({
      url: '/pages/login/index',
    })
  }
  return { isLogin, reloadLogin, logout }
})
