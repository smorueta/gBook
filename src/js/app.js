var googleBooks = require('./services/googleBooks');
var booksView = require('./views/booksView');

function googleBookRetrieved (books) {
    var appView = new booksView();
    appView.render(books);
}

var googleBooksPlugin = new googleBooks();
// TODO: replace this by promises
googleBooksPlugin.getBooks(googleBookRetrieved);