import React, { useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { motion, AnimatePresence } from 'framer-motion';

import PreviewProjectModal from '../components/modals/previevProjectModal';

import '../views/styles/global.css';
import './styles/projectTile.css';

const ProjectTile = ({ project }) => {
    const [isOpen, setIsOpen] = useState(false);
    const close = () => setIsOpen(false);
    const open = () => setIsOpen(true);

    return (
        <div className="projectTile">
            <div className='projectTile__logo'>
            </div>
            <div className='projectTile__body'>
                <div className="projectTile__body__header">
                    <h3 className='header'>{project.title}</h3>
                    <BsThreeDotsVertical className='icon' />
                </div>
                <div className="projectTile__body__content">
                    <p className='content'>{project.description}</p>
                </div>
                <div className="projectTile__body__footer">
                    <div className="projectTile__body__footer__dueto">
                        <p className="dueto">Due to</p>
                        <p className="date">{project.date}</p>
                    </div>
                    <motion.button onClick={open} className='button'>See</motion.button>
                </div>
            </div>

            <AnimatePresence initial={false} onExitComplete={() => null}>
                {isOpen && <PreviewProjectModal handleClose={close} project={project} />}
            </AnimatePresence>
        </div>
    );
};

export default ProjectTile;
