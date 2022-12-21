import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const LoginSignup = () => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(true)
  const [loginForm, setLoginForm] = useState({
    username:"",
    password:""
  })
  useEffect(() => {
    if(sessionStorage.getItem("username"))
    {
      navigate("/")
    }
   setToggle(false)
  }, [])
  const loginHandler = () =>{
    if(loginForm.username==="Sahil" && loginForm.password==="1234")
    {
      sessionStorage.setItem("username",loginForm.username)
      setTimeout(() => {
        navigate(0)
      }, 1000);
    }
    else if(loginForm.username==="Patient" && loginForm.password==="1234")
    {
      sessionStorage.setItem("username",loginForm.username)
      setTimeout(() => {
        navigate(0)
      }, 1000);
    }
    else
    {
      console.log("invalid credentials")
    }
  }
  return (
    <div className={toggle?"container sign-in":"container sign-up"} id="container">
    <div className="row">  
      <div className="col align-items-center flex-col sign-up">
        <div className="form-wrapper align-items-center">
          <div className="form sign-up">
            <div className="input-group">
              <i className='bx bxs-user'></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-group">
              <i className='bx bx-mail-send'></i>
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-group">
              <i className='bx bxs-lock-alt'></i>
              <input type="password" placeholder="Password" />
            </div>
            <div className="input-group">
              <i className='bx bxs-lock-alt'></i>
              <input type="password" placeholder="Confirm password" />
            </div>
            <button>
              Sign up
            </button>
            <p>
              <span>
                Already have an account?
              </span>
              <br />
              <b onClick={()=>{
                setTimeout(() => {
                  setToggle(true);
                }, 200);
              }} className="pointer"
              style={{color:"var(--primary)"}}>
                Sign in here
              </b>
            </p>
          </div>
        </div>
      </div>    
      <div className="col align-items-center flex-col sign-in">
        <div className="form-wrapper align-items-center">
          <div className="form sign-in">
            <div className="input-group">
              <i className='bx bxs-user'></i>
              <input type="text" placeholder="Username" onChange={(e)=>setLoginForm({...loginForm,username:e.target.value})}/>
            </div>
            <div className="input-group">
              <i className='bx bxs-lock-alt'></i>
              <input type="password" placeholder="Password" onChange={(e)=>setLoginForm({...loginForm,password:e.target.value})}/>
            </div>
            <button onClick={loginHandler}>
              Sign in
            </button>
            <p>
              <b>
                Forgot password?
              </b>
            </p>
            <p>
              <span>
                Don't have an account?&nbsp; 
              </span>
              <b onClick={()=>{
                setTimeout(() => {
                  setToggle(false);
                }, 200);
              }} className="pointer"
              style={{color:"var(--primary)"}}>
                Sign up here
              </b>
            </p>
          </div>
        </div>
        <div className="form-wrapper">
  
        </div>
      </div>  
    </div>
    <div className="row content-row">  
      <div className="col align-items-center flex-col">
        <div className="text sign-in">
          <h2>
            Welcome User!
          </h2>
  
        </div>
        <div className="img sign-in">
  
        </div>
      </div>    
      <div className="col align-items-center flex-col">
        <div className="img sign-up">
  
        </div>
        <div className="text sign-up">
          <h2>
             Join us
          </h2>
  
        </div>
      </div>  
    </div>
  </div>
  );
};

export default LoginSignup;
