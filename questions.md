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
