
import React from 'react';
import './styles/kanban/kanbanTask.css';

const KanbanTask = props => {

    return (
        <div className='KanbanTask'>
            {props.children}
        </div>
    );  
}

export default KanbanTask;