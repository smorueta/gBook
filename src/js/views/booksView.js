var booksView = function() {
	this.appContainer = document.getElementById('app');
};

booksView.prototype.render = function (data){
	var contentHtml = '';

	for (var item in data) {
		if (data[item].hasOwnProperty('imageLinks')) {
			contentHtml += "<li class=\"collection-item\"><div class=\"description\"><h2 class=\"title\">" + data[item].title + "</h2><p class=\"paragraph\">"+ data[item].description +"</p></div>" +
			"<figure class=\"crop-box-image thumbnail\"><img src=\""+ data[item].imageLinks.thumbnail +"\" alt=\"kkkk\"></figure></li>";
		}

	}

	this.appContainer.innerHTML = "<ul class=\"collection\">" + contentHtml + "</ul>";
}


module.exports = booksView;
