import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import { postLogin } from "../redux/actions/UserActions";

function SignupPage() {
    const { email, password } = useSelector((state) => state.users);
    const dispatch = useDispatch();
    const history = useHistory();
    
      useEffect(() => {
        if (Cookies.get("token")) {
          history.push("/");
        }
      }, [history]);
    
      const [userLogin, setUserLogin] = useState({
        email: email,
        password: password,
      });
    
      const handleLogin = (e) => {
        setUserLogin({
          ...userLogin,
          [e.target.name]: e.target.value,
        });
      };
    
      const submitLogin = (e) => {
        e.preventDefault();
        const body = {
          email: userLogin.email,
          password: userLogin.password,
        };
        dispatch(postLogin(body))
          .then(() => window.location.reload());
      };
      
    return (
        <div className='login'>
            <div className="login-form">
              <h2>Welcome Back!</h2>
              <form onSubmit={submitLogin}>
                <p>
                  Name<span>*</span>
                </p>
                <div className="email-password-field">
                  <input
                    type="text"
                    placeholder="Enter your name"
                    name="name"
                    onChange={(e) => handleLogin(e)}
                  />
                </div>
                <br />
                <p>
                  Email<span>*</span>
                </p>
                <div className="email-password-field">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    onChange={(e) => handleLogin(e)}
                  />
                </div>
                <br />
                <p>
                  Password<span>*</span>
                </p>
                <div className="email-password-field">
                  <input
                    type="password"
                    placeholder="Enter your password here"
                    name="password"
                    onChange={(e) => handleLogin(e)}
                  />
                </div>
                <br/>
                <p>
                  Confirmation Password<span>*</span>
                </p>
                <div className="email-password-field">
                  <input
                    type="password"
                    placeholder="Enter your password here"
                    name="password"
                    onChange={(e) => handleLogin(e)}
                  />
                </div>
                <br/>
                <div className="signup-login">
                  Already have account?{" "}
                  <Link to="/">
                    <span>Login</span>
                  </Link>
                </div>
                <br/>
                <div className="btn-login">
                  <button type="submit" className="login-button">
                    Signup
                  </button>
                </div>
              </form>
            </div>
          </div>
    )
}

export default SignupPage;
