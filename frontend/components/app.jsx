import React from 'react';
import LoginFormContainer from '../components/sessions/login_form_container';
import SignupFormContainer from '../components/sessions/signup_form_container';
import {Route, Link, Switch} from 'react-router-dom'
import GreetingContainer from './greetings/greeting_container';
import { AuthRoute, ProtectedRouted } from '../utils/route_util';
import Modal from '../components/sessions/modal';


const App = () => {
    return (
        <div className="app">
            <header>
                {/* <GreetingContainer /> */}
                <Modal />
            </header>
            <Switch>
                <AuthRoute path="/login" component={LoginFormContainer} />
                <AuthRoute path="/signup" component={SignupFormContainer} />
            </Switch>
        </div>
    ) 
}

export default App;