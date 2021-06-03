import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = ({ currentUser, logout, openModal }) => {

    // const sessionLinks = () => (
    //     <nav className="login-signup">
    //         <button onClick={() => openModal('login')}>Login</button>
    //   &nbsp;or&nbsp;
    //         <button onClick={() => openModal('signup')}>Signup</button>
    //     </nav>
    // );
    const logoutButton = () => (
        <hgroup className="header-group">
            <h2 className="header-name">Hi, {currentUser.username}!</h2>
            <button className="header-button" onClick={logout}>Log Out</button>
        </hgroup>
    );

    return (
        <nav>
            {
                currentUser ?
                    logoutButton() :
                    null
            }
        </nav>
        
    );
};

export default Navbar;
