import { motion } from 'framer-motion';
import React, { useState } from 'react';

import Backdrop from './backdrop/backdrop';

import './taskModal.css';

import axios from 'axios';

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

const Modal = ({ handleClose }) => {
    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');

    const taskNameChange = (event) => {
        setTaskName(event.target.value);
    };

    const taskDescriptionChange = (event) => {
        setTaskDescription(event.target.value);
    };

    const handleAddTask = () => {
        handleClose();
    };

    return (
        <Backdrop onClick={handleClose}>
            <motion.div 
                onClick={(e) => e.stopPropagation()} 
                className='modal' 
                variants={dropIn}
                initial='hidden'
                animate='visible'
                exit='exit'
            >
                <div className="previevmodal">
                    <div className='previevmodal__header'>
                        <h2 className='header'>Project Name</h2>
                    </div>
                    <div className="previevmodal__description">
                        <h3 className="previevmodal__description__header">Description</h3>
                        <p className="previevmodal__description__text">
                            Jakis teskt co moze byc dla opisu taska czy to np kiedy paliwo w Polsce po 5.19zł/L czy cos innego lelelle
                        </p>
                    </div>
                </div>

                <div className="previevmodal">
                    <div className="previevmodal__description">
                        <h3 className="previevmodal__description__header">Date</h3>
                        <p className="previevmodal__description__text">
                            12.12.2021
                        </p>
                    </div>
                </div>






                <button className='buttonaddtask' onClick={handleAddTask}>
                    Close Previev
                </button>
            </motion.div>
        </Backdrop>
    );
};

export default Modal;
