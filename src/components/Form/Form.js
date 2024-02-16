import React from "react";
import "./Form.css";

export default class App extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            firstNameData: '',
            lastNameData: '',
            emailData: '',

            submitted: false,

            allValid: false,

        }

        this.submited = this.submited.bind(this);
        this.emailValidation = this.emailValidation.bind(this);
        this.fistNameValidation = this.fistNameValidation.bind(this);
        this.lastNameValidation = this.lastNameValidation.bind(this);
    }
    submited(event) {
        event.preventDefault()
        this.setState({
            submitted: true
        })
        if(this.state.firstNameData.length !==0 &&
             this.state.lastNameData.length !==0 &&
             this.state.emailData.length !==0){
                this.setState({
                    allValid: true
                })
                setTimeout(()=>{
                    this.setState({
                        allValid:false
                    })
                }, 5000);
             }
    }
    fistNameValidation(event) {
        this.setState({
            firstNameData: event.target.value
        })
    }
    lastNameValidation(event) {
        this.setState({
            lastNameData: event.target.value
        })
    }

    emailValidation(event) {
        this.setState({
            emailData: event.target.value
        })
    }

    render() {
        return (
            <div className="form-container">
                <form className="register-form" autoComplete="off" onSubmit={this.submited}>
                    {/* Uncomment the next line to show the success message */}
                    {this.state.submitted && this.state.allValid &&(
                    <div className="success-message" value="false">Success! Thank you for registering</div> ) }
                    <input
                        id="first-name"
                        className="form-field"
                        type="text"
                        placeholder="First Name"
                        name="firstName"
                        value={this.state.firstNameData}
                        onChange={this.fistNameValidation}
                    />
                    {/* Uncomment the next line to show the error message */}
                    {this.state.submitted && this.state.firstNameData.length === 0 && (

                        <span id="first-name-error">Please enter a first name</span>)}
                    
                    <input
                        id="last-name"
                        className="form-field"
                        type="text"
                        placeholder="Last Name"
                        name="lastName"
                        value={this.state.lastNameData}
                        onChange={this.lastNameValidation}

                    />
                    {/* Uncomment the next line to show the error message */}
                    {this.state.submitted && this.state.lastNameData.length === 0 && (

                        <span id="last-name-error">Please enter a last name</span>)}
                    <input
                        id="email"
                        className="form-field"
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={this.state.emailData}
                        onChange={this.emailValidation}
                    />
                    {/* Uncomment the next line to show the error message */}
                    {this.state.submitted && this.state.emailData.length === 0 && (
                        <span id="email-error">Please enter an email address</span>
                    )}
                    {/*   */}
                    <button className="form-field" type="submit">
                        Register
                    </button>
                </form>
            </div>

        )
    }
}
