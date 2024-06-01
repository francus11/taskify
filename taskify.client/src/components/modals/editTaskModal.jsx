import { motion } from 'framer-motion';
import React, { useState } from 'react';

import Backdrop from './backdrop/backdrop';

import EditIcon from '../../images/editIcon2.svg';

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

const EditTaskModal = ({ handleClose, task, updateTask }) => {
    const [taskName, setTaskName] = useState(task.title);
    const [taskDescription, setTaskDescription] = useState(task.description);
    const [taskDate, setTaskDate] = useState(task.date);

    const [isEditingName, setIsEditingName] = useState(false);
    const [isEditingDescription, setIsEditingDescription] = useState(false);
    const [isEditingDate, setIsEditingDate] = useState(false);

    const handleSave = () => {
        const updatedTask = {
            ...task,
            title: taskName,
            description: taskDescription,
            date: taskDate
        };
        updateTask(updatedTask);
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
                <div className="editmodal">
                    <div className='editmodal__header'>
                        <h2 className='header'>{taskName}</h2>
                        <img src={EditIcon} alt="Edit Icon" width={30} height={30} onClick={() => setIsEditingName(!isEditingName)} />
                        
                    </div>
                    {isEditingName && (
                            <input
                                type="text"
                                value={taskName}
                                onChange={(e) => setTaskName(e.target.value)}
                                placeholder="Enter new task name"
                            />
                        )}

                    <div className="editmodal__description">
                        <div className="editmodal__description__header">
                            <h3>Description</h3>
                            <img src={EditIcon} alt="Edit Icon" width={20} height={20} onClick={() => setIsEditingDescription(!isEditingDescription)} />
                        </div>
                        {isEditingDescription ? (
                            <input
                                value={taskDescription}
                                onChange={(e) => setTaskDescription(e.target.value)}
                                placeholder="Enter new task description"
                            />
                        ) : (
                            <p className='editmodal__description__text'>{taskDescription}</p>
                        )}
                    </div>

                    <div className="editmodal__description">
                        <div className="editmodal__description__header">
                            <h3>Date</h3>
                            <img src={EditIcon} alt="Edit Icon" width={20} height={20} onClick={() => setIsEditingDate(!isEditingDate)} />
                        </div>
                        
                        {isEditingDate ? (
                            <input
                                type="date"
                                value={taskDate}
                                onChange={(e) => setTaskDate(e.target.value)}
                            />
                        ) : (
                            <p>{taskDate}</p>
                        )}
                    </div>
                </div>

                <button className='buttonaddtask' onClick={handleSave}>
                    Save and close
                </button>
            </motion.div>
        </Backdrop>
    );
};

export default EditTaskModal;
