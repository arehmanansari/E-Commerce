import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';
import { FaGoogle } from 'react-icons/fa';
import '../Styles/Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log('Logging In With E-Mail:', email, 'And Password:', password);
    };

    return (
        <div className="login-page">
            <div className="image-container">
                <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                    className="img-fluid"
                    alt="Sample image"
                />
            </div>
            <div className="login-container">
                <div className="signin-with">
                    <h1>
                        Sign In With
                    </h1>
                    <div className="icons">
                        <FaFacebook className="icon" />
                        <FaGoogle className="icon" />
                        <BsTwitterX className="icon" />
                    </div>
                    <p className="or">----------- OR -----------</p>
                </div>
                <div className="login-form">
                    <label>
                        E-Mail Address
                        <input
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>
                    <label>
                        Password
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>
                    <div className="remember-me">
                        <input type="checkbox" />
                        Remember Me
                        <div className="forgot-password">
                            Forgot Password?
                        </div>
                    </div>
                    <div className="login-actions">
                        <button
                            onClick={handleLogin}
                            className='loginbutton'
                        >
                            Log In
                        </button>
                        <div className="register">
                            <Link to="/registration">
                                Don't Have An Account? Register
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;