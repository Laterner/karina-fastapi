import React, {useEffect, useState} from 'react';
import './Orders.css'
import CartCard from "../Cart/cartCard/cartCard";
import {ICard} from "../../pages/CartPage/cartPage.types";
import {useApiData} from "../api/API";
import NoImage from "../../no_image.png";
import {CartCardBody, CartCardContainer, CartCardCount} from "../Cart/cartCard/cartCard.styled";
import {PriceText, TitleText} from "../../shared/styledComponents/Texts";
import {CardButton, CountButton} from "../../shared/styledComponents/Buttons";
import {CountInput} from "../../shared/styledComponents/Inputs";
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

const url = '/cart/?uuid=';
const cartId = 'c11589f2-ce86-4691-8953-111a33c4c3e8';
const OrderItem = ({ order }: IProps) => {
  const [isOpen, setIsOpen] = useState(false);



  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };



  return (
    <div className="order-item" onClick={toggleOpen}>
      <div className="order-info">
          Заказ #{order.id} - {order.date}
      </div>
      <OrderCard order={order} />
    </div>
  );
};

const OrderCard = ({ order }: IProps) => {

    const data: ICard[] = useApiData(url + cartId, 'GET');
    const [cards, setCards] = useState<ICard[]>([]);

    useEffect(() => {
        if (data) {
            setCards(data);
        }
    }, [data]);

  return (
    <div className="order-card">
        <div className='order-container'>
            <a href='#' className="card__image">
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
  );
};

const Orders = () => {
  const orders: IOrder[] = [
      {
          "name": " Книга учета А4 160 л. глянцевая ламинация",
          "id": 1,
          "price": 210,
          "count": 1,
          "date": "30.01.2023"
      },
      {
          "name": " Тетрадь КЛЕТКА 12л. КЛАССИКА (цвет.мелов.обл., 5 дизайнов в коробке)",
          "id": 2,
          "price": 10,
          "count": 1,
          "date": "13.07.2023"
      },
      {
          "name": "\"\"Совершенные женщины ислама\" 5+, А5, 32 стр, мягк.\"",
          "id": 3,
          "price": 90,
          "count": 1,
          "date": "12.05.2023"
      },
      {
          "name": "\"\"Чудесная страна ислам: в мире загадок #1\" 3+, А5, 24 стр, мягк.\"",
          "id": 4,
          "price": 70,
          "count": 1,
          "date": "10.02.2023"
      }
  ]

  return (
    <div className="container">
      <h1>История заказов</h1>
      {orders.map((order) => (
        <OrderItem key={order.id} order={order} />
      ))}
    </div>
  );
};

export default Orders;