import React from 'react';

import { BsThreeDotsVertical } from 'react-icons/bs';

import '../views/styles/global.css';
import './styles/kanban/kanbanTask.scss';

import image from '../images/kanban.jpg';

const KanbanTask = (props) => {

    return (
        <div className="KanbanTask">
            <div className="KanbanTask__logo">
                <img src={image} alt="Icon" />
            </div>
            

            <div className="KanbanTask__body">

                <div className="KanbanTask__body__header">
                    <h3 className='header'>{props.title}</h3>
                    <BsThreeDotsVertical className='icon' />
                    

                </div>
                <div className="projectTile__body__content">
                    <p className='content'>Task_ Description - mozna opisac kiedy paliwo po 5,19zł/L</p>
                    {/* {props.description} */}
                </div>
                <div className="projectTile__body__footer">
                    <button className='button'>See</button>
                </div>
            </div>





        </div>
    );
};

export default KanbanTask;

