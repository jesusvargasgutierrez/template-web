import React, { Component, useReducer } from 'react';
import { Link } from "react-router-dom";

const Header = (props) => {
	return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container px-4 px-lg-5">
                <a className="navbar-brand" href="#!">Start Bootstrap</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li className="nav-item">
                            <Link to="/">
                                <div className="nav-link active">
                                    Home
                                </div>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/listcart">
                                <div className="nav-link">
                                    About
                                </div>
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Shop</a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" to="/home">All Products</Link></li>
                                <li><a className="dropdown-item" href="#!">Popular Items</a></li>
                                <li><a className="dropdown-item" href="#!">New Arrivals</a></li>
                            </ul>
                        </li>
                    </ul>
                    <div className="d-flex">
                        <Link to="/listcart">
                            <span className="btn btn-outline-dark">
                                <i className="bi-cart-fill me-1"></i>
                                Carrito
                                <span className="badge bg-dark text-white ms-1 rounded-pill">{ props.counter }</span>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
	)
}

export default Header;



