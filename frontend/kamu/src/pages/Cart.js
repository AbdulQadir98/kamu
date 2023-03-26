import React from 'react'
import Header from "../components/Header"
import Cards from "../components/Cards"
import NotLogged from "../components/NotLogged"

import AuthService from "../services/auth.service";

const Cart = () => {

    const isSigned = AuthService.isSignedIn();

    if ( isSigned ) {
        return ( 
            <>
                <Header/>
                <Cards/>
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
 
export default Cart;