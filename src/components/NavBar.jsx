import React from 'react';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom'; // Importar Link

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand d-flex align-items-center" to="/">
                    FR SHOES
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/category/nike">NIKE</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/category/puma">PUMA</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/category/adiddas">ADDIDAS</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/category/new-balance">NEW BALANCE</Link>
                        </li>
                    </ul>
                </div>
                <CartWidget />
            </div>
        </nav>
    );
}

export default NavBar;
