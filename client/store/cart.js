const SET_CART_PRODUCTS = 'SET_CART_PRODUCTS'
const EDIT_PRODUCT_QUANTITY = 'EDIT_PRODUCT_QUANTITY'
const REMOVE_CART_PRODUCT = 'REMOVE_CART_PRODUCT'

export const state = () => ({
  cart: []
})
export const mutations = {
  [SET_CART_PRODUCTS]: (state, product) => {
    state.cart.unshift({
      ...product,
      quantity: 1
    })
  },
  [EDIT_PRODUCT_QUANTITY]: (state, product) => {
    const searchProduct = state.cart.find(n => n.id === product.id)
    const indexProduct = state.cart.indexOf(searchProduct)
    state.cart.splice(indexProduct, 1, product)
  },
  [REMOVE_CART_PRODUCT]: (state, id) => {
    state.cart = state.cart.filter(n => n.id !== id)
  }
}

export const actions = {
  setCart ({ commit }, product) {
    commit(SET_CART_PRODUCTS, product)
  },
  editProductQuantity ({ commit }, product) {
    commit(EDIT_PRODUCT_QUANTITY, product)
  },
  removeCartProduct ({ commit }, id) {
    commit(REMOVE_CART_PRODUCT, id)
  }
}
