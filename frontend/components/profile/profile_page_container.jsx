import {connect} from 'react-redux';
import ProfilePage from './profile_page';
import CreateIcon from "@material-ui/icons/Create";
import { openModal, closeModal } from '../../actions/modal_actions';
import { clearErrors } from '../../actions/session/session_actions';
import { fetchPosts, deletePost } from '../../actions/post_actions';
import { fetchAllUsers } from '../../actions/user_actions';
import {getUser} from '../../actions/user_actions';


const mapStateToProps = (state, ownProps) => {
    return {
        user: state.entities.users[ownProps.match.params.userId],
        users: Object.values(state.entities.users),
        currentUser: state.session.currentUser,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getUser: userId => dispatch(getUser(userId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);