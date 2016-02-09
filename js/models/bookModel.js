define([], function () {
	
	"use strict";
	return function (data) {
		this.model = {};

		if (data) {
			for (var key in data.volumeInfo) {
				if (key === 'title' || key === 'description' || key === 'imageLinks' ) {
					Object.defineProperty(this.model, key, {
						value: key === 'description' ? data.volumeInfo[key].substr(0, 200) + "..." : data.volumeInfo[key]
					});  
				}
			}
		}

		return this.model;
	};

});