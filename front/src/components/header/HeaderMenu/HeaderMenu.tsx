import { Box } from '@chakra-ui/layout';
import { Link } from 'react-router-dom';
import { redirectToOrdersMonitoring } from '../../../shared/routing';

export default function HeaderMenu() {
  return (
    <Box w="100%" mt={10} mb={10}>
      <ul className="menu-main">
        <li>
          <Link to="/">Главная</Link>
        </li>
        <li>
          <Link to="/shop">Магазин</Link>
        </li>
        <li>
          <Link to="/dsggddfsgfs">Тест</Link>
        </li>
        <li>
          <Link to="/shop/product/1">Product</Link>
        </li>
        <li>
          <a href='#' onClick={() => redirectToOrdersMonitoring()}>Admin Panel</a>
        </li>
      </ul>
    </Box>
  );
}
