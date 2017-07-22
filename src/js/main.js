require(["js/collections/bookCollection.js", "js/views/bookView.js"], function(bookCollection, bookView) {
	"use strict";

	var simpleApplication = simpleApplication || {};
	
	simpleApplication.GoogleBooksPlugin = (function() {
			
		var url = "https://www.googleapis.com/books/v1/volumes?",
			xmlhttp = new XMLHttpRequest(),
			getBooks;

    getBooks = function() {
			var query = 'javascript',
				orderBy = 'newest',
				limit = '20';

			xmlhttp.onreadystatechange = function() {
				if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
					var data = bookCollection.defineNewCollection(xmlhttp.responseText);
					bookView.render(data);
				}
			};
			//TODO: param query criteria
			xmlhttp.open("GET", url + 'q={' + query + '}' + '&maxResults=' + limit + '&orderBy=' + orderBy, true);
			xmlhttp.send();
    };

		return {
			init: function(query) {
				return getBooks(query);
			}
		};

	})( );

	simpleApplication.GoogleBooksPlugin.init();
	
});