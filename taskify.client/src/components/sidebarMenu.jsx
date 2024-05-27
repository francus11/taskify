import React from 'react';
import './styles/sidebarMenu.css';

import SidebarItem from './sidebarItem';

import items from "../../public/sidebar_data.json";

const SidebarMenu = () => {
    return (
        <div className='sidebar'>
            { items.map((item, index) => <SidebarItem key={index} item={item} />) }
        </div>
    );
}

export default SidebarMenu;