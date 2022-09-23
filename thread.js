var defaultThreads = [
    {
        id: 1,
        title: "What is your favourite game from the 90's?",
        author: "User",
        date: Date.now(),
        content: "Thread content",
        comments: [
            {
                author: "Kadir",
                date: Date.now(),
                content: "Super Mario 64"
            },
            {
                author: "Tugce",
                date: Date.now(),
                content: "Golden Eye"
            }
        ]
    },
    {
        id: 2,
        title: "Should I buy a PS5 now?",
        author: "User",
        date: Date.now(),
        content: "Thread content 2",
        comments: [
            {
                author: "Kadir",
                date: Date.now(),
                content: "Should I buy a PS5 now? They're limited in stock, but they're also quite expensive"
            },
            {
                author: "Tugce",
                date: Date.now(),
                content: "Buy now!"
            }
        ]
    }
]

var threads = defaultThreads
if (localStorage && localStorage.getItem('threads')) {
    threads = JSON.parse(localStorage.getItem('threads'));
} else {
    threads = defaultThreads;
    localStorage.setItem('threads', JSON.stringify(defaultThreads));
}
