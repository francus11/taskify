

import React from 'react';
import './styles/kanban/kanbanTask.scss';
import image from '../images/image.jpg';

const KanbanTask = (props) => {
    return (
        <div className="KanbanTask">
            <img src={image} alt="Icon" className="KanbanTask__icon" />
            <div className="KanbanTask__content">
                <div className="KanbanTask__content__title">{props.title}</div>
                <div className="KanbanTask__content__description">{props.description}</div> {/*TODO Updated to display description */}
            </div>
            <div className="KanbanTask__menu">
                <div className="KanbanTask__menu__dots">⋮</div>
            </div>
            <button className="KanbanTask__button">See</button>
        </div>
    );
};

export default KanbanTask;

