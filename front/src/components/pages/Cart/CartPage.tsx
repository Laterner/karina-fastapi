import CartBar from './components/CartBar/CartBar'
import type { ICard } from './cartPage.types'
import { useCartStore } from './store/CartStore'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { when } from 'mobx'
import { useApiData } from '../../api/API'
import { cartUrl, cartId } from '../../../shared/constants'

const CartPage = () => {
  const cartStore = useCartStore()
  const data: ICard[] = useApiData(cartUrl + cartId, 'GET')

  useEffect(() => {
    cartStore.setCartCards(data)
    cartStore.setCartCount()
  }, [data])

  useEffect(() => {
    const disposers = [
      when(
        () => cartStore.request.deletingCardRequest.state.isLoading,
        () => {
          cartStore.setCartCards(data)
        },
      ),
    ]

    return () => {
      disposers.forEach(dispose => dispose())
    }
  }, [])

  return <CartBar />
}

export default observer(CartPage)
