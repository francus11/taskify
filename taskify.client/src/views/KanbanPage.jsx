import React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CiSquarePlus } from 'react-icons/ci';


import Layout from './Layout';
import './styles/global.css';
import './styles/home.css';
import './styles/kanbanPage.css';

import TopBar from '../components/topBar';
import Menu from '../components/sidebarMenu';
import KanbanBoard from '../components/KanbanBoard';
import Modal from '../components/modals/taskModal';

const KanbanPage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const close = () => setIsOpen(false);
    const open = () => setIsOpen(true);



  return (
    <Layout>
      <TopBar />
      <main>
        <Menu />
        <div className='Kanban'>
          <div className='Kanban__header'>
            <h2 className='header'>Kanban</h2>
            <motion.button onClick={() => (isOpen ? close() : open())} className='motionbutton'>
                        <button className='buttonAddTask'>
                            <CiSquarePlus className='icon' />
                            <p>Add Task</p>
                        </button>
            </motion.button>
          </div>
          <KanbanBoard />
        </div>
      </main>
            <AnimatePresence initial={false} onExitComplete={() => null}>
                        {isOpen && <Modal isOpen={isOpen} handleClose={close} />}
            </AnimatePresence>

    </Layout>





  );
}

export default KanbanPage;
