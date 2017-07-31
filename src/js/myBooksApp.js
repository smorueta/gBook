var booksService = require('./services/booksService');
var booksView = require('./views/booksView');

var myBooksApp = function myBooksApp () {
    this.googleBooksService = null;
}

myBooksApp.prototype.initGoogleBooksService = function () {
    this.googleBooksService = new booksService();
};

myBooksApp.prototype.getGoogleBooks = function () {
    var callback = this.renderGoogleBooks;
    return this.googleBooksService.getBooks(callback);
};

myBooksApp.prototype.renderGoogleBooks = function (books) {
    var view = new booksView();
    view.render(books);
};

module.exports = myBooksApp;