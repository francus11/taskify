import { v4 as uuidv4 } from 'uuid';

const mockData = [
    {
        id: uuidv4(),
        title: "IN PROGRESS",
        tasks: [
            {
                id: uuidv4(),
                title: 'Learn JavaScript'
            },
            {
                id: uuidv4(),
                title: 'Learn Git'
            },
            {
                id: uuidv4(),
                title: 'Learn Python'
            },
        ]
    },
    {
        id: uuidv4(),
        title: "COMPLETED",
        tasks: [
            {
                id: uuidv4(),
                title: 'Learn CSS'
            },
            {
                id: uuidv4(),
                title: 'Learn Golang'
            }
        ]
    },
    {
        id: uuidv4(),
        title: "IN REVIEW",
        tasks: [
            {
                id: uuidv4(),
                title: 'Learn HTML'
            }
        ]
    },
    {
        id: uuidv4(),
        title: "TO DO",
        tasks: [
            {
                id: uuidv4(),
                title: 'DUPA'
            }
        ]
    }
];

export default mockData;
