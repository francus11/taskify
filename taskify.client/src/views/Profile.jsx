import React from 'react';

import Layout from './Layout';
import './styles/global.css';
import './styles/profile.css';



import {Link} from "react-router-dom";

import TopBar from '../components/topBar';
import Menu from '../components/sidebarMenu';

import Avatar from '../images/stock.png';




const Profile = () => {
   
        return (
            <Layout>
                <TopBar />
                <main>
                    <Menu />
                    <div className='content'>
                        <div className='content__header'>
                            <h2 className='pageHeader'>Profile</h2>
                        </div>
                        <div className='content__body'>
                            <div className='content__body__avatar'>
                                <img src={Avatar} alt='avatar' />
                                <div className='content__body__avatar'>
                                    <h2 className='header'>Jakub Burek</h2>
                                    <p className='subtext'>jakub69@gmail.com</p>
                                </div>
                            </div>

                            <div className='content__body__info'>
                                <h3 className='header'>Edit Your Data</h3>
                                <input type="text" placeholder="Name" className="input" />
                                <input type="text" placeholder="Surname" className="input" />
                                <input type="text" placeholder="Phone" className="input" />
                                <input type="text" placeholder="Change Password" className="input" />
                                <input type="text" placeholder="Stanowisko" className="input" />
                                <input type="text" placeholder="Phone" className="input" />
                                <input type='file' className='input' placeholder='Choose your image'/>

                                <button className="button">Save changes</button>
                            </div>
                            
                        </div>
                    </div>
                </main>
            </Layout>
        );
}
export default Profile;