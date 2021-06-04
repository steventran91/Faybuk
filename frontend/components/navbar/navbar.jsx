import React from 'react';
import {Link} from 'react-router-dom';



class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notifications: false,
            open: false,
        }

        cons 
    }
}

const Navbar = ({ loggedIn, logout, openModal }) => {
    const logoutButton = () => (
        <div className="logout-wrapper">
            <button className="logout-button" onClick={logout}>Log Out</button>
        </div>
    );
    
    return (
        <nav>
            {loggedIn ? logoutButton() : null}
        </nav>
        
    );
};

export default Navbar;
