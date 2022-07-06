<template lang="pug">
.container
  el-row
    nuxt-link(to="/cart")
      el-button.round
        i.el-icon-shopping-cart-1
        | Корзина
  product-section
</template>

<script>
import ProductSection from '~/components/HomePage/ProductSection'
export default {
  name: 'ProductsPage',
  components: {
    ProductSection
  }
}
</script>
