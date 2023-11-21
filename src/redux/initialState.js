const initialState = {
    posts: [
        {
            id: '1',
            title: 'First article',
            description: 'Short description of the article...',
            content: 'Main content of first article',
            published: '15-11-2023',
            // published: new Date('15-11-2023'),
            author: 'John Doe'
        },
        {
            id: '2',
            title: 'Second article',
            description: 'Short description of the article...',
            content: 'Main content of second article',
            published: '20-11-2023',
            // published: new Date('20-11-2023'),
            author: 'John Doe'
        },
        {
            id: '3',
            title: 'Third article',
            description: 'Short description of the article...',
            content: 'Main content of third article',
            published: '08-07-2023',
            // published: new Date('08-07-2023'),
            author: 'John Doe'
        },
        {
            id: '4',
            title: 'Fourth article',
            description: 'Short description of the article...',
            content: 'Main content of fourth article',
            published: '02-02-2022',
            // published: new Date('02-02-2022'),
            author: 'John Doe'
        },
    ],
};

export default initialState;