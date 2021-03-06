import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { closeModal } from '../../actions/modal_actions';


class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            month: "Jan",
            day: "1",
            year: "2021",
            gender: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demo = this.demo.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }

    componentDidMount() {
        this.props.clearErrors();
    }

    handleSubmit(e) {
        e.preventDefault();
        this.counter++;
        let user = Object.assign({}, this.state);
        user["birthday"] = `${this.state.month} ${this.state.day} ${this.state.year}`;
        delete user[month];
        delete user[day];
        delete user[year];
        this.props.processForm(user).then(this.props.closeModal);
    }

    handleInput(field) {
        return e => this.setState({ [field]: e.target.value })
    }

    renderErrors(field) {
        for (let i = 0; i < this.props.errors.length; i++) {
            if (this.props.errors[i].includes(field)) {
                return <li>{this.props.errors[i]}</li>
            }
        }
        return null; 
    }

    demo() {
        let user = {
            email: "user@user.com",
            password: "123456"
        };
        this.props.processForm(user);
    }



    render() {
        const selectDays = () => {
            const selectDays = [];
            for (let i = 1; i <= 31; i++) {
                selectDays.push(i);
            }
            return selectDays;
        };
        const selectYears = () => {
            const selectYears = [];
            for (let i = 2021; i >= 1991; i--) {
                selectYears.push(i);
            }
            return selectYears;
        };


        return (
          <div className="register">
            <div className="register-container">
              <h2>Sign Up</h2>
              <h4>It's quick and easy.</h4>
              <div className="hr3" />
              <form onSubmit={this.handleSubmit}>
                <div className="close-x" onClick={this.props.closeModal}>x</div>
                <div className="row">
                    <input
                        className="register-name"
                        type="text"
                        value={this.state.first_name}
                        onChange={this.handleInput("first_name")}
                        placeholder="First Name"
                      />
                    <input
                        className="register-name"
                        type="text"
                        value={this.state.last_name}
                        onChange={this.handleInput("last_name")}
                        placeholder="Last Name"
                      />
                </div>
                {!this.renderErrors("First") || !this.renderErrors("Last") ? null : (<div className="form-errors">????</div>)}
                <center>
                    <input
                        type="email"
                        value={this.state.email}
                        onChange={this.handleInput("email")}
                        placeholder="Email"
                      />
                </center>
                <div className="form-errors">{this.renderErrors("Email")}</div>
                <center>
                    <input
                        type="password"
                        value={this.state.password}
                        onChange={this.handleInput("password")}
                        placeholder="Password"
                      />
                </center>
                <div className="form-errors">{this.renderErrors("Password")}</div>
                <h5 className="register-date">Birthday</h5>
                <div className="row">
                    <select className="register-date2" id="month" onChange={this.handleInput("month")}value={this.state.month}>
                          <option value="Jan">Jan</option>
                          <option value="Feb">Feb</option>
                          <option value="Mar">Mar</option>
                          <option value="Apr">Apr</option>
                          <option value="May">May</option>
                          <option value="Jun">Jun</option>
                          <option value="Jul">Jul</option>
                          <option value="Aug">Aug</option>
                          <option value="Sep">Sep</option>
                          <option value="Oct">Oct</option>
                          <option value="Nov">Nov</option>
                          <option value="Dec">Dec</option>
                    </select>
                    <select className="register-date3" id="day" onChange={this.handleInput("day")}value={this.state.day}>
                          {selectDays().map((day) => (
                            <option key={`day${day}`} value={`${day}`}>{`${day}`}</option>))}
                    </select>
                    <select className="register-date4" id="year" onChange={this.handleInput("year")} value={this.state.year}>
                          {selectYears().map((year) => (<option key={`year${year}`} value={`${year}`}>{`${year}`}</option>))}
                    </select>
                </div>
                <div className="form-errors">{this.renderErrors("Birthday")}</div>
                <h5 className="register-gender">Gender</h5>
                <div className="register-radiocontainer">
                    <div className="wrapper">
                           <label>Male:</label>
                           <input
                            type="radio"
                            onChange={this.handleInput("gender")}
                            checked={this.state.gender === "Male"}
                            value="Male"
                          />
                    </div> 
                    <div className="wrapper">
                           <label>Female:</label>
                           <input
                            type="radio"
                            onChange={this.handleInput("gender")}
                            checked={this.state.gender === "Female"}
                            value="Female"
                          />
                     </div> 
                    <div className="wrapper">
                           <label>Other:</label>
                           <input
                            type="radio"
                            onChange={this.handleInput("gender")}
                            checked={this.state.gender === "Other"}
                            value="Other"
                          />
                    </div>         
                </div>
                <div className="form-errors">{this.renderErrors("Gender")}</div>
                <center>
                    <button type="submit" className="register-register">{this.props.formType}</button>
                </center>
              </form>
            </div>
          </div>

          //   <div className="signup-form-wrapper">
          //     <div className="signup-header-content">
          //       <h2>Sign Up</h2>
          //       <h4>It's quick and easy.</h4>
          //       <div className="divider"></div>
          //     </div>
          //     <form onSubmit={this.handleSubmit}>
          //       <div className="close-x" onClick={this.props.closeModal}>
          //         x
          //       </div>
          //       <div>
          //         <div className="signup-form-contents">
          //           <div className="input-name">
          //             <input
          //               type="text"
          //               value={this.state.first_name}
          //               onChange={this.handleInput("first_name")}
          //               placeholder="First Name"
          //             />
          //             <input
          //               type="text"
          //               value={this.state.last_name}
          //               onChange={this.handleInput("last_name")}
          //               placeholder="Last Name"
          //             />
          //           </div>
          //           {!this.renderErrors("First") ||
          //           !this.renderErrors("Last") ? null : (
          //             <div className="form-errors">????</div>
          //           )}
          //           <div className="input-email">
          //             <input
          //               type="email"
          //               value={this.state.email}
          //               onChange={this.handleInput("email")}
          //               placeholder="Email"
          //             />
          //           </div>
          //           <div className="form-errors">
          //             {this.renderErrors("Email")}
          //           </div>
          //           <div className="input-password">
          //             <input
          //               type="password"
          //               value={this.state.password}
          //               onChange={this.handleInput("password")}
          //               placeholder="Password"
          //             />
          //           </div>
          //           <div className="form-errors">
          //             {this.renderErrors("Password")}
          //           </div>
          //           <div className="birthdate-wrapper">
          //             <div className="birthdate-label">Birthdate</div>
          //             <div className="birthdate-selector">
          //               <select
          //                 id="month"
          //                 onChange={this.handleInput("month")}
          //                 value={this.state.month}
          //               >
          //                 <option value="Jan">Jan</option>
          //                 <option value="Feb">Feb</option>
          //                 <option value="Mar">Mar</option>
          //                 <option value="Apr">Apr</option>
          //                 <option value="May">May</option>
          //                 <option value="Jun">Jun</option>
          //                 <option value="Jul">Jul</option>
          //                 <option value="Aug">Aug</option>
          //                 <option value="Sep">Sep</option>
          //                 <option value="Oct">Oct</option>
          //                 <option value="Nov">Nov</option>
          //                 <option value="Dec">Dec</option>
          //               </select>
          //               <select
          //                 id="day"
          //                 onChange={this.handleInput("day")}
          //                 value={this.state.day}
          //               >
          //                 {selectDays().map((day) => (
          //                   <option
          //                     key={`day${day}`}
          //                     value={`${day}`}
          //                   >{`${day}`}</option>
          //                 ))}
          //               </select>
          //               <select
          //                 id="year"
          //                 onChange={this.handleInput("year")}
          //                 value={this.state.year}
          //               >
          //                 {selectYears().map((year) => (
          //                   <option
          //                     key={`year${year}`}
          //                     value={`${year}`}
          //                   >{`${year}`}</option>
          //                 ))}
          //               </select>
          //             </div>
          //             <div className="form-errors">
          //               {this.renderErrors("Birthdate")}
          //             </div>
          //             <div className="gender-label">Gender</div>
          //             <div className="gender-wrapper">
          //               <div className="wrapper">
          //                 <label>Male:</label>
          //                 <input
          //                   type="radio"
          //                   onChange={this.handleInput("gender")}
          //                   checked={this.state.gender === "Male"}
          //                   value="Male"
          //                 />
          //               </div>
          //               <div className="wrapper">
          //                 <label>Female:</label>
          //                 <input
          //                   type="radio"
          //                   onChange={this.handleInput("gender")}
          //                   checked={this.state.gender === "Female"}
          //                   value="Female"
          //                 />
          //               </div>
          //               <div className="wrapper">
          //                 <label>Other:</label>
          //                 <input
          //                   type="radio"
          //                   onChange={this.handleInput("gender")}
          //                   checked={this.state.gender === "Other"}
          //                   value="Other"
          //                 />
          //               </div>
          //             </div>
          //             <div className="form-errors">
          //               {this.renderErrors("Gender")}
          //             </div>
          //             {/* <button className="signup-submit-button">{this.props.formType}</button> */}
          //           </div>
          //           <div className="signup-button-container">
          //             <button className="signup-submit-button">
          //               {this.props.formType}
          //             </button>
          //           </div>
          //         </div>
          //       </div>
          //     </form>
          //   </div>
        );
    }
}

export default withRouter(SignupForm);