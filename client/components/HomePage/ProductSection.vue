<template lang="pug">
el-row(:gutter="5")
  el-col.product-section(v-for="product in products" :key="product.id" :span="8")
    product-card(:product="product")
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
  watch: {
    cart () {
      this.mainBtnInit()
    }
  },
  async mounted () {
    try {
      this.telegram = window.Telegram.WebApp
      this.mainBtnInit()
      this.telegram.MainButton.onClick(this.goToCart)
      await this.fetchProducts()
    } catch (e) {
      throw new Error(e)
    }
  },
  methods: {
    ...mapActions('products', {
      fetchProducts: 'fetchProducts'
    }),
    mainBtnInit () {
      this.telegram.MainButton.setParams({
        text: 'Посмотреть заказ',
        color: '#5CB87A',
        is_visible: Boolean(this.cart.length > 0)
      })
    },
    goToCart () {
      this.$router.push('/cart')
    }
  }
}
</script>
