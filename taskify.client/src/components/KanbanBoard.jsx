import React, { useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import mockData from './mockData';
import KanbanTask from './KanbanTask';

import './styles/kanban/kanbanBoard.css';

const KanbanBoard = () => {
    const [data, setData] = useState(mockData);

    const onDragEnd = result => {
        if (!result.destination) return;
        const { source, destination } = result;

        if (source.droppableId !== destination.droppableId) {
            const newData = Array.from(data);
            const sourceColIndex = newData.findIndex(e => e.id === source.droppableId);
            const destinationColIndex = newData.findIndex(e => e.id === destination.droppableId);

            const sourceCol = newData[sourceColIndex];
            const destinationCol = newData[destinationColIndex];

            const sourceTask = [...sourceCol.tasks];
            const destinationTask = [...destinationCol.tasks];

            const [removed] = sourceTask.splice(source.index, 1);
            destinationTask.splice(destination.index, 0, removed);

            newData[sourceColIndex].tasks = sourceTask;
            newData[destinationColIndex].tasks = destinationTask;

            setData(newData);
        }
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className="kanban">
                {
                    data.map(section => (
                        <Droppable
                            key={section.id}
                            droppableId={section.id.toString()}
                        >
                            {(provided) => (
                                <div
                                    {...provided.droppableProps}
                                    className='kanban__section'
                                    ref={provided.innerRef}
                                >
                                    <div className="kanban__section__title">
                                        {section.title}
                                    </div>
                                    <div className="kanban__section__content">
                                        {
                                            section.tasks.map((task, index) => (
                                                <Draggable
                                                    key={task.id}
                                                    draggableId={task.id.toString()}
                                                    index={index}
                                                >
                                                    {(provided, snapshot) => (
                                                        <div
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}
                                                            style={{
                                                                ...provided.draggableProps.style,
                                                                opacity: snapshot.isDragging ? '0.5' : '1'
                                                            }}
                                                        >
                                                            {/* <KanbanTask>{task.title}</KanbanTask> */}
                                                            {/* <KanbanTask title="Taki projekt dla KFC">
                                                                Lorem ipsum KFC lepsze od McDonald. Bla bla bla, żeby było co pokazać. Kiedy benzyna po 5,19 zł/L.
                                                            </KanbanTask> */}
                                                            <KanbanTask
                                                                title={task.title}
                                                                description={task.description} // Pass the description prop
                                                            />

                                                        </div>
                                                    )}
                                                </Draggable>
                                            ))
                                        }
                                        {provided.placeholder}
                                    </div>
                                </div>
                            )}
                        </Droppable>
                    ))
                }
            </div>
        </DragDropContext>
    );
};

export default KanbanBoard;
