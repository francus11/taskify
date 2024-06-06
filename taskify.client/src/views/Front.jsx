import React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CiSquarePlus } from 'react-icons/ci';

import Layout from './Layout';

import './styles/global.css';
import './styles/home.css';
import './styles/kanbanPage.css';

import {Link} from "react-router-dom";


import TopBar from '../components/topBar';
import Menu from '../components/sidebarMenu';

import KanbanBoard from '../components/KanbanBoard';
import Modal from '../components/modals/taskModal';
import MemebersModal from '../components/modals/memebersModal';



const Front = () => {

    const [isOpen, setIsOpen] = useState(false);
    const close = () => setIsOpen(false);
    const open = () => setIsOpen(true);

        return (
            <Layout>
                <TopBar />
                <main>
                    <Menu />
                    <div className='content'>
                        <div className='content__header'>
                            <div className="content__header__part">
                                <h2 className='pageHeader'>Team: </h2>
                                <h2 className='pageHeader'>Front</h2>
                            </div>
                            <motion.button onClick={() => (isOpen ? close() : open())} className='motionbutton'>
                                <button className='buttonAddTask'>
                                    {/* <CiSquarePlus className='icon' /> */}
                                    Members
                                </button>
                            </motion.button>
                            
                        </div>
                        <KanbanBoard />
                    </div>
                </main>

                <AnimatePresence initial={false} onExitComplete={() => null}>
                        {isOpen && <MemebersModal isOpen={isOpen} handleClose={close} />}
                </AnimatePresence>
            </Layout>
        );
    }
export default Front;