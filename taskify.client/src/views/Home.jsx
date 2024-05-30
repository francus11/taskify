import React from 'react';

import Layout from './Layout';
import './styles/global.css';

import './styles/home.css';

import {Link} from "react-router-dom";


import TopBar from '../components/topBar';
import Menu from '../components/sidebarMenu';



class Login extends React.Component {
    render() {
        return (
            <Layout>
                <TopBar />
                <main>
                    <Menu />
                    <div className='content'>
                        <div className='content__header'>
                            <h2 className='pageHeader'>Home</h2>
                        
                        </div>



                    </div>
                    
                </main>
            </Layout>
        );
    }
}
export default Login;