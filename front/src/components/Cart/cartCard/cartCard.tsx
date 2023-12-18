import type { FC } from 'react'
import { useState } from 'react'

import { PriceText, TitleText } from '../../../shared/styledComponents/Texts'
import { CardButton, CountButton } from '../../../shared/styledComponents/Buttons'
import type { ICard } from '../../../pages/CartPage/cartPage.types'
import NoImage from '../../../no_image.png'
import { fetchData } from '../../api/API'

import { CartCardBody, CartCardContainer, CartCardCount } from './cartCard.styled'
import { observer } from 'mobx-react-lite'
import { useCartStore } from '../store/CartStore'
import { InputNumber } from 'antd'

interface ICartCardProps {
  card: ICard
}

const url = '/delete_from_cart/?uuid='
const cartId = 'c11589f2-ce86-4691-8953-111a33c4c3e8'

const CartCard: FC<ICartCardProps> = ({ card }) => {
  const cartStore = useCartStore()
  const cardCount = cartStore.getCardCount(card.id)
  const [width, setWidth] = useState(36)
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
      cardCount.toString().length >= 2
        ? setWidth(12 * cardCount.toString().length + 12)
        : setWidth(36)
    }
  }

  function handleChange(initValue: number) {
    let inputValue = 1

    if (initValue) {
      inputValue = initValue
      cartStore.updateCardCount(card.id, inputValue)
      cartStore.updateCartCount(inputValue)

      setWidth(12 * initValue.toString().length)
    } else {
      cartStore.updateCardCount(card.id, 1)
      cartStore.updateCartCount(1)

      setWidth(36)
    }
    cartStore.updateCardCount(card.id, inputValue)
    cartStore.updateCartCount(inputValue)
  }

  const deleteCard = async (id: number, count: number) => {
    cartStore.deleteCard(id)
    await fetchData(`${url + cartId}&product_id=${id}&count=${count ? count : 1}`, 'POST')
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
          <div className="counter-container">
            <CountButton onClick={() => handleClick('PLUS')}>+</CountButton>
            <InputNumber
              value={cardCount}
              min={1}
              max={1000}
              controls={false}
              bordered={false}
              onChange={count => count !== null && handleChange(count)}
            />
            <CountButton onClick={() => handleClick('MINUS')}>-</CountButton>
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
