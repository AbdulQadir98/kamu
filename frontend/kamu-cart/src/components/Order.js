import React, { useState, useEffect } from 'react'
import { Link, useParams } from "react-router-dom";
import { getOrder } from "../services/order.service";

import vegetables from "../assets/vegetables.jpg"

const Order = () => {

    const { id } = useParams(); 
    const [order, setOrder] = useState([])
    const [query, setQuery] = useState("")

    const init = async () => {
      await getOrder(id)
        .then((response) => {
          // console.log("Prining Orders " + response.data)
          setOrder(response.data)
        })
        .catch((err) => {
          console.log("Something went wrong" + err.message)
        })
    }
    
    useEffect(() => {
      init()
    }, []);

    return ( 
        <div className="flex flex-col items-center px-16 py-12 bg-gray-100">
          <div className="flex w-full items-center justify-between">
            {/* Cart Details */}
            <div className='flex'>
              <div className='bg-white rounded-lg mx-2 px-4 py-2'>
                <div className='text-2xl'>{order.name}</div>
                <div className='text-sm'>Cart</div>
              </div>
              <div className='bg-white rounded-lg mx-2 px-4 py-2'>
                <div className='text-2xl'>${order.price}.00</div>
                <div className='text-sm'>Total Price</div>
              </div>
              <div className='bg-white rounded-lg mx-2 px-4 py-2'>
                <div className='text-2xl'>{order.count}</div>
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
          </div>

          {/* product card */}
          <div className="flex flex-wrap justify-center pt-12">
            { order.items ? 
              order.items.filter(item => {
                if (query === '') {
                  return item;
                } else if (item.item_name.toLowerCase().includes(query.toLowerCase())) {
                  return item;
                }
                return false;
              }).map((item) => (
                  <Link to={`/product/${item.id}`} className="flex flex-col lg:w-1/5 md:w-1/2 m-3 rounded drop-shadow-md bg-white">
                      <div className="block relative overflow-hidden">
                        <img alt="ecommerce" src={vegetables}/>
                      </div>
                      <div className="p-4 flex flex-col">
                        <div className="text-gray-500 text-xs tracking-widest title-font mb-1">{"category"}</div>
                        <div className="text-gray-900 title-font text-lg font-medium">{item.item_name}</div>
                        <div className="mt-1">
                          Rs. {item.item_price}.00 x {item.cart_item['count']} = Rs. {item.item_price*item.cart_item['count']}.00
                        </div>
                      </div>
                  </Link>
              ))
              :
              <div className="flex flex-col items-center mb-4">
                <div className="text-2xl mb-8">Loading ...</div>
              </div>
            }
          </div>
        </div>
    );
}
 
export default Order;