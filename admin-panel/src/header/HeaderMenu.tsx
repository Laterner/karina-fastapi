import { Box } from '@chakra-ui/layout';
import { universalRedirect } from '../routing';
import './HeaderMenu.css';
export default function HeaderMenu() {
    return (
        <Box w="80%" margin="0 auto" bgColor={'#f6f6f6'}>
            <ul className="menu-main">
                <li>
                    <a href="#" onClick={() => universalRedirect('/')}>
                        Главная
                    </a>
                </li>
                <li>
                    <a href="#" onClick={() => universalRedirect('/shop')}>
                        Магазин
                    </a>
                </li>
                <li>
                    <a href="#" onClick={() => universalRedirect('/cart')}>
                        Корзина
                    </a>
                </li>
            </ul>
        </Box>
    );
}
