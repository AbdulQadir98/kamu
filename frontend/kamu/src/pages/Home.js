// import { useState, useEffect } from "react";
import Header from "../components/Header"
import Products from "../components/Products"
import NotLogged from "../components/NotLogged"
import Category from "../components/Category"

import AuthService from "../services/auth.service";

const Home = () => {

    const isSigned = AuthService.isSignedIn();
    const role = AuthService.getCurrentUser();

    if (!isSigned ) {
        return ( 
            <>
                <NotLogged/>
            </>
        );
    } else if (role.roles[0] === "ROLE_CUSTOMER") {
        return ( 
            <>
                <Header />
                <div className="flex">
                    <Category />
                    <Products />
                </div>
            </>
        );
    } else if (role.roles[0]  === "ROLE_ADMIN") {
        return ( 
            <>
                <Header />
            </>
        );
    } 
}
 
export default Home;