import { $productsRepo } from '~/repositories/products'

export default ({ $api }, inject) => {
  inject('productsRepo', $productsRepo($api))
}
