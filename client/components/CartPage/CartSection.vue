<template lang="pug">
el-row.cart-section
  el-col.cart-section__head
    h1.cart-section__title ВАШ ЗАКАЗ
    nuxt-link.cart-section__button(to="/") Редактировать
  el-col(v-for='product in cart' :key='product.id')
    el-card.cart-section__card.cart-product
      el-col(:span='4')
        img.cart-product__image(:src="require(`~/assets/img/${product.image}`)")
      el-col.cart-product__info(:span='20')
        h4.cart-product__title {{ product.title }}
          wbr
          span.cart-product__quantity   X{{ product.quantity }}
        .cart-product__price ₽{{ product.price }}
    el-divider
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'CartSection',
  computed: {
    ...mapState('cart', {
      cart: state => state.cart
    })
  },
  methods: {
    ...mapActions('cart', {
      removeCartProduct: 'removeCartProduct'
    }),
    removeProduct (id) {
      this.removeCartProduct(id)
    }
  }
}
</script>
