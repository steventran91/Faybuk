import React from 'react';
import {Link} from 'react-router-dom';



class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notification: false,
            open: false,
        }
        this.logoutButton = this.logoutButton.bind(this);
    
    };
    
    logoutButton = () => (
        <div className="logout-wrapper">
            <button className="logout-button" onClick={this.props.logout}>Log Out</button>
        </div>
    )

    handleOpen(type) {
        return e => this.setState({[type]: true});
    }
 
    handleClose(type) {
        return e => this.setState({[type]: false});
    }

    render() {
        return (
            <div className="nav-wrapper">
                <div className="nav-left">
                    <Link to="/">
                        <button id="logo-button" className="button">
                            <div className="logo"></div>
                        </button>
                    </Link>
                </div>
                <div className="nav-center">
                    {/* logo with home, links to newsfeed */}
                    {/* logo with friends, links to friends list */}
                </div>
                <div className="nav-right">
                    {/* <Link to={`/users/${props.currentUser.id}`}>
                        <button 
                            id={this.props.location.pathname === `/users/${this.props.currentUser.id}` ? 'active-nav-button' : ""} 
                            className="profile-button">
                                <div className="profile-pic-thumbnail">
                                    <img src="" alt=""/>
                                </div>
                            {this.props.currentUser.first_name}
                        </button>
                    </Link> */}
                    
                </div>
                <nav>{this.props.loggedIn ? this.logoutButton() : null}</nav >
            </div>
            
        );
    }
    
}

export default Navbar;

// const Navbar = ({ loggedIn, logout, openModal }) => {
//     const logoutButton = () => (
//         <div className="logout-wrapper">
//             <button className="logout-button" onClick={logout}>Log Out</button>
//         </div>
//     );
    
