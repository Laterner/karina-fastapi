import { useEffect, useState } from 'react';

import { useApiData } from '../../components/api/API';
import CartBar from '../../components/Cart/cartBar/cartBar';

import { ICard } from './cartPage.types';

const url = '/cart/?uuid=';
const cartId = 'c11589f2-ce86-4691-8953-111a33c4c3e8';

export default function CartPage() {
  const data: ICard[] = useApiData(url + cartId, 'GET');
  const [cards, setCards] = useState<ICard[]>([]);

  useEffect(() => {
    if (data) {
      setCards(data);
    }
  }, [data]);

  return <CartBar cards={cards} setCards={setCards} />;
}
