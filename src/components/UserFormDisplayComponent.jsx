import React from 'react'

const UserFormDisplayComponent = (props) => {
  return (
        <fieldset>
            <legend>UserFormDisplayComponent.jsx</legend>
    <div>

        <p> First name : {props.firstname}</p>
        <p> Last name : {props.lastname}</p>
        <p> Username : {props.username}</p>
        <p> Email Address : {props.email}</p>
        <p> Password : {props.password}</p>
        <p> Confirm Password : {props.confirmPassword}</p>
    </div>
        </fieldset>
  )
}

export default UserFormDisplayComponent