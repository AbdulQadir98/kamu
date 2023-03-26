import React  from 'react';
import Header from 'kamu_home/Header';
import List from "../components/List";
import Group from "../components/Group";

// import NotLogged from "../components/NotLogged"


// import AuthService from "../services/auth.service";

const Category = () => {

    return ( 
        <>
            <Header />
            <div className="flex">
                <List />
                <Group />
            </div>
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
 
export default Category;