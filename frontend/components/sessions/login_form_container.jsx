import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import { openModal, closeModal } from '../../actions/modal_actions';
import {login, clearErrors} from '../../actions/session_actions'
import sessionForm from './session_form';

const mapStateToProps = (state, ownProps) => {
    return {
        errors: state.errors.session,
        formType: 'login',
        // navLink: <Link to="/signup">sign up instead</Link>,
        session: state.session,
        openModal: state.ui.modal
    }
}

const mapDispatchToProps = dispatch => {
    return {
        processForm: user => dispatch(login(user)),
        otherForm: (
            <button className="button-new-account" onClick={(e) => {
                e.preventDefault();
                dispatch(openModal('signup'))
            }}>Create New Account
            </button>
        ),
        closeModal: () => dispatch(closeModal()),
        clearErrors: () => dispatch(clearErrors()),
        login: user => dispatch(login(user))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(sessionForm);