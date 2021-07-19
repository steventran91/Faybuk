import {connect} from 'react-redux';
import { logout } from '../../actions/session/session_actions'
import {openModal} from '../../actions/modal_actions';
import { Link } from 'react-router-dom';
import { getIncomingFriendRequests } from '../../reducers/selectors/friend_request_selectors';
import { getCurrentUser } from '../../actions/user_actions'; 
import Navbar from './navbar';




const mapStateToProps = state => {
    return {
        currentUser: state.entities.users[state.session.currentUser],
        friendRequests: getIncomingFriendRequests(state.entities.friendRequests, state.session.currentUser),
        loggedIn: state.session.currentUser
    };
};

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout()),
        openModal: modal => dispatch(openModal(modal)),
        getCurrentUser: () => dispatch(getCurrentUser())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);