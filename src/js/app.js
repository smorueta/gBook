var googleBooks = require('./services/googleBooks');

function googleBookRetrieved (books) {
    console.log(books);
}

var googleBooksPlugin = new googleBooks();
// TODO: replace this by promises
googleBooksPlugin.getBooks(googleBookRetrieved);