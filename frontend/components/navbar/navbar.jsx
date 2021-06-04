import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = ({ currentUser, logout, openModal }) => {
    const logoutButton = () => (
        <div className="logout-wrapper">
            <button className="logout-button" onClick={logout}>Log Out</button>
        </div>
    );

    return (
        <nav>
            {currentUser ? logoutButton() : null}
        </nav>
        
    );
};

export default Navbar;
