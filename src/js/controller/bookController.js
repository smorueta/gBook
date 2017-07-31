var myBooksApp = require('../myBooksApp');

// init app
var initialiseApp = new myBooksApp();
initialiseApp.initGoogleBooksService();
initialiseApp.getGoogleBooks();