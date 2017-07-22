var bookCollection = require('../collections/bookCollection.js');

function googleBooks () {
    this.url = "https://www.googleapis.com/books/v1/volumes?";
    this.query = 'javascript';
    this.orderBy = 'newest';
    this.limit = '20';
}

googleBooks.prototype.getBooks = function (callback) {
    var xmlhttp = new XMLHttpRequest();
    var books;

    // TODO: error handler
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            books = new bookCollection(xmlhttp.responseText);
            callback(books.data);
        }
    };

    //TODO: param query criteria
    xmlhttp.open("GET", this.url + 'q={' + this.query + '}' + '&maxResults=' + this.limit + '&orderBy=' + this.orderBy, true);
    xmlhttp.send();
}

module.exports = googleBooks;