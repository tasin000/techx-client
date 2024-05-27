import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";

const Header = () => {
    return (
        <div className="container">
            <div className='navbar'>
                <div className="nav-logo">
                    <Link to="/">TechX</Link>
                </div>
                <div className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/products">Products</Link>
                    <Link to="/add">Add</Link>
                    <Link to="/my-cart">My Cart</Link>
                </div>
                <div className="nav-login">
                    <button>Login</button>
                </div>
            </div>
        </div>

    );
};

export default Header;