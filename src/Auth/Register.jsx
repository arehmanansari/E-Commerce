import React, { useState } from 'react';
import { FaFacebook } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../Styles/Login.css';

const Registration = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleLogin = () => {
        console.log(
            'Loging In With First Name:', firstName,
            'Last Name:', lastName,
            'E-Mail:', email,
            'Password:', password
        );
    };

    return (
        <div className="login-page">
            <div className="image-container">
                <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                    className="img-fluid"
                    alt="Sample image"
                />
            </div>
            <div className="login-container">
                <div className="login-form">
                    <label>
                        First Name
                        <input
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </label>
                    <label>
                        Last Name
                        <input
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </label>
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
                    <div className="login-actions">
                        <button
                            onClick={handleLogin}
                            className='signinbutton'
                        >
                            Sign In
                        </button>
                    </div>
                </div>
                <div style={{textAlign:"center"}}>
                    <Link to="/login">
                        Already Have An Account? Log In
                    </Link>
                </div>
                <div className="signin-with">
                    <p className="or">----------- OR -----------</p>
                    <h1>
                        Sign In With
                    </h1>
                    <div className="icons">
                        <FaFacebook className="icon" />
                        <FaGoogle className="icon" />
                        <BsTwitterX className="icon" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;