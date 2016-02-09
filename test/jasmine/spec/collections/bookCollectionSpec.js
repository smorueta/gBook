define(['js/collections/bookCollection', 'js/models/bookModel'], function(bookCollection, bookModel) {

	describe("testing bookCollection", function() {

		it ("when an error is returned defineNewCollection method should return an empty array", function(){

			var data = "{\"error\": {}}";

			expect(bookCollection.defineNewCollection(data).length).toEqual(0);

		});

		it("when q parameter is empty defineNewCollection method should return an empty array", function() {
			var data = "{\"kind\": \"books#volumes\",\"totalItems\": 0}";

			expect(bookCollection.defineNewCollection(data).length).toEqual(0);
 		});

 		it("when q parameter is not empty defineNewCollection method should return a non empty array", function() {
 			var data = "{\"kind\": \"books#volumes\",\"totalItems\": 2053,\"items\": [{\"title\":\"Example of title\"}]}";

 			expect(bookCollection.defineNewCollection(data).length).toBeGreaterThan(0);
 		});

 		it("when map function is called is captured by spyOn", function(){

 			var data = "{\"kind\": \"books#volumes\",\"totalItems\": 2053,\"items\": [{\"title\":\"Example of title\"}]}";

			spyOn(Array.prototype, 'map').andCallFake(function() {
					return {};
			});

			bookCollection.defineNewCollection(data)
    	expect(Array.prototype.map).toHaveBeenCalled()
 		});
 	
	});
});