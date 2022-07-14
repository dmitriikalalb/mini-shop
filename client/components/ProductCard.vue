<template lang="pug">
el-card.product-card
  span(:class='`${isProductOnCart(product.id) !== 0 ? "product-card__quantity" : "product-card__quantity--hidden"}`') {{ isProductOnCart(product.id) }}
  img.product-card__image(:src="require(`~/assets/img/${product.image}`)")
  .product-card__details
    h4.product-card__title {{ product.title }}
    p.product-card__price ₽{{ product.price }}
    el-button.product-card__button(v-if="isProductOnCart(product.id) === 0" type="warning" icon='el-icon-shopping-cart-1' @click="addToCart(product)" round) Купить
    .product-card__buttons(v-else)
      el-button.product-card__button(type="warning" icon='el-icon-plus' @click="increment(product)" round)
      el-button.product-card__button(type="danger" icon='el-icon-minus' @click="decrement(product)" round)
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'ProductCard',
  props: {
    product: {
      default: () => {},
      type: Object
    }
  },
  computed: {
    ...mapState('cart', {
      cart: state => state.cart
    })
  },
  methods: {
    ...mapActions('cart', {
      setCart: 'setCart',
      editProductQuantity: 'editProductQuantity',
      removeCartProduct: 'removeCartProduct'
    }),
    addToCart (product) {
      this.setCart(product)
    },
    increment (product) {
      const quantity = this.isProductOnCart(product.id)
      const newQuantity = parseInt(quantity) + 1
      this.editProductQuantity({
        ...product,
        quantity: newQuantity
      })
    },
    decrement (product) {
      const quantity = this.isProductOnCart(product.id)
      const newQuantity = parseInt(quantity) - 1
      this.editProductQuantity({
        ...product,
        quantity: newQuantity
      })
      if (newQuantity === 0) {
        this.removeCartProduct(product.id)
      }
    },
    isProductOnCart (id) {
      const product = this.cart.find(product => product.id === id)
      if (product) {
        return product.quantity
      } else {
        return 0
      }
    }
  }
}
</script>
