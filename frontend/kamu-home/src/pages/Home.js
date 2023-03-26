import React  from 'react';
import Header from "../components/Header"
import Navbar from '../components/Navbar';
import NotLogged from "../components/NotLogged"
import { Products } from 'kamu_products/Products';
import { List } from "kamu_products/List"

import AuthService from "../services/auth.service";

const Home = () => {

    const isSigned = AuthService.isSignedIn();
    const user = AuthService.getCurrentUser();

    if (!isSigned ) {
        return ( 
            <>
                <Navbar />
                <NotLogged/>
            </>
        );
    } else if (user.roles[0] === "ROLE_CUSTOMER") {
        return ( 
            <>
                <Header />
                <div className="flex">
                    <List />
                    <Products />
                </div>
            </>
        );
    } else if (user.roles[0]  === "ROLE_ADMIN") {
        return ( 
            <>
                <Header />
                <div className='flex w-full justify-center py-16'>
                    ADMIN DASHBOARD!!
                </div>
            </>
        );
    } 
}
 
export default Home;