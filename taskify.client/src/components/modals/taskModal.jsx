import { motion } from 'framer-motion';
import React, { useState } from 'react';

import Backdrop from './backdrop/backdrop';

import './taskModal.css';
import '../styles/styledinput.css';

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
        alert(`${taskName} ${taskDescription}`);
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
                 <div className='styledInputContainer'>
                    <p className='styledInputText'>Task name</p>
                    <input type='text' className='styledInput' value={taskName} onChange={taskNameChange} placeholder='Task name' />
                </div>
                <div className='styledInputContainer'>
                    <p className='styledInputText'>Task description</p>
                    <input type='text' className='styledInput' value={taskDescription} onChange={taskDescriptionChange} placeholder='Task Description' />
                </div>

                <button className='buttonaddtask' onClick={handleAddTask}>
                    Add Task
                </button>
            </motion.div>
        </Backdrop>
    );
};

export default Modal;
