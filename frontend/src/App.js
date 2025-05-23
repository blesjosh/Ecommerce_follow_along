import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage,SignupPage,Home,CreateProduct,Cart,MyProducts,ProductDetails , Profile , CreateAddress , SelectAddress , OrderConfirmation , MyOrderPages} from './Routes.js';


import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={< Home />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/create-product' element={<CreateProduct />} />

        <Route path='/create-product/:id' element={<CreateProduct />} />
        <Route path='/my-products' element={<MyProducts />} />
        <Route path='/cart' element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/create-address" element={<CreateAddress />} />
        <Route path="/Select-address" element={<SelectAddress />} />
        <Route path="/Order-Confirmation" element={<OrderConfirmation />} />
        <Route path="/My-order" element={<MyOrderPages />} />
      </Routes>
    </BrowserRouter>
  );
};


export default App;