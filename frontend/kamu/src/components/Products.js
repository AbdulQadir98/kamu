import {useState} from "react";
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, removeFromCart } from '../redux/cartSlice'
import { Link } from "react-router-dom";

import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import vegetables from "../assets/vegetables.jpg"
import products from "./fake-data.json"

const Products = () => {

  const dispatch = useDispatch()
  const { items } = useSelector((state) => state.cart)
  const [query, setQuery] = useState("")

    return ( 
        <div className="flex flex-col items-center py-12 min-h-[calc(100vh-64px)] bg-gray-100">
            <div className="flex items-baseline w-full justify-center"> 

              {/* search bar */}
              <div className="flex w-72 pt-2 pb-8">
                  <input 
                      className="w-full rounded-lg border-none p-3 focus:outline-none" 
                      placeholder="Search Items" 
                      onChange={event => setQuery(event.target.value)}
                  />
              </div>
            </div>
            {/* product card */}
            <div className="flex flex-wrap justify-center">
                {
                  products.filter(item => {
                    if (query === '') {
                      return item;
                    } else if (item.product.toLowerCase().includes(query.toLowerCase())) {
                      return item;
                    }
                    return false;
                  }).map((item, index) => index < 8 && (
                      <div className="flex flex-col justify-between items-center lg:w-1/5 md:w-1/2 m-3 rounded drop-shadow-md bg-white">
                       <Link to={`/product/${item.id}`}>
                        <div className="block relative overflow-hidden">
                          <img alt="ecommerce" src={vegetables}/>
                        </div>
                        <div className="p-4">
                          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                          <h2 className="text-gray-900 title-font text-lg font-medium">{item.product}</h2>
                          <p className="mt-1">Rs. {item.price}.00</p>
                        </div>
                       </Link>
                       <div className="pb-1">
                        <Stack spacing={1} direction="row">
                          <IconButton color="primary">
                            <RemoveIcon onClick={()=> dispatch(removeFromCart(item))}/>
                          </IconButton>
                          <Box sx={{display:"flex", px: 1}}>
                          </Box>
                          <IconButton color="primary">
                            <AddIcon onClick={()=> dispatch(addToCart(item))}/>
                          </IconButton>
                        </Stack>
                       </div>
                      </div>
                  ))
                }
            </div>
            <div>
              {items.map((item) => (
                <div>
                  <span className="p-2">{item.product}</span>
                </div>
              ))}
            </div>
        </div>
     );
}
 
export default Products;