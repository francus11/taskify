import React from 'react';

import Layout from './Layout';
import './styles/global.css';

import './styles/projects.css';

import {Link} from "react-router-dom";


import TopBar from '../components/topBar';
import Menu from '../components/sidebarMenu';
import ProjectTile from '../components/projectTile';



const projects = [
    {
        id: 1,
        title: 'Project: Boston',
        description: 'Description of Project 1',
        date: '2024-12-31'
    },
    {
        id: 2,
        title: 'Project: New York',
        description: 'Description of Project 2',
        date: '2024-11-30'
    },
    
];

class Project extends React.Component {
    render() {
        return (
            <Layout>
                <TopBar />
                <main>
                    <Menu />
                    <div className='content'>
                        <div className='content__header'>
                            <h2 className='pageHeader'>Projects</h2>
                        </div>
                        <div className='content__projects'>
                            {projects.map(project => (
                                <ProjectTile key={project.id} project={project} />
                            ))}
                        </div>
                    </div>
                </main>
            </Layout>
        );
    }
}

export default Project;