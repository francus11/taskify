import { motion } from 'framer-motion';
import React from 'react';

import Backdrop from './backdrop/backdrop';

import './taskModal.css';

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

const previevProjectModal = ({ handleClose, project }) => {
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
                        <h2 className='header'>{project.title}</h2>
                    </div>
                    <div className="previevmodal__description">
                        <h3 className="previevmodal__description__header">Description</h3>
                        <p className="previevmodal__description__text">
                            {project.description}
                        </p>
                    </div>
                </div>

                <button className='buttonaddtask' onClick={handleClose}>
                    Close Previev
                </button>
            </motion.div>
        </Backdrop>
    );
};

export default previevProjectModal;
