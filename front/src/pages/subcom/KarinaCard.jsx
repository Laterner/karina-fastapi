// eslint-disable-next-line import/order
import NoImage from '../../no_image.png';

import './KarinaCard.css';
import { useCookies } from 'react-cookie';
import { useState } from 'react';

import { PriceText } from '../../shared/styledComponents/Texts';
import { fetchData } from '../../components/api/API';
import { CardButton } from '../../shared/styledComponents/Buttons';
import { TitleText } from '../../shared/styledComponents/Texts';

export default function KarinaCard(props) {
    const { name, id, price } = props;
    const [cookies, setCookie] = useCookies(['cart']);

    const url = '/add_to_cart/?uuid=';
    const cartId = 'c11589f2-ce86-4691-8953-111a33c4c3e8';

    const product_url = 'product/' + id;

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
                        onClick={() => fetchData(`${url + cartId}&product_id=${id}&count=1`, 'POST')}
                    >
                        <p>В корзину</p>
                    </CardButton>
                </div>
            </div>
        </div>
    );
}
