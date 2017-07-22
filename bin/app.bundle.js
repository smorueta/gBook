/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var googleBooks = __webpack_require__(1);

function googleBookRetrieved (books) {
    console.log(books);
}

var googleBooksPlugin = new googleBooks();
// TODO: replace this by promises
googleBooksPlugin.getBooks(googleBookRetrieved);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var bookCollection = __webpack_require__(2);

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

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var bookModel = __webpack_require__(3);

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

/***/ }),
/* 3 */
/***/ (function(module, exports) {

var bookModel = function (data) {

    for (var key in data.volumeInfo) {
        if (key === 'title' || key === 'description' || key === 'imageLinks' ) {
            Object.defineProperty(this, key, {
                value: key === 'description' ? data.volumeInfo[key].substr(0, 200) + "..." : data.volumeInfo[key]
            });
        }
    }
};

module.exports = bookModel;

/***/ })
/******/ ]);