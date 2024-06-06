import { motion } from 'framer-motion';
import React, { useState } from 'react';

import Backdrop from './backdrop/backdrop';

import './taskModal.css';
import IMG1 from '../../images/hanks.jpg';
import IMG2 from '../../images/robert.jpg';
import IMG3 from '../../images/roberto.jpg';

const dropIn = {
    hidden: {
        y: '-100vh',
        opacity: 0
    },
    visible: {
        y: "0",
        opacity: 1,
        transition: {
            duration: 0.1,
            type: 'spring',
            damping: 25,
            stiffness: 500
        }
    },
    exit: {
        y: '100vh',
        opacity: 0
    }
};

const MemebersModal = ({ handleClose, addTask }) => {


    return (
        <Backdrop onClick={handleClose}>
            <motion.div 
                onClick={(e) => e.stopPropagation()} 
                className='membersModal' 
                variants={dropIn}
                initial='hidden'
                animate='visible'
                exit='exit'
            >

                <div className="members">
                    <div className='membersModal__header'>
                        <h2 className='header'>Members</h2>
                    </div>
                    <div className='membersModal__content'>
                        <div className='membersModal__content__tile'>
                            <div className="membersModal__content__tile__avatar">
                                <img src={IMG1} alt="Avatar" className="avatar" />
                            </div>
                            <div className="membersModal__content__tile__text">
                                <h3 className="name">Tom Hanks</h3>
                                <p className="role">Frontend Developer</p>
                            </div>
                        </div>
                        <div className='membersModal__content__tile'>
                            <div className="membersModal__content__tile__avatar">
                                <img src={IMG2} alt="Avatar" className="avatar" />
                            </div>
                            <div className="membersModal__content__tile__text">
                                <h3 className="name">Rober Downey Jr.</h3>
                                <p className="role">React Developer</p>
                            </div>
                        </div>
                        <div className='membersModal__content__tile'>
                            <div className="membersModal__content__tile__avatar">
                                <img src={IMG3} alt="Avatar" className="avatar" />
                            </div>
                            <div className="membersModal__content__tile__text">
                                <h3 className="name">Roberto Rodriguez</h3>
                                <p className="role">Angular Developer</p>
                            </div>
                        </div>
                    </div>
                </div>

                <button className='button'>Add Member</button>

                

            </motion.div>
        </Backdrop>
    );
};

export default MemebersModal;
