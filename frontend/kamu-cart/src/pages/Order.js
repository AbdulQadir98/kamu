import React from 'react'
import Header from 'kamu_home/Header';
import Cart from "../components/Cart"
// import NotLogged from "../components/NotLogged"

// import AuthService from "../services/auth.service";

const Order = () => {

    return ( 
        <>
            <Header/>
            <Cart/>
        </>
    );
    // const isSigned = AuthService.isSignedIn();
    // if ( isSigned ) {
    //     return ( 
    //         <>
    //             <Header/>
    //             <Cart/>
    //         </>
    //      );
    // } else {
    //     return ( 
    //         <>
    //             <NotLogged/>         
    //         </>
    //     );
    // }
}
 
export default Order;