import React, { useState, useEffect, useRef } from 'react';
import './styles/topBar.css';

import { createPopper } from '@popperjs/core';

import Logo from '../images/taskify.svg';
import Avatar from '../images/stock.png';
import Search from '../images/search_icon.svg';

import { Link } from 'react-router-dom';


const TopBar = () => {
    const [referenceElement, setReferenceElement] = useState(null);
    const [popperElement, setPopperElement] = useState(null);
    const [showMenu, setShowMenu] = useState(false);
    const popperInstanceRef = useRef(null);

    useEffect(() => {
        if (referenceElement && popperElement) {
            const instance = createPopper(referenceElement, popperElement, {
                placement: 'bottom'
            });
            popperInstanceRef.current = instance;

            return () => {
                instance.destroy();
            };
        }
    }, [referenceElement, popperElement]);

    const handleIconClick = () => {
        setShowMenu(prev => !prev);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                popperElement &&
                referenceElement &&
                !popperElement.contains(event.target) &&
                !referenceElement.contains(event.target)
            ) {
                setShowMenu(false);
            }
        };

        if (showMenu) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showMenu, popperElement, referenceElement]);


    const handleSearch = (event) => {
        const searchTerm = event.target.value;
        // My search logic
    };

    return (
        <div className='topBar'>
            <div className='topBar__logo' >
                <img src={Logo} alt="Logo" width={40} height={40}/> 
                <h2 className='header'>Taskify</h2>
            </div>
            <div className='topBar__searchbar'>
                <img src={Search} alt="Search" width={20} height={20} className='searchIcon' />
                <input type="text" placeholder="just search bar" onChange={handleSearch}></input>
                
            </div>

            <div className='topBar__profile' ref={setReferenceElement}>
                <img src={Avatar} width={40} height={40} alt="Avatar" onClick={handleIconClick} />
            </div>


            {showMenu && (
                <div className="PopperMenu__container" ref={setPopperElement} style={popperInstanceRef.current?.state.styles.popper} {...popperInstanceRef.current?.state.attributes.popper}>
                    <ul className='PopperMenu__container__menu'>
                        <Link to='/profile'>
                            <li>Profile</li>
                        </Link>
                        
                    </ul>
                </div>
            )}
        </div>
    );
}


export default TopBar;