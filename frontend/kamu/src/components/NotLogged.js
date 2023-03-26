import { Link } from "react-router-dom"
import img from '../assets/notLogged.png'

const NotLogged = () => {
    return ( 
        <div className="flex flex-col items-center pt-12 mb-20 w-full">
            <div className="notfoundpage flex flex-col items-center mb-10">
                <div className="text-2xl">Please Signin First</div>
                <img className="h-96" src={img} alt="" />
            </div>
            <div className="p-2 bg-gray-200 text-xl rounded-lg">
                <Link to={"/"}>Back to the homepage</Link>
            </div>
            
        </div>
     );
}
 
export default NotLogged;