import type { FC } from 'react'
import { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { OrderContainer } from './Order.styled'
import { ContactDetails, ObtainingMethod, OrderDetails } from './components'
import { fetchData } from '../api/API'
import { useCartStore } from '../Cart/store/CartStore'
import { cartId, cartUrl } from '../../shared/constants'

const Order: FC = () => {
  const cartStore = useCartStore()

  useEffect(() => {
    ;(async () => {
      cartStore.setCartCards(await fetchData(cartUrl + cartId, 'GET'))
    })()
  }, [])

  return (
    <OrderContainer>
      <div>
        <ContactDetails />
        <ObtainingMethod />
      </div>
      <OrderDetails />
    </OrderContainer>
  )
}

export default observer(Order)
