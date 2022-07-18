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
import { mapState } from 'vuex'

export default {
  name: 'CartSection',
  // data () {
  //   return {
  //     telegram: null
  //   }
  // },
  computed: {
    ...mapState('cart', {
      cart: state => state.cart
    })
  },
  // mounted () {
  //   this.telegram = window.Telegram.WebApp
  //   this.telegram.BackButton.show()
  //   this.telegram.BackButton.onClick(() => {
  //     this.$router.push('/')
  //   })
  //   this.telegram.MainButton.setParams({
  //     text: `Оплатить ₽${this.getTotalPrice()}`,
  //     color: '#5CB87A',
  //     is_visible: Boolean(this.cart.length > 0)
  //   })
  // },
  // methods: {
  //   getTotalPrice () {
  //     let total = 0
  //     const cartProducts = this.cart
  //     for (let i = 0; i < cartProducts.length; i++) {
  //       const quantity = cartProducts[i].quantity
  //       const price = cartProducts[i].price
  //       total += price * quantity
  //     }
  //     return total
  //   }
  // }
}
</script>
