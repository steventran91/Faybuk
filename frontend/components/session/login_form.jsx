import React from 'react';
import {Redirect, withRouter} from 'react-router-dom';
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";




class LoginForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {

            email: "",
            password: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demo = this.demo.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }

    componentDidMount() {
      this.props.clearErrors();
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    handleInput(field) {
        return e => this.setState({[field]: e.target.value});
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    demo() {
        let user = {
            email: "max@max.com",
            password: "123456"
        };
        this.props.processForm(user);
    }

    render() {
        if (this.props.session.currentUser) {
            return <Redirect to="/"></Redirect>;
        }

        const errorArr = this.props.errors.login.length && !this.props.modal ? this.props.errors.login.map((error) => {
          return <li>{error}</li>;
        }) : [];
        
        return (
          <div className="splash">
            <div className="splash-text">
              <h2>faybuk</h2>
              <h4>Connect with friends and the world around on Faybuk</h4>
            </div>
            <div className="splash-right">
              <div className="login">
                <form>
                  <div>
                    <input
                      autoFocus
                      className={errorArr.length ? "required" : ""}
                      type="text"
                      onChange={this.handleInput("email")}
                      value={this.state.email}
                      placeholder="Email"
                    />
                  </div>
                  <div>
                    <input
                      className={errorArr.length ? "required" : ""}
                      type="password"
                      onChange={this.handleInput("password")}
                      value={this.state.password}
                      placeholder="Password"
                    />
                  </div>
                  {errorArr.length ? (
                    <ul className="error">{errorArr}</ul>
                  ) : (
                    <></>
                  )}
                  <button
                    className="btn accent"
                    onClick={this.props.handleSubmit}
                    type="submit"
                  >
                    Log In
                  </button>
                </form>
                <div className="line" />
                <button className="btn sign-up" onClick={this.props.openModal}>
                  Create New Account
                </button>
                <button className="demo" onClick={this.demo}>
                  Demo Login
                </button>
              </div>
              <div className="nav-center">
                  <a href="https://github.com/steventran91/Faybuk">
                    <GitHubIcon style={{ color: "grey" }} />
                  </a>
                  <a href="https://www.linkedin.com/in/steven-tran-318973119/">
                    <LinkedInIcon style={{ color: "grey" }} />
                  </a>
              </div>
            </div>
          </div>
          // <div>
          //   <div className="login-header">
          //     <div className="login-header-content">
          //       <h2>faybuk</h2>
          //       <h3>
          //         Connect with friends and the world around you on Facebook.
          //       </h3>
          //     </div>
          //     <div className="login-form-wrapper">
          //       <div className="login">
          //         <form className="login-form-box" onSubmit={this.handleSubmit}>
          //           <div className="login-form">
          //             <div className="form-errors">{this.renderErrors()}</div>
          //             <label>
          //               <input
          //                 type="email"
          //                 value={this.state.email}
          //                 onChange={this.handleInput("email")}
          //                 placeholder="Email"
          //                 className="login-input"
          //               />
          //             </label>
          //             <br />
          //             <label>
          //               <input
          //                 type="password"
          //                 value={this.state.password}
          //                 onChange={this.handleInput("password")}
          //                 placeholder="Password"
          //                 className="login-input"
          //               />
          //             </label>
          //           </div>
          //           <input
          //             className="login-submit"
          //             type="submit"
          //             value={this.props.formType}
          //           />
          //           <button className="login-button-demo" onClick={this.demo}>
          //             Demo Login
          //           </button>
          //           <hr />
          //           {this.props.otherForm}
          //         </form>
          //       </div>
          //     </div>
          //   </div>
          //   <div className="-login-footer-wrapper">
          //     <div className="login-footer-content">
          //       <p>Steven Tran© 2021</p>
          //       <p>This is a clone of Facebook</p>
          //       <a href="https://github.com/steventran91/Faybuk">
          //         <GitHubIcon style={{ color: "grey" }} />
          //       </a>
          //       <a href="https://www.linkedin.com/in/steven-tran-318973119/">
          //         <LinkedInIcon style={{ color: "grey" }} />
          //       </a>
          //     </div>
          //   </div>
          // </div>
        );
    } 
}

export default withRouter(LoginForm);