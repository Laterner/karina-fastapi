import type { FC } from 'react'
import { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { OrderContainer } from './Order.styled'
import { ContactDetails, ObtainingMethod, OrderDetails } from './components'
import { useCartStore } from '../Cart/store/CartStore'
import { Form } from 'antd'
import { fetchData } from '../../api/API'
import { cartId, cartUrl } from '../../../shared/constants'
import type { TOrderStore } from './store/OrderStore'
import { useOrderStore } from './store/OrderStore'

interface IOrderValues {
  store: TOrderStore
}

const Order: FC = () => {
  const cartStore = useCartStore()
  const orderStore = useOrderStore()
  const [form] = Form.useForm<IOrderValues>()

  useEffect(() => {
    ;(async () => {
      cartStore.setCartCards(await fetchData(cartUrl + cartId, 'GET'))
    })()
  }, [])

  return (
    <Form form={form} onFinish={orderStore.submitForm}>
      <OrderContainer>
        <div>
          <ContactDetails />
          <ObtainingMethod />
        </div>
        <OrderDetails />
      </OrderContainer>
    </Form>
  )
}

export default observer(Order)
