import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

export default function Header() {
    // TODO: Get logo from backend
    return (
        <nav className="navbar navbar-expand-sm navbar-dark wbc-navbar">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img className="wbc-logo" src="/assets/img/logo_minimal_n.png" alt="Main Logo" />
                </Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent-555">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home
                                <span className="sr-only">(current)</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}