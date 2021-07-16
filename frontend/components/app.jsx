import React from 'react';
import LoginFormContainer from '../components/sessions/login_form_container';
import SignupFormContainer from '../components/sessions/signup_form_container';
import {Route, Link, Switch, Redirect} from 'react-router-dom'
import NavbarContainer from './navbar/navbar_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from '../components/sessions/modal';
import ProfilePageContainer from './profilepage/profile_page_container';




const App = () => {
    return (
      <div>
        <Modal />
        <ProtectedRoute path="/" component={NavbarContainer} />
        {/* <ProtectedRoute path="/" component={NavbarContainer} /> */}
        <Switch>
          <Route exact path="/users/:userId" component={ProfilePageContainer} />
          <AuthRoute exact path="/login" component={LoginFormContainer} />
          <AuthRoute exact path="/signup" component={SignupFormContainer} />
          {/* <ProtectedRoute path="/" component={NavbarContainer} /> */}
          {/* <ProtectedRoute exact path="/newsfeed" component={NewsFeedContainer} */}
          {/* <Redirect to="/" /> */}
        </Switch>
      </div>
    ); 
}

export default App;