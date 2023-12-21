import type { FC } from 'react'
import { useEffect } from 'react'
import { CartPopupContainer } from './CartPopup.styled'
import { useCartStore } from '../../../Cart/store/CartStore'
import { observer } from 'mobx-react-lite'
import { CheckCircleTwoTone } from '@ant-design/icons'

const CartPopup: FC = () => {
  const cartStore = useCartStore()
  const showPopup = cartStore.isShowPopup

  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => {
        cartStore.setShowPopup(false)
      }, 5000)

      return () => {
        clearTimeout(timer)
      }
    }
  }, [showPopup])

  return (
    <div>
      {showPopup && (
        <CartPopupContainer>
          <p>Товар добавлен в корзину</p>
          <CheckCircleTwoTone twoToneColor="#52c41a" />
        </CartPopupContainer>
      )}
    </div>
  )
}

export default observer(CartPopup)
