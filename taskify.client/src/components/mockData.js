import { v4 as uuidv4 } from 'uuid';

const mockData = [
    {
        id: uuidv4(),
        title: "IN PROGRESS",
        tasks: [
            {
                id: uuidv4(),
                title: 'Learn JavaScript',
                description : 'Learn JavaScript to become a full-stack developer',
                date : '2021-09-01'
            },
            {
                id: uuidv4(),
                title: 'Learn Git',
                description : 'Learn Git to become a full-stack developer',
                date : '2021-09-02'
            },
            {
                id: uuidv4(),
                title: 'Learn Python',
                description : 'Learn Python to become a full-stack developer',
                date : '2021-09-03'
            },
        ]
    },
    {
        id: uuidv4(),
        title: "COMPLETED",
        tasks: [
            {
                id: uuidv4(),
                title: 'Learn CSS',
                description : 'Learn CSS to become a full-stack developer',
                date : '2021-09-04'
            },
            {
                id: uuidv4(),
                title: 'Learn Golang',
                description : 'Learn Golang to become a full-stack developer',
                date : '2021-09-05'
            }
        ]
    },
    {
        id: uuidv4(),
        title: "IN REVIEW",
        tasks: [
            {
                id: uuidv4(),
                title: 'Learn HTML',
                description : 'Learn HTML to become a full-stack developer',
                date : '2021-09-06'
            }
        ]
    },
    {
        id: uuidv4(),
        title: "TO DO",
        tasks: [
            {
                id: uuidv4(),
                title: 'Pay for the rent',
                description : 'Pay for the rent to avoid being homeless',
                date : '2021-09-07'
            }
        ]
    }
];

export default mockData;
