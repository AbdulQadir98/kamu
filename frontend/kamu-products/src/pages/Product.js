import React from "react";
import Header from 'kamu_home/Header';
import Item from "../components/Item"
//import NotLogged from "../components/NotLogged"

//import AuthService from "../services/auth.service";

const Product = () => {

    return ( 
        <>  
            <Header/>
            <Item/>
        </>
    );

    // const isSigned = AuthService.isSignedIn();
    // if ( isSigned ) {
    //     return ( 
    //         <>
    //             <Header />
    //             <Item/>
    //         </>
    //     );
    // } else {
    //     return ( 
    //         <>
    //             <NotLogged/>         
    //         </>
    //     );
    // } 
}
 
export default Product;