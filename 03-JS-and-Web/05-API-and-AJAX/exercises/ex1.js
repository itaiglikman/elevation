// $.ajax({
//     method: "GET",
//     url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521',
//     success: function (data) {
//         console.log(data);
//     },
//     error: function (xhr, text, error) {
//         console.log(text);
//     }
// });

const isbnArr = [
    '9782806269171',
    '1440633908',
    '9781945048470',
    '9780307417138'
]

function getBook(queryType,queryValue) {
    $.ajax({
        method: "GET",
        url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
        success: function (data) {
            const items = data.items;
            items.forEach(item => {
                console.log('title: '+item.volumeInfo.title);
                console.log('author: '+item.volumeInfo.authors[0]);
                console.log('isbn: '+item.volumeInfo.industryIdentifiers[0].identifier);
            });
        },
        error: function (xhr, text, error) {
            console.log(text);
        }
    });

}
getBook('isbn','9789814561778')
// getBook('isbn',isbnArr[1])
getBook('title','How to Win Friends and Influence People')
// getBook(isbnArr[1])

// 9782806269171 - The Little Prince: Book Analysis
// 1440633908 - Of Mice and Men by John Steinbeck
// 9781945048470 - The Alchemist by Paulo Coelho
// 9780307417138 - Hitchhiker's Guide to the Galaxy