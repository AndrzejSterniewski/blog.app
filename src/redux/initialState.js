const initialState = {
    posts: [
        {
            id: '1',
            title: 'First article',
            description: 'Short description of the article...',
            content: 'Main content of first article',
            published: new Date('11-15-2023').toString(),
            author: 'John Doe'
        },
        {
            id: '2',
            title: 'Second article',
            description: 'Short description of the article...',
            content: 'Main content of second article',
            published: new Date('11-20-2023').toString(),
            author: 'John Doe'
        },
        {
            id: '3',
            title: 'Third article',
            description: 'Short description of the article...',
            content: 'Main content of third article',
            published: new Date('08-07-2023').toString(),
            author: 'John Doe'
        },
        {
            id: '4',
            title: 'Fourth article',
            description: 'Short description of the article...',
            content: 'Main content of fourth article',
            published: new Date('02-02-2022').toString(),
            author: 'John Doe'
        },
    ],
};

export default initialState;