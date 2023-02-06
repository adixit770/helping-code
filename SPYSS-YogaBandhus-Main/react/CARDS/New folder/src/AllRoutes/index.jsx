import { Route, Routes } from "react-router-dom";
import HomePage from '../pages/HomePage'
import CartPage from '../pages/CartPage'
import CheckoutPage from '../pages/CheckoutPage'
import NotFoundPage from '../pages/NotFoundPage'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/cart" element={<CartPage />}></Route>
      <Route path="/checkout" element={<CheckoutPage />}></Route>
      <Route path="*" element={<NotFoundPage />}></Route>
    </Routes>
  );
};

export default AllRoutes;
