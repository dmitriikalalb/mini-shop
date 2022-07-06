const GET_PRODUCTS = 'GET_PRODUCTS'

export const state = () => ({
  products: []
})

export const mutations = {
  [GET_PRODUCTS]: (state, products) => {
    state.products = products
  }
}

export const actions = {
  async fetchProducts ({ commit }) {
    try {
      const product = await this.$productsRepo.getProducts()
      commit(GET_PRODUCTS, product)
    } catch (e) {
      return Promise.reject(e)
    }
  }
}
