import { Box } from '@chakra-ui/layout';
import { Link } from 'react-router-dom';
import { redirectToOrdersMonitoring } from '../../../shared/routing';
import CabinetBlock from "../CabinetBlock/CabinetBlock";

interface IProps {
  auth: boolean
}

export default function HeaderMenu({auth}: IProps) {
  return (
    <Box w="100%" mt={10} mb={10} className='menu-container'>
      <ul className="menu-main">
        <li>
          <Link to="/">Главная</Link>
        </li>
        <li>
          <Link to="/shop">Магазин</Link>
        </li>
        <li>
          <Link to="/cart">Корзина</Link>
        </li>
        {/* <li>
          <Link to="/dsggddfsgfs">Тест</Link>
        </li>
        <li>
          <Link to="/shop/product/1">Product</Link>
        </li>
        <li>
          <a href='/admin' onClick={() => redirectToOrdersMonitoring()}>Admin Panel</a>
        </li> */}
      </ul>
      <CabinetBlock auth={auth}/>
    </Box>
  );
}
