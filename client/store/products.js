const GET_PRODUCTS = 'GET_PRODUCTS'
const SET_SEARCH_CATEGORY = 'SET_SEARCH_CATEGORY'

export const state = () => ({
  products: [],
  selectedCategory: 0
})

export const mutations = {
  [GET_PRODUCTS]: (state, products) => {
    state.products = products
  },
  [SET_SEARCH_CATEGORY]: (state, selectedCategory) => {
    state.selectedCategory = selectedCategory
  }
}

export const actions = {
  setCategory ({ commit }, selectedCategory) {
    commit(SET_SEARCH_CATEGORY, selectedCategory)
  },
  async fetchProducts ({ commit, state }) {
    try {
      const product = await this.$productsRepo.getProducts()
      if (state.selectedCategory !== 0) {
        const products = product.filter(prod => prod.categoryID === state.selectedCategory)
        commit(GET_PRODUCTS, products)
      } else {
        commit(GET_PRODUCTS, product)
      }
    } catch (e) {
      return Promise.reject(e)
    }
  }
}
