var bookModel = require('../../js/models/bookModel');

describe('bookModel', function () {

    it('should create a book', function () {
        var fakeData = {};

        var model = new bookModel(fakeData);

        expect(model instanceof bookModel).toBeTruthy();
    });

    it('should set title, description and imageLinks properties in a book', function() {
        var fakeData = {
            id: '6k5evgAACAAJ',
            volumeInfo: {
                title: 'aa',
                description: 'fake description',
                imageLinks: {}
            }
        };

        var model = new bookModel(fakeData);

        expect(model.title).toBeDefined();
        expect(model.description).toBeDefined();
        expect(model.imageLinks).toBeDefined();
    });
});