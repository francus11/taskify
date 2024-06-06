import React, { useState, useEffect } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { v4 as uuidv4 } from 'uuid';

import mockData from './mockData';
import KanbanTask from './KanbanTask';
import Modal from '../components/modals/taskModal';


import './styles/kanban/kanbanBoard.css';


const KanbanBoard = () => {
    const [data, setData] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        // Load data from localStorage if available, otherwise use mockData
        const storedData = localStorage.getItem('kanbanData');
        if (storedData) {
            setData(JSON.parse(storedData));
        } else {
            setData(mockData);
        }
    }, []);

    const onDragEnd = result => {
        if (!result.destination) return;
        const { source, destination } = result;

        if (source.droppableId === destination.droppableId) {
            const newData = Array.from(data);
            const sectionIndex = newData.findIndex(e => e.id === source.droppableId);

            const section = newData[sectionIndex];
            const tasks = [...section.tasks];
            const [removed] = tasks.splice(source.index, 1);
            tasks.splice(destination.index, 0, removed);

            newData[sectionIndex].tasks = tasks;
            setData(newData);
            localStorage.setItem('kanbanData', JSON.stringify(newData));
        } else {
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
            localStorage.setItem('kanbanData', JSON.stringify(newData));
        }
    };

    const updateTask = (updatedTask) => {
        const newData = data.map(section => {
            const updatedTasks = section.tasks.map(task =>
                task.id === updatedTask.id ? updatedTask : task
            );
            return { ...section, tasks: updatedTasks };
        });
        setData(newData);
        localStorage.setItem('kanbanData', JSON.stringify(newData));
    };

    const addNewTask = (title, description, date) => {
        const newTask = {
            id: uuidv4(),
            title,
            description,
            date
        };

        const newData = data.map(section => {
            if (section.title === 'TO DO') {
                return { ...section, tasks: [...section.tasks, newTask] };
            }
            return section;
        });

        setData(newData);
        localStorage.setItem('kanbanData', JSON.stringify(newData));
    };

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <button onClick={openModal} className='buttonAddTask'>Add Task</button>

            <div className="kanban">
                {data.map(section => (
                    <Droppable key={section.id} droppableId={section.id.toString()}>
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
                                        <Draggable key={task.id} draggableId={task.id.toString()} index={index}>
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
                                                    <KanbanTask
                                                        task={task}
                                                        updateTask={updateTask}
                                                    />
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
            </div>
            {isModalOpen && (
                <Modal 
                    handleClose={closeModal} 
                    addTask={addNewTask} 
                />
            )}
        </DragDropContext>
    );
};

export default KanbanBoard;
