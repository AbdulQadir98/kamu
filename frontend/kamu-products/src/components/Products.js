import React, { useState , useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, removeFromCart } from '../redux/cartSlice'
import { Link } from "react-router-dom";

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import vegetables from "../assets/vegetables.jpg"
import { API_KEY } from '../constants/API_KEY'
import { getProducts } from "../services/product.service";

export const Products = () => {

    const dispatch = useDispatch()
    const [query, setQuery] = useState("")
    const [products, setProducts] = useState([])
    const [url, setUrl] = useState("");

    const init = () => {
      getProducts()
        .then((response) => {
          // console.log("Prining Products " + response.data)
          setProducts(response.data)
        })
        .catch((err) => {
          console.log(err.message)
        })
    }

    useEffect(() => {
      init()
    }, []);

    // toggle keeps track of which items were toggled or not, 
    // by associating id of an item with its toggle state,
    // eg:- {8: true, 9: true}
    // Then in render we read toggle value of an item using its id to check if it was toggled or not
    // using toggle[user.id]
    const [ toggle, setToggle] = useState({})
    const handleToggle = (id) => {
      setToggle({...toggle, [id]: !toggle[id], })
    }

    return ( 
      <div className="flex flex-col items-center w-full py-12 h-auto bg-gray-100">
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
        <div className="flex w-full flex-wrap justify-center">
        {/* TODO : Default show all later by category? */}
        { products.filter(item => {
           if (query === '') {
             return item;
           } else if (item.name.toLowerCase().includes(query.toLowerCase())) {
             return item;
           }
           return false;
          }).map((item, index) => index < 12 && (
          <div key={index} className="flex flex-col justify-between items-center lg:w-1/5 md:w-1/2 m-3 rounded drop-shadow-md bg-white">
           <Link to={`/product/${item.id}`}>
            <div className="block relative overflow-hidden">
              <img className="object-cover w-full h-44" alt="ecommerce" src={item.url}/>
            </div>
            <div className="p-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{item.category}</h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">{item.name}</h2>
              <p className="mt-1">Rs. {item.price}.00</p>
            </div>
           </Link>
           <div className="pb-2">
            { toggle[item.id] ? 
              <Button 
                onClick={() => {
                  handleToggle(item.id)
                  dispatch(removeFromCart(item))
                }} 
                variant="outlined" 
                endIcon={<RemoveShoppingCartIcon />}>
                remove cart
              </Button>
            :
              <Button 
                onClick={() => {
                  handleToggle(item.id)
                  dispatch(addToCart(item))
                }} 
                variant="contained" 
                endIcon={<ShoppingCartIcon />} 
                disableElevation>
                add cart
              </Button>
            }
           </div>
          </div>
        ))}
        </div>
      </div>
  );
}
 
export default Products;