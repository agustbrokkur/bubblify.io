import React from "react";
import { NavLink } from "react-router-dom";

const NavLinks = () => {
    return (
        <ul className="nav nav-tabs">
            <img className="nav-item logo-icon" src="../../../resources/Logo.png" alt="Card image" />
            <li className="nav-item">
                <NavLink exact to="/bubbles" className="nav-link" data-toggle="tab">Products</NavLink>
            </li>
            <li className="nav-item">
                <NavLink exact to="/bundles" className="nav-link" data-toggle="tab">Bundles</NavLink>
            </li>
            <li className="nav-item">
                <NavLink exact to="/about" className="nav-link" data-toggle="tab">About us</NavLink>
            </li>
            <li className="nav-item">
                <NavLink exact to="/cart" className="nav-link" data-toggle="tab">Cart</NavLink>
            </li>
        </ul>
    );
};

export default NavLinks;
