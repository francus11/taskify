import React from 'react';

import Layout from './Layout';
import './styles/global.css';

import './styles/home.css';

import {Link} from "react-router-dom";


import TopBar from '../components/topBar';



class Login extends React.Component {
    render() {
        return (
            <Layout>
                <TopBar />                


    
            
            </Layout>            
        );
    }
}
export default Login;