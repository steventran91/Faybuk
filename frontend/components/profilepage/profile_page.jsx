import React from 'react';
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import CreateIcon from "@material-ui/icons/Create";
import NavBarContainer from '../../components/navbar/navbar_container';
import MenuBar from '../profilepage/menu_bar';
//IntroContainer
//PostContainer
//FriendsContainer


class ProfilePage extends React.Component {
    constructor(props) {
        super(props);
       
    }

    componentDidMount() {
        this.props.fetchUser(this.props.match.params.userId)
        .then(() => this.setState(this.props.user))
        // console.log(this.props.currentUser)
    }

    
    render() {
        
        return (
          <div>
            {/* {NavbarContainer} */}
            <div className="profile-header-container">
              <div className="cover-photo-container">
                <img src={this.props.user.coverPhoto} className="cover-photo" />
                {/* <div className="upload-cover">
                            <CameraAltIcon fontSize="small" className="upload-cover-icon" />
                            Upload Cover Photo 
                        </div> */}
              </div>
              <div className="profile-pic-container">
                <img src={this.props.user.profilePic} className="profile-pic" />
                {/* <div className="upload-profile">
                            <CameraAltIcon fontSize="medium" className="upload-profile-icon" />
                        </div> */}
              </div>
              <div className="profile-name-container">
                <p className="profile-name">
                  {this.props.user.first_name + " " + this.props.user.last_name}
                </p>
                <div className="menu-bar">
                  <MenuBar />
                </div>
              </div>
            </div>
            {/* <div className="menu-bar">
              <MenuBar />
            </div> */}
          </div>
        );
    }
}

export default ProfilePage;