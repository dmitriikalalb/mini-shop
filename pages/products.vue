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
import { createNamespacedHelpers } from 'vuex'

const { mapState, mapActions } = createNamespacedHelpers('products')
export default {
  name: 'ProductsPage',
  async fetch () {
    try {
      await this.fetchProducts()
    } catch (e) {
      throw new Error(e)
    }
  },
  computed: {
    ...mapState(['products'])
  },
  methods: {
    ...mapActions(['fetchProducts'])
  }
}
</script>

<style scoped>

</style>
