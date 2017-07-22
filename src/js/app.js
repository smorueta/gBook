var googleBooks= require('./services/googleBooks');

function googleBookRetrieved (data) {
    console.log(data);
}

var googleBooksPlugin = new googleBooks();
// TODO: replace this by promises
googleBooksPlugin.getBooks(googleBookRetrieved);