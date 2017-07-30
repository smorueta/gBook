var bookCollection = require('../../js/collections/bookCollection');

describe('bookCollection', function() {
    it ('should create a new collection', function () {
        var collection  = new bookCollection({});
        expect(collection instanceof bookCollection).toBeTruthy();
        expect(collection.hasOwnProperty('data')).toBeTruthy();
    });

    it('should create an empty list of books when no book is received', function () {
        var collection  = new bookCollection({});
        expect(collection.data.length).toBe(0);
    });

    it('should has a list with one book when one book is received', function () {
        var fakeResponse = '{"totalItems":1,"items":[]}';

        spyOn(Array.prototype, 'map').and.returnValue(['book 1']);

        var collection = new bookCollection(fakeResponse);
        expect(collection.data.length).toBe(1);
    });

    it('should has a list with no books when the total items received is 0', function () {
        var fakeResponse = '{"totalItems":0,"items":[]}';

        var collection = new bookCollection(fakeResponse);
        expect(collection.data.length).toBe(0);
    });

    it('should create an empty list of books when an error is retrieved', function () {
        var fakeResponse = '{"error":"{}"}';

        var collection = new bookCollection(fakeResponse);

        expect(collection.data).toEqual([]);

    })
});