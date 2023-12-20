import type { FC } from 'react'
import type { ICard } from '../../cartPage.types'
import NoImage from '../../../../../no_image.png'
import { CartCardBody, CartCardContainer, CartCardCount } from './CartCard.styled'
import { observer } from 'mobx-react-lite'
import { useCartStore } from '../../store/CartStore'
import { InputNumber } from 'antd'
import cn from 'classnames'
import { fetchData } from '../../../../api/API'
import { cartId, deleteFromCartUrl } from '../../../../../shared/constants'
import { PriceText, TitleText } from '../../../../../shared/styledComponents/Texts'
import { CardButton, CountButton } from '../../../../../shared/styledComponents/Buttons'

interface ICartCardProps {
  card: ICard
  disabledInput?: boolean
}

const CartCard: FC<ICartCardProps> = ({ card, disabledInput }) => {
  const cartStore = useCartStore()
  const cardCount = cartStore.getCardCount(card.id)
  const product_url = 'product/' + card.id

  const handleClick = (event: 'PLUS' | 'MINUS') => {
    if (cardCount) {
      if (event === 'MINUS' && cardCount > 1 && cartStore.state.cart_count) {
        cartStore.updateCartCount(cartStore.state.cart_count - 1)
        cartStore.updateCardCount(card.id, cardCount - 1)
      }

      if (event === 'PLUS' && cartStore.state.cart_count) {
        cartStore.updateCartCount(cartStore.state.cart_count + 1)
        cartStore.updateCardCount(card.id, cardCount + 1)
      }
    }
  }

  function handleChange(initValue: number) {
    let inputValue = 1

    if (initValue) {
      inputValue = initValue
      cartStore.updateCardCount(card.id, inputValue)
      cartStore.updateCartCount(inputValue)
    } else {
      cartStore.updateCardCount(card.id, 1)
      cartStore.updateCartCount(1)
    }
    cartStore.updateCardCount(card.id, inputValue)
    cartStore.updateCartCount(inputValue)
  }

  const deleteCard = async (id: number, count: number) => {
    cartStore.deleteCard(id)
    await fetchData(
      `${deleteFromCartUrl + cartId}&product_id=${id}&count=${count ? count : 1}`,
      'POST',
    )
    cartStore.setCartCards(await fetchData('/cart/?uuid=' + cartId, 'GET'))
  }

  return (
    <CartCardContainer>
      <a href={product_url} className="card__image">
        <img src={NoImage} alt="img not load" />
      </a>
      <CartCardBody>
        <TitleText title={card.name}>{card.name}</TitleText>
        <CartCardCount>
          <div className={cn(disabledInput && 'count-input', 'counter-container')}>
            {!disabledInput && <CountButton onClick={() => handleClick('PLUS')}>+</CountButton>}
            <InputNumber
              value={cardCount}
              disabled={disabledInput}
              min={1}
              max={1000}
              controls={false}
              bordered={false}
              onChange={count => count !== null && handleChange(count)}
            />
            {!disabledInput && <CountButton onClick={() => handleClick('MINUS')}>-</CountButton>}
          </div>
        </CartCardCount>
      </CartCardBody>
      <span>
        <PriceText>{card.price} ₽</PriceText>
        <CardButton color="#ff6161" onClick={() => deleteCard(card.id, card.count)}>
          <p>Удалить</p>
        </CardButton>
      </span>
    </CartCardContainer>
  )
}

export default observer(CartCard)
