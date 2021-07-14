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
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.generateMessage = this.generateMessage.bind(this);
  }


   generateMessage() {
     alert("Under Construction....");
   } 

  render() {
    return (
      <div>
        <div className="navbar">
          <div className="left-navbar">
            <Link to="/" className="left-navbar">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a7/Facebook_f_Logo_%28with_gradient%29.svg"
                alt=""
              />
            </Link>
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
            <div className="center-navbar-item">
              <a href="https://github.com/steventran91">
                <GitHubIcon style={{ color: "grey" }} />
              </a>
            </div>
            <div className="center-navbar-item">
              <a href="https://www.linkedin.com/in/steven-tran-318973119/">
                <LinkedInIcon fontSize="large" style={{ color: "grey" }} />
              </a>
            </div>
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
                  fontSize="small"
                />
                <h4>{this.props.currentUser?.first_name}</h4>
              </Link>
            </div>
            <IconButton
              onClick={() => {
                this.setState({ open: !this.state.open });
              }}
            >
              <ArrowDropDownIcon className="right-icon" />
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
        />
      </div>
    </>
  );
}

export default Navbar;

