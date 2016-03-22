define(function(){
	
	"use strict";
	function render(data){
		var appDiv = document.getElementById('app'),
			html = '';
			
		for (var item in data) {
			if (data[item].hasOwnProperty('imageLinks')) {
				html += "<li class=\"collection-item\"><div class=\"description\"><h2 class=\"title\">" + data[item].title + "</h2><p class=\"paragraph\">"+ data[item].description +"</p></div>" + 
				"<figure class=\"crop-box-image thumbnail\"><img src=\""+ data[item].imageLinks.thumbnail +"\" alt=\"kkkk\"></figure></li>";
			}
			
		}

		appDiv.innerHTML = "<ul class=\"collection\">" + html + "</ul>";
	}

	return {
		render:render
	};
});