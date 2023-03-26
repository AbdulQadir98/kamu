import Header from "../components/Header"
import Item from "../components/Item"
import NotLogged from "../components/NotLogged"

import AuthService from "../services/auth.service";

const Product = () => {

    const isSigned = AuthService.isSignedIn();

    if ( isSigned ) {
        return ( 
            <>
                <Header />
                <Item/>
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
 
export default Product;