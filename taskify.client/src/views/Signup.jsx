import React from 'react';

import Layout from './Layout';
import './styles/global.css';

import './styles/signup.css';

import Button from '../components/loginButton';
import StyledInput from '../components/styledInput';
import Facebook from '../components/facebookButton';

import {Link} from "react-router-dom";

class Signup extends React.Component {
    render() {
        return (
            <Layout>
            <main className='welcome'>
                <div className='welcomeText'>
                    <h2 className='header'>Sign up</h2>
                </div>
                <StyledInput placeholder='example@gmail.com' text='Email'></StyledInput>
                <StyledInput type='password' placeholder='password' text='Create password'></StyledInput>
                <StyledInput type='password' placeholder='repeat password' text='Confirm password'></StyledInput>

                <div className='ContinueWith'>
                    <Facebook text='Continue with Facebook' type='fb' />
                    <Facebook text='Continue with Google' type='gl' />
                </div>
                
                
                <Link to='/reg2'>
                   <Button text='Sign up'></Button> 
                </Link>
                <p className='subtext'>Already have account? <Link to='/log'><span className='subtext__span'>Log in</span></Link></p>

                


            
            </main>
            
            </Layout>            
        );
    }
}
export default Signup;