const SET_CART_PRODUCTS = 'SET_CART_PRODUCTS'
const REMOVE_CART_PRODUCT = 'REMOVE_CART_PRODUCT'

export const state = () => ({
  cart: []
})
export const mutations = {
  [SET_CART_PRODUCTS]: (state, product) => {
    state.cart.unshift(product)
  },
  [REMOVE_CART_PRODUCT]: (state, id) => {
    state.cart = state.cart.filter(n => n.id !== id)
  }
}

export const actions = {
  setCart ({ commit }, product) {
    commit(SET_CART_PRODUCTS, product)
  },
  removeCartProduct ({ commit }, id) {
    commit(REMOVE_CART_PRODUCT, id)
  }
}
