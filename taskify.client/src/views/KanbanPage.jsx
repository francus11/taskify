import React from 'react';
<<<<<<< HEAD
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { CiSquarePlus } from 'react-icons/ci';


=======
>>>>>>> front
import Layout from './Layout';
import './styles/global.css';
import './styles/home.css';
import './styles/kanbanPage.css';

import TopBar from '../components/topBar';
import Menu from '../components/sidebarMenu';
import KanbanBoard from '../components/KanbanBoard';
<<<<<<< HEAD
import Modal from '../components/modals/projectModal';

const KanbanPage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const close = () => setIsOpen(false);
    const open = () => setIsOpen(true);



=======


const KanbanPage = () => {
>>>>>>> front
  return (
    <Layout>
      <TopBar />
      <main>
        <Menu />
        <div className='Kanban'>
          <div className='Kanban__header'>
            <h2 className='header'>Kanban</h2>
<<<<<<< HEAD
            <motion.button onClick={() => (isOpen ? close() : open())} className='motionbutton'>
                        <CiSquarePlus className='icon' />
            </motion.button>
=======
>>>>>>> front
          </div>
          <KanbanBoard />
        </div>
      </main>
<<<<<<< HEAD
            <AnimatePresence initial={false} onExitComplete={() => null}>
                        {isOpen && <Modal isOpen={isOpen} handleClose={close} />}
            </AnimatePresence>

    </Layout>




=======
    </Layout>

 
>>>>>>> front

  );
}

export default KanbanPage;
