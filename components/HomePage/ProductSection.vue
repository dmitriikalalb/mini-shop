<template lang="pug">
.container
  el-row
    el-col(:span='7' v-for='product in products' :key='product.id' style='margin: 25px')
      el-card(:body-style="{ padding: '0px' }")
        img.image(:src="require(`~/assets/img/${product.image}`)")
        div(style='padding: 14px;')
          span {{ product.title }}
          .price ₽{{ product.price }}
          el-button.button(v-if="isProductOnCart(product.id)" @click="addToCart(product)") Добавить в корзину
          el-button.button(v-else @click="removeProduct(product.id)") Удалить из корзины
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
    }),
    ...mapState('cart', {
      cart: state => state.cart
    })
  },
  methods: {
    ...mapActions('products', {
      fetchProducts: 'fetchProducts'
    }),
    ...mapActions('cart', {
      setCart: 'setCart',
      removeCartProduct: 'removeCartProduct'
    }),
    addToCart (product) {
      this.setCart(product)
    },
    removeProduct (id) {
      this.removeCartProduct(id)
    },
    isProductOnCart (id) {
      return this.cart.filter(product => product.id === id).length === 0
    }
  }
}
</script>

<style scoped>

</style>
