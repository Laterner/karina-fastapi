import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HeaderMain from '../header/HeaderMain/HeaderMain';
import Main from '../../pages/MainPage';
import PageNotFound from '../../pages/PageNotFound';
import Shop from '../Shop/Shop';
import CartPage from '../../pages/CartPage/CartPage';
import ProductPage from '../../pages/ProductPage/ProductPage';
import AdminPanel from '../adminPanel/adminPanel';
import UserProfile from "../UserProfile/UserProfile";
import Orders from "../Orders/Orders";

export default function App() {
  return (
    <BrowserRouter>
      <HeaderMain />
      <div className="page_content">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:page" element={<Shop />} />
          <Route path="/shop/product/:productId" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/admin-panel" element={<AdminPanel />} />
          <Route path="/profile/:userId" element={<UserProfile />}/>
          <Route path="/orders" element={<Orders />}></Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
