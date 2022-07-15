export const state = () => ({
  categories: []
})

export const mutations = {
  INIT_ROOT_CATEGORIES: (state, categories) => {
    state.categories = categories
  }
}

export const actions = {
  async  fetchCategories ({ commit }) {
    try {
      const categories = await this.$categoriesRepo.getCategories()
      commit('INIT_ROOT_CATEGORIES', categories)
      return Promise.resolve(categories)
    } catch (e) {
      return Promise.reject(e)
    }
  }
}
