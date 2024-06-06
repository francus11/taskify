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



  const handleAddTask = () => {
    // Get the input values
    const taskName = document.getElementById('taskName').value;
    const taskDescription = document.getElementById('taskDescription').value;

    // Create an object with the task data
    const newTask = {
      name: taskName,
      description: taskDescription
    };

    // Convert the object to JSON string
    const jsonData = JSON.stringify(newTask);

    // Write the JSON string to the mockData.js file
    const fs = require('fs');
    fs.writeFileSync('/path/to/mockData.js', jsonData);

    // Clear the input fields
    document.getElementById('taskName').value = '';
    document.getElementById('taskDescription').value = '';
  };

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
