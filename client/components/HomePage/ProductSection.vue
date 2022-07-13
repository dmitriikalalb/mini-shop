<template lang="pug">
.product-section
  product-card(
    v-for="product in products"
    :key="product.id"
    :product="product"
  )
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
  async mounted () {
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
