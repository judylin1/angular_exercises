#A New Structure

As our Angular apps grow we'll need a new file structure.  It won't work to put everything in an `app.js` file when we have multiple controllers, modules, directives, filters, services, and more.  

We're going to start by using the following structure:

```
app
	css
	js
		app.js
		controllers.js
		directives.js
		filters.js
		services.js
	index.html
```

This structure is pretty simple.  We have an app.js file where we will declare our app and all dependencies.  For now it will just look like:

```js
var app = angular.module("whateverYourModuleNameIs")
```

We also have files like `controllers.js` and `directives.js` which contain all of our controllers or custom directives (we'll get there soon).  Basically, instead of writing everything inside of `app.js`, we've broken it out into separate files grouped by functionality.

In order for this structure to work, make sure you correctly include all the scripts in your `index.html` file.

**EXERICSE**

Convert the reddit clone app to this new file structure

**EXERCISE: Serve your reddit clone app using http-server.  Make sure everything works correctly.**

The next thing we'll want to do is serve up our application using some sort of server.  For now we can just run `http-server -c-1 -o` inside of the app directory.  Visit `localhost:8080` to see the application.

## Questions

* What are possible issues with this new file structure?
* When thinking about extending the single responsibility principle to the app structure, what are some other ways that the app could be structured?
* What are the differences between serving files from an http server and from the file system?  It seemed to work fine with just `open index.html` in the browser...
* Reflecting on the new structure and thinking back to lesson 1 - is Angular an MVC framework? How does the app structure support/disprove that?
