import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { store } from './redux/store'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Product from "./pages/Product";
import Category from "./pages/Category";

const App = () => (
  <>  
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/product/:id" element={<Product />} />
        <Route path="/category/:id" element={<Category />} />
      </Routes>
    </Router>
  </Provider>
  </>
);

ReactDOM.render(<App />, document.getElementById("app"));
