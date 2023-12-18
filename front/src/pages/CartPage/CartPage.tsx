import { useApiData } from '../../components/api/API'
import CartBar from '../../components/Cart/cartBar/cartBar'
import type { ICard } from './cartPage.types'
import { useCartStore } from '../../components/Cart/store/CartStore'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { when } from 'mobx'

const url = '/cart/?uuid='
const cartId = 'c11589f2-ce86-4691-8953-111a33c4c3e8'

const CartPage = () => {
  const cartStore = useCartStore()
  const data: ICard[] = useApiData(url + cartId, 'GET')

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
