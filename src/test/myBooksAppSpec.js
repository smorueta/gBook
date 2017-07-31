var myBooksApp = require('../js/myBooksApp');
var googleBooksService = require('../js/services/booksService');
var sinon = require('sinon');

describe('myBooksApp', function() {
    it('should create an instance of myBooksApp', function() {
        var app = new myBooksApp();

        expect(app instanceof myBooksApp).toBeTruthy();
    });

    it('should init a new google book service', function () {
        var app = new myBooksApp();

        app.initGoogleBooksService();

        expect(app.googleBooksService).not.toBeNull();
        expect(app.googleBooksService instanceof googleBooksService);
    });

    describe('XMLHttpRequest', function () {
        var server = null;

        beforeEach(function () {

            server = sinon.fakeServer.create();

            var okResponse = [
                200,
                { 'Content-type': 'application/json' },
                '{"hello":"world"}'
            ];

            server.respondWith('GET', '/hello', okResponse);

        });

        afterEach(function () {
           server.restore();
        });

        xit('should render books on the view', function(done) {
            var app = new myBooksApp();

            app.initGoogleBooksService();

            spyOn(app.googleBooksService, 'getBooks').and.callFake(function(done) {

                done();
            });

            app.getGoogleBooks();

            server.respond();
            done();

            expect(app.googleBooksService.getBooks.calls.mostRecent().args[0] instanceof Function).toBeTruthy()

        });
    });
});