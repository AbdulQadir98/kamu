import React, { useEffect, useState }  from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProducts } from "../services/product.service";

import vegetables from "../assets/vegetables.jpg"

const Group = () => {

    const { id } = useParams(); 
    const [products, setProducts] = useState([])

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
    
    return ( 
      <div className="flex flex-col items-center w-full py-12 pb-24 h-auto bg-gray-100">

        {/* title */}
        <div className='flex w-full text-xl px-16 py-4 mb-4'>
            <div>Category : <span className='text-red-900'>{id}</span></div>
        </div>

        {/* product card */}
        <div className="flex w-full flex-wrap pl-16">
          { products.filter(item => {
            if (item.category === id) {
                return item;
            }
            return false;
            }).map((item, index) => (
            <div key={index} className="flex flex-col justify-between items-center lg:w-1/5 md:w-1/2 mr-5 mb-5 rounded drop-shadow-md bg-white">
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
            </div>
          ))}
        </div>

      </div>
    );
}
 
export default Group;