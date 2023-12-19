import { useEffect, useState } from 'react'
import './Orders.css'
import type { ICard } from '../Cart/cartPage.types'
import { useApiData } from '../api/API'
import NoImage from '../../no_image.png'
import { CartCardBody } from '../Cart/components/CartCard/CartCard.styled'
import { PriceText, TitleText } from '../../shared/styledComponents/Texts'
import { useCartStore } from '../Cart/store/CartStore'
import { cartId, cartUrl } from '../../shared/constants'
interface IOrder {
  name: string
  id: number
  price: number
  count: number
  date: string
}
interface IProps {
  order: IOrder
  key?: number
}

const OrderCard = ({ order }: IProps) => {
  const cartStore = useCartStore()
  const data: ICard[] = useApiData(cartUrl + cartId, 'GET')

  useEffect(() => {
    if (data) {
      cartStore.setCartCards(data)
    }
  }, [data])

  return (
    <div className="order-card">
      <div className="order-container">
        <a href="#" className="card__image">
          <img src={NoImage} alt="img not load" />
        </a>
        <CartCardBody>
          <TitleText title={order.name}>{order.name}</TitleText>
        </CartCardBody>
        <span>
          <PriceText>{order.price} ₽</PriceText>
        </span>
      </div>
    </div>
  )
}

const OrderItem = ({ order }: IProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="order-item" onClick={toggleOpen}>
      <div className="order-info">
        Заказ #{order.id} - {order.date}
      </div>
      <OrderCard order={order} />
    </div>
  )
}

const Orders = () => {
  const orders: IOrder[] = [
    {
      name: ' Книга учета А4 160 л. глянцевая ламинация',
      id: 1,
      price: 210,
      count: 1,
      date: '30.01.2023',
    },
    {
      name: ' Тетрадь КЛЕТКА 12л. КЛАССИКА (цвет.мелов.обл., 5 дизайнов в коробке)',
      id: 2,
      price: 10,
      count: 1,
      date: '13.07.2023',
    },
    {
      name: '""Совершенные женщины ислама" 5+, А5, 32 стр, мягк."',
      id: 3,
      price: 90,
      count: 1,
      date: '12.05.2023',
    },
    {
      name: '""Чудесная страна ислам: в мире загадок #1" 3+, А5, 24 стр, мягк."',
      id: 4,
      price: 70,
      count: 1,
      date: '10.02.2023',
    },
  ]

  return (
    <div className="container">
      <h1>История заказов</h1>
      {orders.map(order => (
        <OrderItem key={order.id} order={order} />
      ))}
    </div>
  )
}

export default Orders
