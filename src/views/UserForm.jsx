import React, { useState } from  'react';
import UserFormDisplayComponent from "../components/UserFormDisplayComponent";
    
const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [firstnameError, setFirstnameError] = useState("");
    const [lastname, setLastname] = useState("");
    const [lastnameError, setLastnameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");  
    const [passwordError, setPasswordError] = useState("");  
    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    
    const handleFirstname = (e) => {
        setFirstname(e.target.value);
         if(e.target.value.length < 2) {
            setFirstnameError("First Name must be 2 characters or longer!");
        } else {
            // an empty string is considered a "falsy" value
            setFirstnameError("");
        }
    }
    const handleLastname = (e) => {
        setLastname(e.target.value);
         if(e.target.value.length < 2) {
            setLastnameError("Last Name must be 2 characters or longer!");
        } else {
            // an empty string is considered a "falsy" value
            setLastnameError("");
        }
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 5) {
            setEmailError("Email must be 5 characters or longer!");
        } else {
            // an empty string is considered a "falsy" value
            setEmailError("");
        }
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 8) {
            setPasswordError("Password must be 8 characters or longer!");
        } else {
            // an empty string is considered a "falsy" value
            setPasswordError("");
        }
    }
    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if(e.target.value !== password) {
            setConfirmPasswordError("Confirmed Password must match Password!");
        } else {
            // an empty string is considered a "falsy" value
            setConfirmPasswordError("");
        }
    }




    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();
    
        // create a javascript object to hold all of the values
        const newUser = {firstname, lastname, email, password, confirmPassword};
        console.log("Welcome", newUser);
        setFirstname("");
        setLastname("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");

        //updating state will change the message to be displayed in the form
        setHasBeenSubmitted( true );
    };

    // const formMessage = () => {
    //     if( hasBeenSubmitted ) {
	//     return "Thank you for submitting the form!";
	// } else {
	//     return "Welcome, please submit the form";
    //   }
    // } replaced with inform ternary operator
    
    return(
        <>
            <form onSubmit={createUser}>
                {
                hasBeenSubmitted ?
                <h3>Thank you for submitting the form!</h3> :
                <h3>Welcome, please submit the form.</h3>
                }
                <div className="box">
                    <label> First Name: </label>
                    <input
                        name="firstname"
                        type="text"
                        value={firstname}
                        onChange={ handleFirstname} />
                        {
                    firstnameError ?
                    <p>{ firstnameError }</p> :
                    ''
                }
                </div>
                
                <div className="box">
                    <label> Last Name: </label>
                    <input
                        name="lastname"
                        type="text"
                        value={lastname}
                        onChange={ handleLastname} />
                        {
                    lastnameError ?
                    <p>{ lastnameError }</p> :
                    ''
                }
                </div>
                <div className="box">
                    <label>Email Address: </label>
                    <input
                        name="email"
                        type="text"
                        value={email}
                        onChange={ handleEmail} />
                        {
                    emailError ?
                    <p>{ emailError }</p> :
                    ''
                }
                </div>
                <div className="box">
                    <label>Password: </label>
                    <input
                        name="password"
                        type="text"
                        value={password}
                        onChange={ handlePassword} />
                        {
                    passwordError ?
                    <p>{ passwordError }</p> :
                    ''
                }
                </div>
                <div className="box">
                    <label>Confirm Password: </label>
                    <input
                        name="confirmPassword"
                        type="text"
                        value={confirmPassword}
                        onChange={ handleConfirmPassword} />
                        {
                    confirmPasswordError ?
                    <p>{ confirmPasswordError }</p> :
                    ''
                }
                </div>
                <input type="submit" value="Create User" />
            </form>
            {/* <UserFormDisplayComponent firstname={firstname} lastname={lastname} email={email} password={password} confirmPassword={confirmPassword} /> */}
        </>
    );
};
    
export default UserForm;
