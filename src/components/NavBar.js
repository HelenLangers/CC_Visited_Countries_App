import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <ul className="nav-list">
            <li className = "list-item">
                <Link to="/" className="link">Home</Link>
            </li>
            <li className = "list-item">
                <Link to="/about" className="link">About</Link>
            </li>
        </ul>
    );
}

export default NavBar;