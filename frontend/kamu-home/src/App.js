import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { store } from './redux/store'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Landing from "./pages/Landing";
import Error from "./pages/Error";
import Register from "./pages/Register";
import Product from 'kamu_products/Product';
import Category from 'kamu_products/Category';
import Cart from 'kamu_cart/Cart';
import Order from 'kamu_cart/Order';
import Shop from 'kamu_cart/Shop';

const App = () => (
  <> 
   <Provider store={store}>
    <Router>
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/category/:id" element={<Category />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/cart/:id" element={<Order />} />
        <Route path="/order/:id" element={<Shop />} />
      </Routes>
    </Router>
   </Provider> 
  </>
);
ReactDOM.render(<App />, document.getElementById("app"));

// expose store when run in Cypress
if (window.Cypress) {
  window.store = store
}
