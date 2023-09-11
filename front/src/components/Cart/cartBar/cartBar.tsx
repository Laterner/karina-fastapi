import { useState } from 'react';

import { ICard } from '../../../pages/CartPage/cartPage.types';
import { CardButton } from '../../../shared/styledComponents/Buttons';
import CartCard from '../cartCard/cartCard';

import { CartBarContainer, CartBarFooter } from './cartBar.styled';
interface ICartBarProps {
    cards: ICard[];
    setCards: React.Dispatch<React.SetStateAction<ICard[]>>;
}

const CartBar = ({ cards, setCards }: ICartBarProps) => {
  const totalPrice = cards.reduce((total, card) => total + card.price, 0);
  const totalItems = cards.reduce((total, card) => total + card.count, 0);
  const [itemsCount, setItemsCount] = useState(() => totalItems);

  function getNoun(number: number, one: string, two: string, five: string) {
    let n = Math.abs(number);
    n %= 100;
    if (n >= 5 && n <= 20) {
      return five;
    }
    n %= 10;
    if (n === 1) {
      return one;
    }
    if (n >= 2 && n <= 4) {
      return two;
    }
    return five;
  }

  return (
    <CartBarContainer>
      <h2>Корзина</h2>
      {cards.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        <>
          {cards.map(card => (
            <CartCard
              cards={cards}
              key={card.id}
              card={card}
              setCards={setCards}
              setItemsCount={setItemsCount}
            />
          ))}
        </>
      )}
      {cards.length > 0 && (
        <>
          <h4>Итого:</h4>
          <CartBarFooter>
            <h2>
              {itemsCount} {getNoun(itemsCount, 'товар', 'товара', 'товаров')}
            </h2>
            <h2>{totalPrice} ₽</h2>
            <CardButton color={'#90ee90'}>
              <p>Купить</p>
            </CardButton>
          </CartBarFooter>
        </>
      )}
    </CartBarContainer>
  );
};

export default CartBar;
