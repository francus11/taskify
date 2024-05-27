import React from 'react';
import Layout from './Layout';
import './styles/global.css';
import './styles/home.css';
import './styles/kanbanPage.css';

import TopBar from '../components/topBar';
import Menu from '../components/sidebarMenu';
import KanbanBoard from '../components/KanbanBoard';

const KanbanPage = () => {
  return (
    <Layout>
      <TopBar />
      <main>
        <Menu />
        <div className='Kanban'>
          <div className='Kanban__header'>
            <h2 className='header'>Kanban</h2>
          </div>
          <KanbanBoard />
        </div>
      </main>
    </Layout>
  );
}

export default KanbanPage;
