import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";



const Navbar= () => {
    


    return (
        <div className="flex flex-row space-between" >
           <div>
            <Link to="/" ><IoHome/></Link>
           </div>
           <div>
            <p>HOME</p>
            <Link to="/cart" ><FaCartShopping/></Link>
           </div>
        </div>
    )
}

export default Navbar;