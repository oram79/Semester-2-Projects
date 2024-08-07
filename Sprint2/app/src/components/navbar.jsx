import React from 'react';
import {Link} from 'react-router-dom';
import {ShoppingCart} from 'phosphor-react';
import '../index.css';

export const Navbar = () => {
    return ( 
        <div className="navbar">
            <div className="links">
                <div className="title2">
                    <Link to="/products"> Newfoundland Electronics</Link>
                </div>
                <div className="title1">
                    <Link to="/products"> Newfoundland <br/> Electronics</Link>
                </div>
                <div className="shopbox">
                    <Link to="/products"> Shop </Link>     
                </div>
                <Link to="/cart"> 
                    <ShoppingCart size={32}/>
                </Link>
            </div>
        </div>
    );
};
