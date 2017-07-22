var bookModel = require('../models/bookModel');

var bookCollection = function(data) {

    var bookList = [];
    var response = JSON.parse(data);
    var items;

    if (response.totalItems && response.totalItems > 0) {
        items = response.items;

        bookList = items.map(function(item){
            return new bookModel(item);
        });
    }
    this.data = bookList;
};

module.exports = bookCollection;