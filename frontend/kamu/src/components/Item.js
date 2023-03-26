import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import vegetables from "../assets/vegetables.jpg"

const Item = () => {
    return ( 
        <section className="text-gray-600 body-font overflow-hidden">
            <div className="container mt-12 px-5 py-12 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                  <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={vegetables}/>
                  <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                    <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">Vegetables</h1>
                    <p className="leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
                    <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5"></div>
                    <div className="flex justify-between">
                        <span className="title-font font-medium text-2xl text-gray-900">$58.00</span>
                        <Button variant="contained" endIcon={<ShoppingCartIcon />}>
                            Add
                        </Button>
                    </div>
                  </div>
                </div>
            </div>
        </section>
     );
}
 
export default Item;