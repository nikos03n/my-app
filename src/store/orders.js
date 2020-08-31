export default {
  state: {
    orders: []
  },
  mutations: {
    createOrder(state, payload) {
      state.orders.push(payload)
    }
  },
  actions: {
    async createOrder() {
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve()
        }, 4000)
      })
    }
  },
  getters: {}
}
