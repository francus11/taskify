import React, { useState } from 'react';

import Layout from './Layout';
import './styles/global.css';

import './styles/signup.css';

import Button from '../components/loginButton';
import StyledInput from '../components/styledInput';

import {Link} from "react-router-dom";
import axios from 'axios';
import config from '../config';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = () => {
        // AXIOS
        console.log('Email:', username);
        console.log('Password:', password);
    };

    axios({
        url: config.apiUrl + "/api/auth/login",
        method: "POST",
        headers: {

        },
        data: {
            username: username.current.value,
            password: password.current.value
        }
    })
    .then(res => {
        console.log(res);
        localStorage.setItem('token', res.data.token);
        navigate('/patterns');
    })
    .catch(e => {
        console.log(e);
    });

        return (
            <Layout>
            <main className='welcome'>
                <div className='welcomeText'>
                    <h2 className='header'>Welcome Back</h2>
                </div>

                <input type='text' placeholder='Username' className='input' value={username} onChange={handleEmailChange}></input>
                <input type='password' placeholder='Password' className='input' value={password} onChange={handlePasswordChange}></input>


                {/* <StyledInput placeholder='example@gmail.com' text='Email'></StyledInput>
                <StyledInput type='password' placeholder='Password' text='Password'></StyledInput> */}
                
                
                
                <p className='subtext__forgot'>Forgot password?</p>
                
                <Link to='/home'> 
                   <button onClick={handleSubmit}>Log in</button>
                </Link>
                <p className='subtext'>Don't have accout <Link to='/reg'><span className='subtext__span'>Sign up</span></Link></p>

                


            
            </main>
            
            </Layout>            
        );
    }
export default Login;