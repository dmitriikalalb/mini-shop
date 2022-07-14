<template lang="pug">
el-row(:gutter="5")
  el-col.product-section(v-for="product in products" :key="product.id" :span="8")
    product-card(:product="product" @productClick="toCheckout")
</template>

<script>
import { mapActions, mapState } from 'vuex'
import ProductCard from '~/components/ProductCard'

export default {
  name: 'ProductSection',
  components: {
    ProductCard
  },
  data () {
    return {
      telegram: null
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
  async mounted () {
    try {
      this.telegram = window.Telegram.WebApp
      await this.fetchProducts()
      await this.toCheckout()
    } catch (e) {
      throw new Error(e)
    }
  },
  methods: {
    ...mapActions('products', {
      fetchProducts: 'fetchProducts'
    }),
    toCheckout () {
      if (this.cart.length > 0) {
        this.telegram.MainButton.text = 'Test :)'
        this.telegram.MainButton.show()
        this.telegram.MainButton.onClick(this.$router.push('/cart'))
      } else {
        this.telegram.MainButton.hide()
      }
    }
  }
}
</script>
