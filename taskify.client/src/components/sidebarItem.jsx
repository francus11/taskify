import { useState } from 'react';
import React from 'react';
import './styles/sidebar/sidebarItem.css';
import { BiChevronDown } from 'react-icons/bi';
import { Link } from 'react-router-dom';


export default function SidebarItem({ item }) {
    const [open, setOpen] = useState(false);

    if (item.childrens) {
        return (
            <div className={open ? "sidebar__item open" : "sidebar__item"}>
                <div className='sidebar__item__title' onClick={() => setOpen(!open)}>
                    <span>
                        {item.title}
                    </span>
                    <BiChevronDown className='sidebar__item__title__icon' />
                </div>
                <div className='sidebar__item__content'>
                    {item.childrens.map((child, index) => <SidebarItem key={index} item={child} />)}
                </div>
            </div>
        );
    } else {
        return (
            <div className="sidebar__item">
                <div className='sidebar__item__title'>
                    <Link to={item.path || "#"}>
                        <span>
                            {item.title}
                        </span>
                    </Link>
                </div>
            </div>
        );
    }
}
