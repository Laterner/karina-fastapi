import { types } from 'mobx-state-tree'
import { CartState } from './models'
import makeInspectable from 'mobx-devtools-mst'
import type { ICard } from '../cartPage.types'
import { createContext, useContext } from 'react'
import { RequestState } from '../../../../stores/models'

export const CartStore = types
  .model('CartStore', {
    state: CartState,
    isShowPopup: types.optional(types.boolean, false),
    request: types.model({
      deletingCardRequest: types.optional(RequestState, {}),
    }),
  })
  .views(store => ({
    get getCartPrice() {
      return store.state.cart_cards.reduce((acc, card) => {
        acc += card.price * card.count

        return acc
      }, 0)
    },
    getCardCount(cardId: ICard['id']) {
      return store.state.cart_cards.find(card => card.id === cardId)?.count
    },
  }))
  .actions(store => ({
    setCartCards: (cards: ICard[]) => {
      store.state.cart_cards.replace(cards)
    },
  }))
  .actions(store => ({
    deleteCard: (cardId: ICard['id']) => {
      store.request.deletingCardRequest.loading()
      if (!cardId) store.request.deletingCardRequest.failed()
      store.state.cart_cards.filter(card => card.id !== cardId)
      store.request.deletingCardRequest.finished()
    },
    updateCardCount: (cardId: ICard['id'], cardCount: ICard['count']) => {
      const cardIndex = store.state.cart_cards.findIndex(card => card.id === cardId)
      store.state.cart_cards[cardIndex].count = cardCount
    },
    updateCartCount: (cartCount: number) => {
      store.state.cart_count = cartCount
    },
    setCartCount() {
      store.state.cart_count = store.state.cart_cards.reduce((acc, card) => {
        acc += card.count

        return acc
      }, 0)
    },
    addCard: (card: ICard) => {
      const existingCard = store.state.cart_cards.find(cartCard => cartCard.id === card.id)

      if (existingCard) {
        existingCard.count += 1
      } else {
        store.state.cart_cards.push(card)
      }
    },
    setShowPopup: (show: boolean) => {
      store.isShowPopup = show
    },
  }))

export const cartStore = CartStore.create({
  state: {},
  request: {},
})

export const CartStoreContext = createContext(cartStore)
export const useCartStore = () => useContext(CartStoreContext)

makeInspectable(cartStore)
