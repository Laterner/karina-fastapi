import { types } from 'mobx-state-tree'

export const CartState = types.model('CartState', {
  cart_cards: types.array(
    types.model({
      name: types.string,
      id: types.number,
      price: types.number,
      count: types.number,
    }),
  ),
  cart_count: types.maybe(types.number),
})
