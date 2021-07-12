import React from 'react';
import {Redirect, withRouter} from 'react-router-dom';
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";




class SessionForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {

            email: "",
            password: "",
        };
        // console.log(this.props)
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
        this.props.processForm(user).then(this.props.closeModal);
    }

    handleInput(field) {
        return e => this.setState({[field]: e.target.value})
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

    demo(e) {
        e.preventDefault();
        let user = {
            email: "max@max.com",
            password: "123456"
        };
        this.props.processForm(user);
    }

    render() {
        if (this.props.session.currentUser) {
            return <Redirect to="/"></Redirect>;
            // /newsfeed
        }

        return (
          <div>
            <div className="login-header">
              <div className="login-header-content">
                <h2>faybuk</h2>
                <h3>
                  Connect with friends and the world around you on Facebook.
                </h3>
              </div>
              <div className="login-form-wrapper">
                <div className="login">
                  <form className="login-form-box" onSubmit={this.handleSubmit}>
                    <div className="login-form">
                      <div className="form-errors">{this.renderErrors()}</div>
                      <label>
                        <input
                          type="email"
                          value={this.state.email}
                          onChange={this.handleInput("email")}
                          placeholder="Email"
                          className="login-input"
                        />
                      </label>
                      <br />
                      <label>
                        <input
                          type="password"
                          value={this.state.password}
                          onChange={this.handleInput("password")}
                          placeholder="Password"
                          className="login-input"
                        />
                      </label>
                    </div>
                    <input
                      className="login-submit"
                      type="submit"
                      value={this.props.formType}
                    />
                    <button className="login-button-demo" onClick={this.demo}>
                      Demo Login
                    </button>
                    <hr />
                    {this.props.otherForm}
                  </form>
                </div>
              </div>
            </div>
            <div className="-login-footer-wrapper">
              <div className="login-footer-content">
                <p>Steven Tran© 2021</p>
                <p>This is a clone of Facebook</p>
                <a href="https://github.com/steventran91/Faybuk">
                  <GitHubIcon style={{ color: "grey" }} />
                </a>
                <a href="https://www.linkedin.com/in/steven-tran-318973119/">
                  <LinkedInIcon style={{ color: "grey" }} />
                </a>
              </div>
            </div>
          </div>
        );
    } 
}

export default withRouter(SessionForm);