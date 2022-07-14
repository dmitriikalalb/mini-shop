const url = '/products'

export const $productsRepo = request => ({

  getProducts: () => request({
    method: 'GET',
    url
  })

})
