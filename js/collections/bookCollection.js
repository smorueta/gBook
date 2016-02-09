define(["/js/models/bookModel.js"], function (bookModel) {
	
	"use strict";
	var collection = function() {

		return {
	    model: bookModel,

	   	defineNewCollection: function(data) {
	   		
	   		var bookList = [],
	   			response = JSON.parse(data),
	   			items;
	   			
	   		if (response.totalItems && response.totalItems > 0) { 		
	   			items = response.items;
					
					bookList = items.map(function(item){ 
						return new bookModel(item);
					});
	   		}
	   		return bookList;
	   	}
	  };

	};

	return collection();	
});