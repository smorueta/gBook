# README #

### What is this repository for? ###

* Basic javascript structure built to consume a public JSON API from GoogleBooks API. The app display a list with this data: the title, a brief description of the book (200 characters maximum) and the cover image displayed in grayscale. It is retrieving just the first 20 results by using the query string ’javascript’, and is ordered by most recently published.

### Release History

* 0.1.0 - Initial release


### How do I get set up? ###

The app needs a server http to be executed. During its development http-server has been used. Documentation https://www.npmjs.com/package/http-server

The dependencies has been managed by using Require.


### Init

The app starts on main.js It is load on index.html using an inline script reference to require.js

### Structure

```
+-- css
|   +-- styles.css
+-- js
|   +-- collections
|   	+-- bookCollection.js
|   +-- _models
|   	+-- bookModel.js
|   +-- views
|   	+-- bookView.js
+-- test
|   +-- jasmine
|   	+-- spec
|   		+-- collections
|				+-- bookView.js
|			+-- index.js
|		+-- index.html
|		+-- SpecRunner.js
|   +-- lib
|		+-- jasmine-html.js
|		+-- jasmine.css
|		+-- jasmine.js
|		+-- sinon-1.4-2.js
+-- package.json
+-- index.html
```

### Styles ### 

styles keep a mobile first design philosophy. A basic adaptability and responsiveness is covered using media queries. 

```
@media (min-width: 600px) 
```

```
@media (min-width: 992px)
```

### Tests

Some tests has been created using Jasmine. To execute them, head to http://127.0.0.1:8080/test/jasmine/

  
### Next planned upgrading

- Add more unit tests.
- Adaptation of the code to use Backbone.js
- Adaptation of the code to use React.js
