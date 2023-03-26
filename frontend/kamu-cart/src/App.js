import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { store } from './redux/store'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import Order from "./pages/Order";
import Shop from "./pages/Shop";

const App = () => (
  <>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/cart" element={<Cart />} />
          <Route path="/cart/:id" element={<Order />} />
          <Route path="/order/:id" element={<Shop />} />
        </Routes>
      </Router>
   </Provider>
  </>
);
ReactDOM.render(<App />, document.getElementById("app"));
