import React from 'react';

import Layout from './Layout';
import './styles/global.css';

import './styles/signup.css';

import Button from '../components/loginButton';
import StyledInput from '../components/styledInput';

import {Link} from "react-router-dom";

class Login extends React.Component {
    render() {
        return (
            <Layout>
            <main className='welcome'>
                <div className='welcomeText'>
                    <h2 className='header'>Welcome Back</h2>
                </div>
                <StyledInput placeholder='example@gmail.com' text='Email'></StyledInput>
                <StyledInput type='password' placeholder='Password' text='Password'></StyledInput>
                <p className='subtext__forgot'>Forgot password?</p>
                
                <Link to='/home'>
                   <Button text='Log in'></Button> 
                </Link>
                <p className='subtext'>Don't have accout <Link to='/reg'><span className='subtext__span'>Sign up</span></Link></p>

                


            
            </main>
            
            </Layout>            
        );
    }
}
export default Login;