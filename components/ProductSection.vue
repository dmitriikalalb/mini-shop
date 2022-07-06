<template lang="pug">
.container
  el-row
    el-col(:span='7' v-for='product in products' :key='product.id' style='margin: 25px')
      el-card(:body-style="{ padding: '0px' }")
        img.image(:src="require(`~/assets/img/${product.image}`)")
        div(style='padding: 14px;')
          span {{ product.title }}
          .price ₽{{ product.price }}
          el-button.button(type='text') Добавить в корзину
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'ProductSection',
  async fetch () {
    try {
      await this.fetchProducts()
    } catch (e) {
      throw new Error(e)
    }
  },
  computed: {
    ...mapState('products', {
      products: state => state.products
    })
  },
  methods: {
    ...mapActions('products', {
      fetchProducts: 'fetchProducts'
    })
  }
}
</script>

<style scoped>

</style>
