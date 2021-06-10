import React from 'react';
import {Link} from 'react-router-dom';
import CreateIcon from '@material-ui/icons/Create';

class MenuBar extends React.Component {
    constructor(props) {
        super(props);

        this.generateMessage = this.generateMessage.bind(this)
    }

    generateMessage() {
        alert("Under Construction...")
    }


    render(){
        return (
          <div className="menu-bar-container">
            <ul className="menu-bar-contents">
              <li>
                <Link to="" onClick={this.generateMessage}>Posts</Link>
                {/* will show intro container and post container on show page */}
              </li>
              <li>
                <Link to="" onClick={this.generateMessage}>About</Link>
                {/* will show a for where users can edit user info   */}
              </li>
              <li>
                <Link to="" onClick={this.generateMessage}>Friends</Link>
                {/* will show friends component, lists of friends   */}
              </li>
            </ul>
            <div className="menu-edit-btn-container">
              <button onClick={this.generateMessage} className="menu-edit-btn">
                {/* will create editprofileform component for onClick */}
                <CreateIcon fontSize="small" className="create-icon" />
                Edit Profile
              </button>
            </div>
          </div>
        );
    }
}

export default MenuBar; 

