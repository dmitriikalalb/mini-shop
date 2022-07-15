import { $productsRepo } from '~/repositories/products'
import { $categoriesRepo } from '~/repositories/categories'

export default ({ $api }, inject) => {
  inject('categoriesRepo', $categoriesRepo($api))
  inject('productsRepo', $productsRepo($api))
}
