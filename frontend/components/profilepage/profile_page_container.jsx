import {connect} from 'react-redux';
import ProfilePage from './profile_page';
import CreateIcon from "@material-ui/icons/Create";
import { openModal, closeModal } from '../../actions/modal_actions';
import { clearErrors } from '../../actions/session_actions';
import { fetchPosts, deletePost } from '../../actions/post_actions';
import { fetchAllUsers } from '../../actions/user_actions';
import {fetchUser} from '../../actions/user_actions';


const mapStateToProps = (state, ownProps) => {
    return {
        user: state.entities.users[ownProps.match.params.userId],
        users: Object.values(state.entities.users),
        currentUser: state.session.currentUser,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUser: userId => dispatch(fetchUser(userId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);