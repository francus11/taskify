import React from 'react';

import Layout from './Layout';
import './styles/welcome.css';

import Logo from '../images/taskify.svg';

import Button from '../components/loginButton';

// import {Link} from "react-router-dom";

class Welcome extends React.Component {
    render() {
        return (
            <Layout>
                <main className='welcome'>
                    <div className='welcome__logo'>
                        <img src={Logo} alt="Logo" width={75} height={75}/> 
                        <h2 className='header'>Taskify</h2>
                    </div>
                    
                    <Button text="Log in" />
                    <Button text="Sing up" />
                </main>
                
            </Layout>            
        );
    }
}
export default Welcome;