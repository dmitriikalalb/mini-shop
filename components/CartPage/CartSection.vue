<template lang="pug">
el-row
  el-col(:span='7' v-for='product in cart' :key='product.id' style='margin: 25px')
    el-card(:body-style="{ padding: '0px' }")
      img.image(:src="require(`~/assets/img/${product.image}`)")
      div(style='padding: 14px;')
        span {{ product.title }}
        .price ₽{{ product.price }}
        el-button.button(@click="removeProduct(product.id)") Удалить из корзины
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
