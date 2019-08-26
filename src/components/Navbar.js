import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    return(
        <div className="navbar" >
            <ul className="nav">
                <li>
                    <Link className="nav-link" to="/">Shop</Link>
                </li>
                <li>
                    <Link className="nav-link" to="/cart">
                        Cart <span className="cartNum">({props.cart.length})</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;