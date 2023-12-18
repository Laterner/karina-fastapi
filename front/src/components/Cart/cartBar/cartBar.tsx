import { CardButton } from '../../../shared/styledComponents/Buttons'
import CartCard from '../cartCard/cartCard'
import { CartBarContainer, CartBarFooter } from './cartBar.styled'
import { useCartStore } from '../store/CartStore'
import { observer } from 'mobx-react-lite'

const CartBar = () => {
  const cartStore = useCartStore()
  const cards = cartStore.state.cart_cards

  function getNoun(number: number, one: string, two: string, five: string) {
    let n = Math.abs(number)
    n %= 100
    if (n >= 5 && n <= 20) {
      return five
    }
    n %= 10
    if (n === 1) {
      return one
    }

    if (n >= 2 && n <= 4) {
      return two
    }

    return five
  }

  return (
    <CartBarContainer>
      <h2>Корзина</h2>
      {cards.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        <>
          {cards.map(card => (
            <CartCard card={card} key={card.id} />
          ))}
        </>
      )}
      {cards.length > 0 && (
        <>
          <h4>Итого:</h4>
          <CartBarFooter>
            <h2>
              {cartStore.state.cart_count}{' '}
              {cartStore.state.cart_count &&
                getNoun(cartStore.state.cart_count, 'товар', 'товара', 'товаров')}
            </h2>
            <h2>{cartStore.getCartPrice} ₽</h2>
            <CardButton color={'#90ee90'}>
              <p>Купить</p>
            </CardButton>
          </CartBarFooter>
        </>
      )}
    </CartBarContainer>
  )
}

export default observer(CartBar)
