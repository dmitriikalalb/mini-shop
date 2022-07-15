<template lang="pug">
el-row(:gutter="5")
  el-col
    h3 Категории:
    el-select(placeholder='Select' v-model="select" :change="setSelectedCategory()")
      el-option(value='0' label="Все")
      el-option(v-for="category in categories" :key="category.id" :label="category.name" :value="category.id")
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
      telegram: null,
      select: '0'
    }
  },
  computed: {
    ...mapState('products', {
      products: state => state.products,
      selectedCategory: state => state.selectedCategory
    }),
    ...mapState('cart', {
      cart: state => state.cart
    }),
    ...mapState('categories', {
      categories: state => state.categories
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
      this.telegram.BackButton.hide()
      this.telegram.MainButton.onClick(this.goToCart)
      await this.fetchProducts()
      await this.fetchCategories()
    } catch (e) {
      throw new Error(e)
    }
  },
  methods: {
    ...mapActions('products', {
      fetchProducts: 'fetchProducts',
      setCategory: 'setCategory'
    }),
    ...mapActions('categories', {
      fetchCategories: 'fetchCategories'
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
    },
    async setSelectedCategory () {
      this.setCategory(parseInt(this.select))
      await this.fetchProducts()
    }
  }
}
</script>
