import NoImage from '../../no_image.png'
import './KarinaCard.css'
import { PriceText, TitleText } from '../../shared/styledComponents/Texts'
import { fetchData } from '../../components/api/API'
import { CardButton } from '../../shared/styledComponents/Buttons'
import type { IProductType } from './types/IProductType'
import { useCartStore } from '../../components/Cart/store/CartStore'
import { observer } from 'mobx-react-lite'
import { addToCartUrl, cartId } from '../../shared/constants'

interface IKarinaCardProps {
  card: IProductType
}
const KarinaCard = ({ card }: IKarinaCardProps) => {
  const { name, id, price } = card
  const cartStore = useCartStore()
  const product_url = 'shop/product/' + id

  return (
    <div className="card">
      <div className="card__top">
        <a href={product_url} className="card__image">
          <img src={NoImage} alt="img not load" />
        </a>
        {/* <div class="card__label">${el.price_with_sell} ₽ (-10%)</div> */}
      </div>
      <div className="card__bottom">
        {/* <div class="card__prices">
                    <div class="card__price card__price--common">1000</div>
                </div> */}
        <TitleText title={name}>
          <a href={product_url} className="card__title">
            {name}
          </a>
        </TitleText>
        <div className="card__bottom__buy-container">
          <div className="price-count_container">
            <PriceText>{price} ₽</PriceText>
          </div>

          <CardButton
            color="#ff6633"
            className={'add_elem'}
            onClick={() => {
              cartStore.addCard({ ...card, count: 1 })
              fetchData(`${addToCartUrl + cartId}&product_id=${id}&count=1`, 'POST')
            }}
          >
            <p>В корзину</p>
          </CardButton>
        </div>
      </div>
    </div>
  )
}

export default observer(KarinaCard)
