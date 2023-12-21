import type { FC } from 'react'
import { observer } from 'mobx-react-lite'
import { OrderDetailsContainer } from './OrderDetails.styles'
import { useCartStore } from '../../../Cart/store/CartStore'
import CartCard from '../../../Cart/components/CartCard/CartCard'
import { Button } from 'antd'

const OrderDetails: FC = () => {
  const cartStore = useCartStore()
  const cards = cartStore.state.cart_cards

  return (
    <OrderDetailsContainer>
      <h1>Заказ</h1>
      <div>
        {cards ? (
          cards.map(card => <CartCard disabledInput card={card} key={card.id} />)
        ) : (
          <p>Корзина пуста</p>
        )}
      </div>
      <div className="order-footer">
        <p>
          <b>Итого:</b> {cartStore.getCartPrice} ₽
        </p>
        <Button type="primary" htmlType="submit">
          Оформить заказ
        </Button>
      </div>
    </OrderDetailsContainer>
  )
}

export default observer(OrderDetails)
