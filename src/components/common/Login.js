import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {login} from '../Shared/LoginDetails';
import './login.css';
// import loginBanner from '../../images/login-banner1.jpg'

const Login = () => {
   
    const[loginDetails,setLoginDetails]=useState({username:"",password:""});
    const navigate=useNavigate();
    const handleChange=(e)=>{
        setLoginDetails({...loginDetails,[e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
e.preventDefault();
console.log("login",loginDetails);
if((login.username===loginDetails.username)&&(login.password===loginDetails.password)){
   
	sessionStorage.setItem("auth",true);
	navigate('/'); 
}
else{
    navigate('/login');
   
}
    }
  return (
    <>
   <img className="wave" src="https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/master/img/wave.png"/>
	<div className="container-login">
		<div className="img">
			<img src="https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/master/img/bg.svg"/>
			{/* <img src={loginBanner} alt="login"/> */}
		</div>
		<div className="login-content">
			<form onSubmit={handleSubmit}>
				<img src="https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/master/img/avatar.svg"/>
				<h2 className="title">Welcome</h2>
           		<div className="input-div one">
           		   <div className="i">
           		   		<i className="fas fa-user"></i>
           		   </div>
           		   <div className="div">
           		   		<h5>Username</h5>
           		   		<input type="text" className="input" onChange={handleChange} name="username" value={loginDetails.username}/>
           		   </div>
           		</div>
           		<div className="input-div pass">
           		   <div className="i"> 
           		    	<i className="fas fa-lock"></i>
           		   </div>
           		   <div className="div">
           		    	<h5>Password</h5>
           		    	<input type="password" className="input" onChange={handleChange} name="password" value={loginDetails.password}/>
            	   </div>
            	</div>
            	<a href="#">Forgot Password?</a>
            	<input type="submit" className="btn-login" value="Login"/>
            </form>
        </div>
    </div>
    
    </>
  )
}

export default Login