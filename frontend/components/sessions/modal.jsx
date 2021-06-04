import React from 'react';
import {connect} from 'react-redux';
import {closeModal} from '../../actions/modal_actions';
import SignupFormContainer from './signup_form_container';

function Modal({ modal, closeModal}) {
    if (!modal) {
        return null;
    }
    let component;
    switch(modal) {
        case 'signup':
            component = <SignupFormContainer />;
            break;
        default:
            return null;
    };

    return (
        <>
            <div className="modal-background" onClick={closeModal}>
            </div>
                <div className="modal-child">
                    {component}
            </div>
        </>
    );
}

const mapStateToProps = state => {
    return {
        modal: state.ui.modal 
    }
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);