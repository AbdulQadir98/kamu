import React, { useState } from "react";
import { Link } from "react-router-dom";
import { selectItems } from '../redux/cartSlice'
import { useSelector } from 'react-redux'

import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import vegetables from "../assets/vegetables.jpg"

const Cart = () => {

  const items = useSelector(selectItems)
  // const { items } = useSelector((state) => state.cart)
  const [query, setQuery] = useState("")

    return ( 
        
        <div className="flex flex-col items-center py-12 min-h-[calc(100vh-64px)] bg-gray-100">
            
            <div className="flex w-full items-center"> 
              
              {/* Cart Details */}
              <div>
                <div>Name</div>
                <div>Item Count</div>
                <div>Total Amount</div>
              </div>

              {/* search bar */}
              <div className="w-72">
                  <input 
                      className="w-full rounded-lg border-none p-3 focus:outline-none" 
                      placeholder="Search Items" 
                      onChange={event => setQuery(event.target.value)}
                  />
              </div>

              {/* order button */}
              <div>Order</div>
            </div>

            {/* product card */}
            <div className="flex flex-wrap justify-center">
                {
                  items.filter(item => {
                    if (query === '') {
                      return item;
                    } else if (item.product.toLowerCase().includes(query.toLowerCase())) {
                      return item;
                    }
                    return false;
                  }).map((item, index) => (
                      <div className="flex flex-col justify-between items-center lg:w-1/5 md:w-1/2 m-3 rounded drop-shadow-md bg-white">
                       <Link to={`/product/${item.id}`}>
                        <div className="flex justify-between items-start p-1">
                            <h2 className="text-gray-900 pl-2 pt-1 title-font text-lg font-medium">{item.product}</h2>
                            <IconButton aria-label="settings">
                                <CloseIcon />
                            </IconButton>
                        </div>
                        <div className="block relative overflow-hidden">
                          <img alt="ecommerce" src={vegetables}/>
                        </div>
                        <div className="p-4">
                          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                          <p className="mt-1">Rs. {item.price}.00</p>
                          <p>- 3 +</p>
                        </div>
                       </Link>
                      </div>
                    
                  ))
                }
            </div>
        </div>
     );
}
 
export default Cart;