import { useState } from 'react';

import { PriceText, TitleText } from '../../../shared/styledComponents/Texts';
import { CardButton, CountButton } from '../../../shared/styledComponents/Buttons';
import { ICard } from '../../../pages/CartPage/cartPage.types';
import { CountInput } from '../../../shared/styledComponents/Inputs';
import NoImage from '../../../no_image.png';
import { fetchData } from '../../api/API';

import { CartCardBody, CartCardContainer, CartCardCount } from './cartCard.styled';

interface ICartCardProps {
    card: ICard;
    cards: ICard[];
    setCards: React.Dispatch<React.SetStateAction<ICard[]>>;
    setItemsCount: React.Dispatch<React.SetStateAction<number>>;
}

const url = '/delete_from_cart/?uuid=';
const cartId = 'c11589f2-ce86-4691-8953-111a33c4c3e8';

const CartCard = ({ card, cards, setCards, setItemsCount }: ICartCardProps) => {
  const [value, setValue] = useState(card.count);
  const [width, setWidth] = useState(36);
  const product_url = 'product/' + card.id;

  const handleClick = (event: 'PLUS' | 'MINUS') => {
    if (event === 'MINUS' && value > 1) {
      setValue(prev => prev - 1);
      setItemsCount(prev => prev - 1);
    }
    if (event === 'PLUS') {
      setValue(prev => prev + 1);
      setItemsCount(prev => prev + 1);
    }
    updateCount(card.id, value);
    value.toString().length >= 2 ? setWidth(12 * value.toString().length + 12) : setWidth(36);
  };

  const updateCount = (id: number, newCount: number) => {
    setCards(() => {
      const updatedObjects = [...cards];
      const index = updatedObjects.findIndex(el => el.id === id);
      updatedObjects[index].count = newCount;
      return updatedObjects;
    });
  };

  function handleChange(e: React.FormEvent<HTMLInputElement>) {
    let inputValue = 1;
    const initValue = Number(e.currentTarget.value);
    if (initValue) {
      inputValue = initValue;
      setItemsCount(inputValue);
      setWidth(12 * initValue.toString().length);
    } else {
      setItemsCount(1);
      setWidth(36);
    }
    updateCount(card.id, inputValue);
    setValue(inputValue);
  }

  const deleteCard = (id: number, value: number) => {
    setCards(cards.filter(card => card.id !== id));
    fetchData(`${url + cartId}&product_id=${id}&count=${value ? value : 1}`, 'POST');
  };

  return (
    <CartCardContainer>
      <a href={product_url} className="card__image">
        <img src={NoImage} alt="img not load" />
      </a>
      <CartCardBody>
        <TitleText title={card.name}>{card.name}</TitleText>
        <CartCardCount>
          <div>
            <CountButton onClick={() => handleClick('PLUS')}>+</CountButton>
            <CountInput
              value={value}
              style={{ width: width + 'px' }}
              min={1}
              type="number"
              onChange={e => handleChange(e)}
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
  );
};

export default CartCard;
