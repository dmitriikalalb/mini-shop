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
      count: 0
    }
  },
  computed: {
    ...mapState('products', {
      products: state => state.products
    })
  },
  async mounted () {
    try {
      await this.fetchProducts()
    } catch (e) {
      throw new Error(e)
    }
  },
  methods: {
    ...mapActions('products', {
      fetchProducts: 'fetchProducts'
    })
  }
}
</script>
