import { motion } from 'framer-motion';
import React from 'react';

import Backdrop from './backdrop/backdrop';
import StyledInput from '../styledInput';

import './projectModal.css';




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

const Modal = ({ handleClose, text }) => {

    return(
        <Backdrop onClick={handleClose}>
            <motion.div onClick={(e) => e.stopPropagation()} className='modal' variants={dropIn}
                initial='hidden'
                animate='visible'
                exit='exit'>

                <StyledInput text="Task Name" />
                <StyledInput text="Description" />
                <button className='buttonaddtask' onClick={handleClose}>Add Task</button>
            

            </motion.div>
        </Backdrop>


    );



};

export default Modal;