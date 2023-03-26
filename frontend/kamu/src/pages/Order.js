import React from 'react'
import Header from "../components/Header"
import Cart from "../components/Cart"
import NotLogged from "../components/NotLogged"

import AuthService from "../services/auth.service";

const Order = () => {

    const isSigned = AuthService.isSignedIn();

    if ( isSigned ) {
        return ( 
            <>
                <Header/>
                <Cart/>
            </>
         );
    } else {
        return ( 
            <>
                <NotLogged/>         
            </>
        );
    }
}
 
export default Order;