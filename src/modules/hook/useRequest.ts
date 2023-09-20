type Service<P extends any[], R> = (...args: P) => Promise<R>

/**
 * 自动维护请求状态的hook
 */
export function useRequest<P extends any[], R>(request: Service<P, R>) {
  let loading = ref(false) // 加载状态

  async function run(...params: P): Promise<R> {
    loading.value = true
    try {
      return await request(...params)
    } finally {
      loading.value = false
    }
  }

  return {
    loading,
    run,
  }
}