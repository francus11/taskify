import React, { useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import mockData from './mockData';
import KanbanTask from './KanbanTask';
<<<<<<< HEAD

import './styles/kanban/kanbanBoard.css';

const KanbanBoard = () => {
=======
import './styles/kanban/kanbanBoard.css';

const Kanban = () => {
>>>>>>> front
    const [data, setData] = useState(mockData);

    const onDragEnd = result => {
        if (!result.destination) return;
<<<<<<< HEAD
        const { source, destination } = result;

        if (source.droppableId !== destination.droppableId) {
            const newData = Array.from(data);
            const sourceColIndex = newData.findIndex(e => e.id === source.droppableId);
            const destinationColIndex = newData.findIndex(e => e.id === destination.droppableId);

            const sourceCol = newData[sourceColIndex];
            const destinationCol = newData[destinationColIndex];

            const sourceTask = [...sourceCol.tasks];
            const destinationTask = [...destinationCol.tasks];
=======

        const { source, destination } = result;

        if (source.droppableId !== destination.droppableId) {
            const sourceColIndex = data.findIndex(e => e.id === source.droppableId);
            const destinationColIndex = data.findIndex(e => e.id === destination.droppableId);

            const sourceCol = data[sourceColIndex];
            const destinationCol = data[destinationColIndex];

            const sourceTask = Array.from(sourceCol.tasks);
            const destinationTask = Array.from(destinationCol.tasks);
>>>>>>> front

            const [removed] = sourceTask.splice(source.index, 1);
            destinationTask.splice(destination.index, 0, removed);

<<<<<<< HEAD
            newData[sourceColIndex].tasks = sourceTask;
            newData[destinationColIndex].tasks = destinationTask;

            setData(newData);
=======
            const newState = [...data];
            newState[sourceColIndex] = {
                ...sourceCol,
                tasks: sourceTask
            };
            newState[destinationColIndex] = {
                ...destinationCol,
                tasks: destinationTask
            };

            setData(newState);
>>>>>>> front
        }
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className="kanban">
<<<<<<< HEAD
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
                                                                description={task.description}
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
=======
                {data.map(section => (
                    <Droppable key={section.id} droppableId={section.id}>
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
                                    {section.tasks.map((task, index) => (
                                        <Draggable key={task.id} draggableId={task.id} index={index}>
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
                                                    <KanbanTask>{task.title}</KanbanTask>
                                                </div>
                                            )}
                                        </Draggable>
                                    ))}
                                    {provided.placeholder}
                                </div>
                            </div>
                        )}
                    </Droppable>
                ))}
>>>>>>> front
            </div>
        </DragDropContext>
    );
};

<<<<<<< HEAD
export default KanbanBoard;
=======
export default Kanban;
>>>>>>> front
