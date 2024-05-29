import { motion } from 'framer-motion';
import React, { useState } from 'react';

import Backdrop from './backdrop/backdrop';
import StyledInput from '../styledInput';

import './projectModal.css';

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

    const handleInputChange1 = (event) => {
        setTaskName(event.target.value);
    };

    const handleInputChange2 = (event) => {
        setTaskDescription(event.target.value);
    };

    const handleAddTask = () => {
        console.log('Task Name:', taskName);
        console.log('Task Description:', taskDescription);
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
                <input 
                    type="text" 
                    value={taskName} 
                    onChange={handleInputChange1} 
                    placeholder="Task Name"
                />
                <input 
                    type="text" 
                    value={taskDescription} 
                    onChange={handleInputChange2} 
                    placeholder="Task Description"
                />
                <button className='buttonaddtask' onClick={handleAddTask}>
                    Add Task
                </button>
            </motion.div>
        </Backdrop>
    );
};

export default Modal;
