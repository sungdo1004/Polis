import React from 'react';
import SignupLogButton from './signup';


const Header = (props)=>{
return (
  <div>
    <div>Stock-Up</div>
    <SignupLogButton enteredUsername = {props.enteredUsername} enteredPassword = {props.enteredPassword} 
      passwordChangeHandler ={props.passwordChangeHandler} usernameChangeHandler ={props.usernameChangeHandler}
      LoginClick = {props.LoginClick} SignupClick= {props.SignupClick}/>
  
  </div>
);
}
export default Header