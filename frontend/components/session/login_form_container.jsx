import {connect} from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';
import { login, clearErrors } from '../../actions/session/session_actions'
import LoginForm from './login_form';

const mapStateToProps = (state, ownProps) => {
    return {
        errors: state.errors,
        formType: 'login',
        session: state.session,
        openModal: state.ui.modal
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        processForm: (user) => dispatch(login(user)),
        // otherForm: (
        //     <button className="button-new-account" onClick={(e) => {
        //         e.preventDefault();
        //         dispatch(openModal('signup'))
        //     }}>Create New Account
        //     </button>
        // ),
        openModal: () => dispatch(openModal('signup')),
        clearErrors: () => dispatch(clearErrors()),
        // login: user => dispatch(login(user))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);