import React from 'react';
import {Link} from 'react-router-dom';
import CreateIcon from '@material-ui/icons/Create';

class MenuBar extends React.Component {
    constructor(props) {
        super(props);

    }


    render(){
        render(
            <div className="menu-bar-container">
                <ul className="menu-bar-contents">
                    <li>
                        <Link>Posts</Link>
                        {/* will show intro container and post container on show page */}
                    </li>
                    <li>
                        <Link>About</Link>
                        {/* will show a for where users can edit user info   */}
                    </li>
                    <li>
                        <Link>Friends</Link>
                        {/* will show friends component, lists of friends   */}
                    </li>
                </ul>
                <div className="menu-edit-btn-container">
                    <button onClick={() => {}} className="menu-edit-btn"> 
                    {/* will create editprofileform component for onClick */}
                        <CreateIcon fontSize="medium"/>
                        Edit Profile
                    </button>
                </div>
            </div>
        )
    }
}

export default MenuBar; 

