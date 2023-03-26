import React, { useState , useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { selectItems, selectTotal, selectCount } from '../redux/cartSlice'
import { useSelector, useDispatch } from 'react-redux'
import { increase, decrease, removeItem, clearCart, changeCartName } from '../redux/cartSlice'
import { newOrder } from "../services/order.service";
import { getCurrentUser } from "../services/auth.service";

import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import vegetables from "../assets/vegetables.jpg"
import empty from "../assets/empty.png"

const Cart = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate();
  const { id } = useParams(); 
  const user = getCurrentUser();
  
  // const { items } = useSelector((state) => state.cart)
  const items = useSelector(selectItems)
  const totalPrice = useSelector(selectTotal)
  const count = useSelector(selectCount)
  const [query, setQuery] = useState("")

  const handleOrder = async (e) => {
    e.preventDefault(); 

    await newOrder(user.id, id, count, totalPrice, items)
      .then(() => dispatch(clearCart()))
      .then(() => dispatch(changeCartName('CurrentCart')))
      .then(() => navigate("/cart"))     
  };

  return ( 
      <div className="flex flex-col items-center px-16 py-12 bg-gray-100">
          <div className="flex w-full items-center justify-between"> 
            
            {/* Cart Details */}
            <div className='flex'>
              <div className='bg-white rounded-lg mx-2 px-4 py-2'>
                <div data-cy='cart-name' className='text-2xl'>{id}</div>
                <div className='text-sm'>Cart</div>
              </div>
              <div className='bg-white rounded-lg mx-2 px-4 py-2'>
                <div data-cy='cart-price' className='text-2xl'>${totalPrice}.00</div>
                <div className='text-sm'>Total Price</div>
              </div>
              <div className='bg-white rounded-lg mx-2 px-4 py-2'>
                <div data-cy='cart-count' className='text-2xl'>{count}</div>
                <div className='text-sm'>Item Count</div>
              </div>
            </div>
            {/* search bar */}
            <div className="w-72">
                <input 
                    className="w-full rounded-lg border-none p-3 focus:outline-none" 
                    placeholder="Search Items" 
                    onChange={event => setQuery(event.target.value)}
                />
            </div>
            {/* buttons */}
            <Stack spacing={2} direction="row">
              <Button variant="outlined"
                data-cy='cart-clear'
                onClick={() => {
                  dispatch(clearCart())
                }}>
                Clear Cart
              </Button>
              { (items.length > 0 ) ?
                <Button variant="contained" onClick={handleOrder}>
                  Order
                </Button>
              :
                <Button variant="contained" disabled>
                  Order
                </Button>
              }
              
            </Stack>
          </div>
          {/* product card */}
          <div className="flex flex-wrap justify-center pt-12">
              { (items.length > 0 ) ?
                items.filter(item => {
                  if (query === '') {
                    return item;
                  } else if (item.name.toLowerCase().includes(query.toLowerCase())) {
                    return item;
                  }
                  return false;
                }).map((item, index) => (
                  (item.unit > 0 ) ?
                    <div className="flex flex-col justify-between items-center lg:w-1/5 md:w-1/2 m-3 rounded drop-shadow-md bg-white">
                      <div className="flex justify-between items-start p-1">
                          <h2 className="text-gray-900 pl-2 pt-1 title-font text-lg font-medium">{item.name}</h2>
                          <IconButton onClick={()=> dispatch(removeItem(item))}>
                              <CloseIcon />
                          </IconButton>
                      </div>
                      <Link to={`/product/${item.id}`}>
                        <div className="block relative overflow-hidden">
                          <img alt="ecommerce" src={vegetables}/>
                        </div>
                        <div className="p-4">
                          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                          <p className="mt-1">Rs. {item.price}.00</p>
                        </div>
                      </Link>
                      <div className="pb-2">
                        <ButtonGroup variant="outlined" aria-label="outlined button group">
                          <Button onClick={()=> dispatch(decrease(item))}>
                            <RemoveShoppingCartIcon />
                          </Button>
                          <Button>{item.unit}</Button>
                          <Button onClick={()=> dispatch(increase(item))} variant="contained" disableElevation>
                            <AddShoppingCartIcon />
                          </Button>
                        </ButtonGroup>
                      </div>
                    </div>
                  : null
                ))
                :
                <div className="flex flex-col items-center mb-4">
                  <div className="text-2xl mb-8">No Items Added</div>
                  <img className="h-52" src={empty} alt="" />
                </div>
              }
          </div>
      </div>
  );
}
 
export default Cart;