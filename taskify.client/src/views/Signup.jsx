import React, { useState } from 'react';

import Layout from './Layout';
import './styles/global.css';
import './styles/signup.css';

import Facebook from '../components/facebookButton';

import classNames from 'classnames';

import { Link } from "react-router-dom";

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [loginError, setLoginError] = useState(false);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleRepeatPasswordChange = (e) => {
        setRepeatPassword(e.target.value);
    };

    const isPasswordMatch = () => {
        return password === repeatPassword;
    };

    const handleSubmit = () => {
        if (!isPasswordMatch()) {
            // alert('Hasla nie sa takie same');
            setLoginError(true);
            
        } else {
            setLoginError(false);
            localStorage.setItem('email', email);
            localStorage.setItem('password', password);

        }

        
    };

    return (
        <Layout>
            <main className='welcome'>
                <div className='welcomeText'>
                    <h2 className='header'>Sign up</h2>
                </div>
                <input type='text' placeholder='example@gmail.com' className='input' value={email} onChange={handleEmailChange}></input>
                <input type='password' placeholder='password' className={classNames('input', { 'input__error': loginError })} value={password} onChange={handlePasswordChange}></input>
                <input type='password' placeholder='repeat password' className={classNames('input', { 'input__error': loginError })} value={repeatPassword} onChange={handleRepeatPasswordChange}></input>

                <div className='ContinueWith'>
                    <Facebook text='Continue with Facebook' type='fb' />
                    <Facebook text='Continue with Google' type='gl' />
                </div>

                {isPasswordMatch() ? (

                    <button className='button' onClick={handleSubmit}>
                    <Link to='/reg2'>
                        Continue
                    </Link>
                    </button>
                ) : (
                    <button className='button' onClick={handleSubmit}>
                        Continue
                    </button>
                )}

                <p className='subtext'>Already have an account? <Link to='/log'><span className='subtext__span'>Log in</span></Link></p>
            </main>
        </Layout>
    );
}

export default Signup;
