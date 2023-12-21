import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HeaderMain from '../header/HeaderMain/HeaderMain'
import Shop from '../Shop/Shop'
import CartPage from '../Cart/CartPage'
import UserProfile from '../UserProfile/UserProfile'
import Orders from '../Orders/Orders'
import Order from '../Order/Order'
import Main from '../MainPage'
import ProductPage from '../ProductPage/ProductPage'
import PageNotFound from '../PageNotFound'

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
          <Route path="/profile/:userId" element={<UserProfile />} />
          <Route path="/orders" element={<Orders />}></Route>
          <Route path="/order" element={<Order />}></Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
