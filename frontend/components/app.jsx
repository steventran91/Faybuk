import React from 'react';
import LoginFormContainer from '../components/sessions/login_form_container';
import SignupFormContainer from '../components/sessions/signup_form_container';
import {Route, Link, Switch, Redirect} from 'react-router-dom'
import NavbarContainer from './navbar/navbar_container';
import { AuthRoute, ProtectedRouted } from '../utils/route_util';
import Modal from '../components/sessions/modal';
import SessionForm from '../components/sessions/session_form';


const App = () => {
    return (
        <div>   
            <Modal />
            <NavbarContainer />
            <LoginFormContainer />

            <Switch>

                <AuthRoute exact path="/login" component={LoginFormContainer} />
                <AuthRoute exact path="/signup" component={SignupFormContainer} />
                {/* <Redirect to="/" /> */}
            </Switch>
        </div>
    ) 
}

export default App;