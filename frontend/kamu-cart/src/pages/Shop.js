import React from 'react'
import Header from 'kamu_home/Header';
import Order from "../components/Order"
// import NotLogged from "../components/NotLogged"

// import AuthService from "../services/auth.service";

const Shop = () => {

    return ( 
        <>
            <Header/>
            <Order/>
        </>
    );
    // const isSigned = AuthService.isSignedIn();
    // if ( isSigned ) {
    //     return ( 
    //         <>
    //             <Header/>
    //             <Cards/>
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
 
export default Shop;