import React, { useEffect, useState }  from 'react';
import { useParams } from 'react-router-dom';
import { getItem } from "../services/product.service";

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';

import vegetables from "../assets/vegetables.jpg"

const Item = () => {

    const { id } = useParams();
    const [item, setItem] = useState([])

    const init = async() => {
      await getItem(id)
        .then((response) => {
          setItem(response.data)
          console.log("Prining Item " + response.data.name)
        })
        .catch((err) => {
          console.log(err.message)
        })
    }
  
    useEffect(() => {
        init()
    }, []);

    return ( 
        <section className="text-gray-600 body-font overflow-hidden">
            <div className="container mt-8 px-5 py-12 mx-auto">
              <div className="lg:w-4/5 mx-auto flex flex-wrap">
                  
                {/* image */}
                <img alt="ecommerce" src={item.url} className="lg:w-1/2 w-full h-96 object-cover object-center rounded"/>
                
                {/* details */}
                <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                  <div className="text-gray-900 text-3xl title-font font-medium mb-2">{item.name}</div>
                  <div className="text-gray-500 text-xl title-font font-medium mb-3">{item.category}</div>
                  <p className="leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
                  <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5"></div>
                  <div className="flex justify-between">
                      <div className="title-font font-medium text-2xl text-gray-900">${item.price}.00</div>
                      <Stack direction="row" spacing={2}>
                        <Button variant="outlined" endIcon={<RemoveShoppingCartIcon />}> Remove </Button>
                        <Button variant="contained" endIcon={<ShoppingCartIcon />} disableElevation> Add </Button>
                      </Stack>
                  </div>
                </div>
              </div>
            </div>
        </section>
     );
}
 
export default Item;