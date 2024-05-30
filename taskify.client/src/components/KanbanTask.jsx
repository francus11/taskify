import React, { useState, useEffect, useRef } from 'react';
import { createPopper } from '@popperjs/core';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { motion, AnimatePresence } from 'framer-motion';
import Modal from '../components/modals/previevTaskModal';


import '../views/styles/global.css';
import './styles/kanban/kanbanTask.scss';
import image from '../images/kanban.jpg';

const KanbanTask = (props) => {
    const [referenceElement, setReferenceElement] = useState(null);
    const [popperElement, setPopperElement] = useState(null);
    const [showMenu, setShowMenu] = useState(false);
    const popperInstanceRef = useRef(null);

    const [isOpen, setIsOpen] = useState(false);
    const close = () => setIsOpen(false);
    const open = () => setIsOpen(true);

    useEffect(() => {
        if (referenceElement && popperElement) {
            const instance = createPopper(referenceElement, popperElement, {
                placement: 'right-start'
            });
            popperInstanceRef.current = instance;

            return () => {
                instance.destroy();
            };
        }
    }, [referenceElement, popperElement]);

    const handleIconClick = () => {
        setShowMenu((prevShowMenu) => !prevShowMenu);
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

    return (
        <div className="KanbanTask">
            <div className="KanbanTask__logo">
                <img src={image} alt="Icon" />
            </div>
            <div className="KanbanTask__body">
                <div className="KanbanTask__body__header" ref={setReferenceElement}>
                    <h3 className="header">{props.title}</h3>
                    <BsThreeDotsVertical className="icon" onClick={handleIconClick} />
                </div>
                <div className="KanbanTask__body__content">
                    <p className="content">Task_ Description - mozna opisac kiedy paliwo po 5,19zł/L</p>
                </div>
                <div className="KanbanTask__footer">
                    <div className="KanbanTask__footer__dueto">
                        <p className="dueto">Due to</p>
                        <p className="date">12.12.2021</p>
                    </div>
                    <motion.button onClick={() => (isOpen ? close() : open())} className='button'>See</motion.button>
                </div>
            </div>

            <AnimatePresence initial={false} onExitComplete={() => null}>
                        {isOpen && <Modal isOpen={isOpen} handleClose={close} />}
            </AnimatePresence>



            {showMenu && (
                <div className="PopperMenu__container" ref={setPopperElement} style={popperInstanceRef.current?.state.styles.popper} {...popperInstanceRef.current?.state.attributes.popper}>
                    <ul className='PopperMenu__container__menu'>
                        <li>Edit</li>
                        <li className='PopperMenu__container__menu__delete'>Delete</li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default KanbanTask;
