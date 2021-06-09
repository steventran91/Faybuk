import {connect} from 'react-redux';
import ProfilePage from './profile_page';
import {fetchUsers} from '../../actions/user_actions';
import {fetchPosts} from '../../actions/post_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.entities.users[ownProps.match.params.userId],
        users: Object.values(state.entities.users),
        currentUser: state.session.currentUser,
        posts: state.entities.posts 
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUsers()),
        fetchPosts: () => dispatch(fetchPosts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);