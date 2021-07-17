
import {signup, clearErrors} from '../../actions/session/session_actions';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import SignupForm from './signup_form';
import {closeModal, openModal} from '../../actions/modal_actions'

const mapStateToProps = (state, ownProps) => {
    return {
        errors: state.errors,
        formType: 'signup',
        session: state.session
    }
}

const mapDispatchToProps = dispatch => {
    return {
        processForm: user => dispatch(signup(user)),
        // otherForm: (
        //     <button onClick={() => dispatch(openModal('login'))}>
        //         Login
        //     </button>
        // ),
        closeModal: () => dispatch(closeModal()),
        clearErrors: () => dispatch(clearErrors())
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);