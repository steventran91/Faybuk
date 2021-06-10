import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import PeopleIcon from "@material-ui/icons/People";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import StorefrontIcon from "@material-ui/icons/Storefront";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import { Avatar, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationImportantIcon from "@material-ui/icons/NotificationImportant";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.generateMessage = this.generateMessage.bind(this);
  }
  logoutButton = () => (
    <div className="logout-wrapper">
      <button className="logout-button" onClick={this.props.logout}>
        Log Out
      </button>
      <ExitToAppIcon
        className="logout-icon"
        onClick={this.props.logout}
        fontSize="medium"
      />
    </div>
  );

   generateMessage() {
     alert("Under Construction....");
   } 

  render() {
    console.log(this.props.currentUser)
    return (
      <div>
        <div className="navbar">
          <div className="left-navbar">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a7/Facebook_f_Logo_%28with_gradient%29.svg"
              alt=""
            />
            <div className="nav-input">
              <SearchIcon />
              <input type="text" placeholder="Search..." />
            </div>
          </div>
          <div className="center-navbar">
            <div className="center-navbar-item">
              <HomeIcon fontSize="large" onClick={this.generateMessage} />
            </div>
            <div className="center-navbar-item">
              <PeopleIcon fontSize="large" onClick={this.generateMessage} />
            </div>
            {/* <div className="center-navbar-item">
              <LiveTvIcon fontSize="large" />
            </div>
            <div className="center-navbar-item">
              <StorefrontIcon fontSize="large" />
            </div>
            <div className="center-navbar-item">
              <SupervisedUserCircleIcon fontSize="large" />
            </div> */}
          </div>
          <div className="right-navbar">
            <div className="nav-info">
              <Link
                to={`/users/${this.props.currentUser.id}`}
                className="profile-link"
              >
                <Avatar
                  src={this.props.currentUser?.profilePic}
                  className="avatar-profile"
                />
                <h4>{this.props.currentUser?.first_name}</h4>
              </Link>
            </div>
            {/* <IconButton>
              <AddIcon className="right-icon" />
            </IconButton> */}
            {/* <IconButton>
              <ForumIcon className="right-icon" />
            </IconButton>
            <IconButton> */}
            {/* <NotificationImportantIcon className="right-icon" />
            </IconButton> */}
            <IconButton>
              <ArrowDropDownIcon
                className="right-icon"
                onClick={() => {
                  this.setState({ open: !this.state.open });
                }}
              />
            </IconButton>
            {this.state.open && (
              <div className="logout-btn-container">
                <nav>
                  {this.props.loggedIn && (
                    <LogoutButton logout={this.props.logout} />
                  )}
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

function LogoutButton(props) {
  return (
    <>
      <div className="logout-wrapper">
        <button className="logout-button" onClick={props.logout}>
          Log Out
        </button>
        <ExitToAppIcon
          className="logout-icon"
          onClick={props.logout}
          fontSize="medium"
        />
      </div>
    </>
  );
}

export default Navbar;

// class Navbar extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             notification: false,
//             open: false,
//         }

//     };

//     handleLogout() {
//         this.props.logout();
//     }

//     toggleOpen(type) {
//         return e => this.setState({ [type]: !this.state.type });
//     }

//     // logoutButton = () => (
//     //     <div className="logout-wrapper">
//     //         <button className="logout-button" onClick={this.props.logout}>Log Out</button>
//     //     </div>
//     // )

//     // handleClose(type) {
//     //     return e => this.setState({[type]: false});
//     // }

//     render() {
//         return (
//             <div className="nav-wrapper">
//                 <div className="nav-left">
//                     <Link to="/">
//                         <button id="logo-button" className="button">
//                             <div className="logo"></div>
//                         </button>
//                     </Link>
//                 </div>
//                 <div className="nav-center">
//                     {/* logo with home, links to newsfeed */}
//                     {/* logo with friends, links to friends list */}
//                 </div>
//                 <div className="nav-right">
//                     {/* <Link to={`/users/${props.currentUser.id}`}>
//                         <button
//                             id={this.props.location.pathname === `/users/${this.props.currentUser.id}` ? 'active-nav-button' : ""}
//                             className="profile-button">
//                                 <div className="profile-pic-thumbnail">
//                                     <img src="" alt=""/>
//                                 </div>
//                             {this.props.currentUser.first_name}
//                         </button>
//                     </Link> */}
//                 <button
//                     id={this.state.logout ? 'active-nav-button' : ''}
//                     onClick={this.toggleOpen('logout')}
//                     onBlur={this.toggleOpen('logout')}
//                     className="util-button">
//                     <div className="dropdown-menu"></div>
//                 </button>
//                     <nav>{this.props.loggedIn ? this.logoutButton() : null}</nav >

//                     <div>
//                         <ul>
//                             {this.props.loggedIn ? }
//                         </ul>
//                     </div>
//                 </div>
//             </div>

//         );
//     }

// }

// const Navbar = ({ loggedIn, logout, openModal }) => {
//     const logoutButton = () => (
//         <div className="logout-wrapper">
//             <button className="logout-button" onClick={logout}>Log Out</button>
//         </div>
//     );
