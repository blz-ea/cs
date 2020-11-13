# `this` in Javascript #

`this` is a property automatically assigned to every function and it represents current function's `context execution`

## `this` in global environment ##

At the global level `this` is equivalent to a global object called `global` (node.js) or `globalThis` (browser). `this` === `global`

## `this` inside functions ##

The value of `this` inside a function is usually defined by the function's call.
So, `this` can have different values inside it for each execution of the function.

## `this` inside constructors ##

When constructor call is made, a new object is created and set as the function's `this` argument. The object is then implicitly returned from the function, unless e have another objet that is returned explicitly

## `this` is methods ##

When calling a function as a method of an object, `this` refers to the object, which is then known as the receiver of the function call

## `this` is arrow functions ##

An arrow function uses `this` value from its enclosing execution context

## `this` in classes ##

Inside classes `this` would refer to any newly created object
