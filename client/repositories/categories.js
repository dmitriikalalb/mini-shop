const url = '/categories'

export const $categoriesRepo = request => ({

  getCategories: () => request({
    method: 'GET',
    url
  })

})
