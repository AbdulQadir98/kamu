import React  from 'react';
import { Link } from "react-router-dom"
import img from '../assets/pageNotFound.png'

const Notfound = () => {
    return ( 
        <div className="flex flex-col items-center pt-2 w-full">
            <div className="notfoundpage flex flex-col items-center mb-4">
                <div className="text-2xl">Page Not found</div>
                <img className="h-96" src={img} alt="" />
            </div>
            <div className="p-2 bg-gray-200 text-xl rounded-lg">
                <Link to={"/"}>Back to the homepage</Link>
            </div>
            
        </div>
     );
}
 
export default Notfound;