import React from 'react';
import NavbarContainer from "./navbar/navbar_container";
import LoginFormContainer from './session/login_form_container';
import {Route, Link, Switch, Redirect} from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Feed from './feed';
import Modal from './session/modal';
import Profile from './profile/profile';
import PostModal from './posts/post_modal';
import ProfilePicModal from './profile/profil_pic_modal';
import ProfilePageContainer from './profile/profile_page_container';





const App = () => {
    return (
      <div>
        <Modal />
        <ProtectedRoute path="/users/:userId" component={PostModal} />
        <ProtectedRoute exact path="/" component={PostModal} />
        <ProtectedRoute path="/users/:userId" component={ProfilePicModal} />
        <ProtectedRoute path="/" component={NavbarContainer} />
        <Switch>
          {/* <Route exact path="/users/:userId" component={ProfilePageContainer} /> */}
          <AuthRoute exact path="/login" component={LoginFormContainer} />
          <ProtectedRoute path="/users/:userId" component={Profile} />
          <ProtectedRoute exact path="/" component={Feed} />
          <Redirect to="/" />
        </Switch>
      </div>
    ); 
}

export default App;