# Unit 1

### 1 Intro and Setup
1. Why learn Angular JS over other frameworks like Ember, Backbone, Knockout, etc?  
Ans: Part of the MEAN stack, which is very popular today.
2. People have some very strong opinions about Angular.  What are 3 common complaints people have about Angular?  
Ans: Is difficult to learn (easy to start, hard in long term). Poor documentation. Poor testing.
3. Is Angular an MVC framework?  
Ans: Yes. Model (Scope) carries out data between all pieces of the system. View (templates) to assign directives to elements of the DOM. Controller for manipulating the data (scope) behind the UI.
4. Why did I say jQuery is "sort of" a dependency of Angular? Does it depend on it or not?!  
Ans: No, Angular doesn't depend on jQuery. Will use it if it's present, but if it's not, it uses its own implementation of the subset of jQuery (jQLite).
5. Read the docs for `ng-app`. What is it and what does it do?  
Ans: Directive. Designates the root element of the app. Typically placed on the body or html tags.
6. What does `ng` stand for?  
Ans: Angular. 'ng' sounds like Angular. Is a prefix for directives.

### 2 Data Binding
1. What does ng-model do?  
Ans: A directive that binds an input/select/textarea/custom form control to a property on the scope using NgModelController. Responsible for binding the view into the model, providing validation, keeping the state of the control (valid/invalid), setting related CSS classes on the element, and registering the control with its parent form.
2. What is "dirty checking"?  
Ans: Process of checking every watch to detect the changes, ie it keeps the view model ($scope) and the view in sync.
3. Find a way to set the initial value of "name" as "BoJack" (without writing a controller).  
Ans: ng-init='name='BoJack'
4. What are those `{{ }}` expressions?  Are they Handlebars?  
Ans: No, they do not represent Handlebars. They evaluate an expression.
5. Explain what 2-way data binding is.  
Ans: Synchronizing the data between the model and the view. Any changes that happens in the model (back-end) will update the view (front-end) and vice versa.

### 3 Expressions and Built-In Filters
1. What are Angular expressions? How do they compare to EJS/ERB tags?  
Ans: Angular expressions are Javascript-like code snippets that are usually placed in bindings like {{expression}}. Unlike EJS/ERB tags, you cannot write conditionals or loops inside an expression in Angular.
2. What happens when you write invalid code in an expression?  What type of error do you get?  
Ans: $parse error shows in console log.
3. What are Angular filters?  Name 4 built-in filters, including one that we haven't used yet.  
Ans: They format the value of an expression for display to the user. Examples: currency, number, orderBy, uppercase, lowercase.
4. We'll soon see how to create custom filters.  What is a use case for a custom filter?  
Ans: Reversing strings.

### 4 Intro To Controllers
1. What is `$scope`?  
Ans: A JS object that glues together controllers and views.
2. What are Angular modules?  
Ans: A container for the different parts of your app: controllers, services, filters, directives, etc.
3. Why do we pass in `$scope` as an argument to controller functions?  
Ans: Easier to test.
4. In Express, what are angular controllers most analogous to?  
Ans:

### 5 Built-In Directives
1. Why use `ng-src` and `ng-href`?  
Ans: Using 'img src' is buggy because the browser will fetch fro the URL with the literal text {{hash}} until Angular replaces the expression inside {{hash}}. Using 'a href' is also buggy because it will cause the link to go to the wrong URL if the user clicks it before Angular replaces the {{hash}} markup with its value.
2. What are directives?  
Ans: Angular's way of extending HTML. They are markers on a DOM element that tell AngularJS' HTML compiler to attach a specified behavior to that DOM.
3. Does ng-class require an object to be passed in?  
Ans: Yes.
4. What order does an ng-repeat display items in?  
Ans: The same order that it is in in the array.
5. How does ng-repeat handle duplicate data?  
Ans: It doesn't. It breaks.

# Unit 2

### A New Structure
1. What are possible issues with this new file structure?  
Ans: Unnecessary files. For example, in the Reddit app, directives, filters, and services are all empty.
2. When thinking about extending the single responsibility principle to the app structure, what are some other ways that the app could be structured?  
Ans: At this current moment, I would do away with directives, filters, and services because they're empty.
3. What are the differences between serving files from an http server and from the file system?  It seemed to work fine with just `open index.html` in the browser...  
Ans: If you have multiple pages, it's easier to see/load using a server rather than have to open each html file.
4. Reflecting on the new structure and thinking back to lesson 1 - is Angular an MVC framework? How does the app structure support/disprove that?  
Ans: Yes. In this new structure, you can clearly see a controllers file.

### Routing
1. Why isn't `ngRoute` part of Angular core?  Name at least 2 other Angular modules we could use.  
Ans: ngAnimate, ngCookies, ngMessages.
2. Compare and contrast client-side routing with server-side routing.  
Ans:
3. Aside from route definitions, what else can go in a `.config()`?  
Ans:
4. What is `$rootScope`?  
Ans: Every app has a single root scope where all other scopes descend from. Scopes provide separation between the model and the view.
5. What is the `$routeChangeSuccess` event?  
Ans:

### HTTP Service
1. What is a service?  Is there a Ruby or JavaScript equivalent to Angular services?  
Ans: Objects that contain some code that can be shared across the app.
2. Explain in as much detail as possible what happens under the hood of `$http.get()`.  
Ans: $http.get() retrieves data from the url and displays the resulting data on the page. $http.get() returns a promise then the callback is called async when the response is available. 
3. What is `$q` and how does it relate to `$http`?  
Ans: A service that helps you run functions async and use their return values when they are done processing.
