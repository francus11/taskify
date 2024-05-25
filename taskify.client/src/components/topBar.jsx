import React from 'react';
import './styles/topBar.css';

import Logo from '../images/taskify.svg';
import Avatar from '../images/margot_avatar.jpg';
import Search from '../images/search_icon.svg';


const TopBar = () => {
    const handleSearch = (event) => {
        const searchTerm = event.target.value;
        // My search logic
    };

    return (
        <div className='topBar'>
            <div className='topBar__logo'>
                <img src={Logo} alt="Logo" width={40} height={40}/> 
                <h2 className='header'>Taskify</h2>
            </div>
            <div className='topBar__searchbar'>
                <img src={Search} alt="Search" width={20} height={20} className='searchIcon' />
                <input type="text" placeholder="just search bar" onChange={handleSearch}></input>
                
            </div>

            <div className='topBar__profile'>
                <img src={Avatar} width={40} height={40} alt="Avatar" />
            </div>
        </div>
    );
}


export default TopBar;