import React from 'react';

import Layout from './Layout';
import './styles/global.css';

import './styles/projects.css';

import {Link} from "react-router-dom";


import TopBar from '../components/topBar';
import Menu from '../components/sidebarMenu';
import ProjectTile from '../components/projectTile';



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
                            <ProjectTile />
                            <ProjectTile />
                            <ProjectTile />
                            <ProjectTile />
                            <ProjectTile />
                            <ProjectTile />
                            <ProjectTile />
                            <ProjectTile />
                        </div>
                        



                    </div>
                    
                </main>
            </Layout>
        );
    }
}
export default Project;