import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className='container'>
            <div className="navbar">
                <Link to={"/"}>
                    Home
                </Link>
                <div className="two-column">
                    <div className="nav-links">
                        <Link to={"/products"}>
                            Products
                        </Link>
                        <Link to={"/teams"}>
                            Teams
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Navbar;
