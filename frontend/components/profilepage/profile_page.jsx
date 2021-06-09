import React from 'react';
import Navbar from '../../components/navbar/navbar_container'
import {withRouter} from 'react-router-dom';
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import CreateIcon from "@material-ui/icons/Create";


class ProfilePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div>
            <div className="profile-header-container">
              <div className="profile-header">
                <img
                  src={this.props.currentUser?.coverPhoto}
                  className="cover-photo"
                />
                <div className="upload-cover">
                  <CameraAltIcon
                    fontSize="small"
                    className="upload-cover-icon"
                  />
                </div>
                <img
                  src={this.props.currentUser?.profilePic}
                  className="profile-pic"
                />
                <div className="upload-profile">
                  <CameraAltIcon
                    fontSize="medium"
                    className="upload-profile-icon"
                  />
                </div>
                <div>
                  <p className="profile-name">
                    {this.props.currentUser.first_name +
                      " " +
                      this.props.currentUser.last_name}
                  </p>
                </div>
              </div>
            </div>
            <div className="line-break"></div>
            <div className="below-header">
                <div className="link-list-bar">
                <ul>
                    <li>
                    <a href="#">Posts</a>
                    </li>
                    <li>
                    <a href="#">About</a>
                    </li>
                    <li>
                    <div onClick={() => {}} className="edit-profile-btn">
                        <CreateIcon /> Edit Profile
                    </div>
                    </li>
                </ul>
                <div className="intro-container">
                    <div className="intro">

                    </div>

                </div>
            </div>
          </div>
        );
    }
}