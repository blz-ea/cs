# Questions #

## Why is `typeof` null "object" ##

In the first implementation of JavaScript, values were represented as a type tag and a value. The type tag for objects was 0. `null` was represented as the NULL pointer (0x00). Consequently, null had 0 as type tag, hence the "object" `typeof` return value.

The reasoning behind this is that `null`, in contrast with `undefined`, was (and still is) ofter used where objects appear. In other words, `null` is often used to signify an empty reference to an object. When Brendan Eich created JavaScript, he followed the same paradigm.

ECMAScript specification defines `null` as the ***primitive value that represents the intentional absence of any object value***

To draw a parallel here, consider `typeof NaN === "number`. Why does JS give `number` as the type of `NaN`? It is because `NaN` is used where numbers appear.

## Inheritance in ES5 ##

```javascript
function Person({ firstName, lastName, age }={}) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

function Student({ id }={}) {
  Person.call(this);
  this.id = id;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

const student = new Student();
console.log(student);
```

## Compare two objects ##

JS has two different approaches for testing equality. Primitives like strings and numbers are compared by their value, while objects like functions, arrays, dates and plain objects are compared by their reference. If a given object refer to the same location in memory heap `obj1===obj2` will be true

## Create a property which needs to be shared by all the objects instances ##

There types of properties are called `static` properties

Use cases:

- count number of instances
- Logging on class level rather than instance level

```javascript
class Foo {
  constructor() {
    Foo.prototype.counter++;
  }
}

Foo.prototype.counter = 0;
```

## Reason for wrapping the entire content of JS in a function block ##

Common practice. Creates a closure around the entire contents of the file, which creates private namespace and thereby helps avoid potential name clashes between different JS modules and libraries

## Test if value is equal to `NaN` ##

```javascript
const isNan = value =>  value !== value
```

## Function that determines if `x` is a Number ##

```javascript
const isNumber = x => Number(x).isInteger();
const isNumber = x => x ^ 0 === x; // does not work with floating point numbers
const isNumber = x => {
  // Check if type is number
  if (typeof x !== "number") {
    return false;
  }
  
  // Check if x is not NaN
  if (x !== Number(x)) {
    return false;
  }

  // Check if x is not Infitity and not -Infinity
  if (x === Infinity || x === !Infinity) {
    return false;
  }

  return true;
};
```

## In what order will the numbers 1-4 be logged to the console when the code below is executed and why ##

```javascript
(function(){
  console.log(1);
  setTimeout(function(){ console.log(2) }, 1000);
  setTimeout(function(){ console.log(3) }, 0);
  console.log(4);
})()
```

Browser has an event loop which checks the event queue nad processes pending events. E.g. if an event happens in the background (script onLoad event) while browser is busy (processing onClick), event gets appended to the queue. When onClick handler is complete, the queue is checked and the next event is then handled.

Similarly, `setTimeout()` also  puts execution of its referenced function into the event queue if the browser is busy.

Output:

```javascript
1
4
3
2
```

## What will be the output of the following code ##

```javascript
for (var i = 0; i < 5; i++) {
  setTimeout(function() { console.log(i); }, i * 1000 );
}
```

Output will be:

```javascript
5
5
5
5
5
```

In order to have more expected output:

Closures can be used to prevent this problem by creating a unique scope for each iteration, storing each unique value of the variable within its scope, as follows:

```javascript
for (let i = 0; i < 5; i++) {
  setTimeout(function() { console.log(i); }, i * 1000 );
}
```

or

```javascript
for (var i = 0; i < 5; i++) {
    (function (i){
        setTimeout(function() { console.log(i); }, i * 1000 )
    })(i);
}
```

## The following recursive code will cause a stack overflow if the array list is too large. How can you fix this and still retain the recursive pattern ##

```javascript
  var list = readHugeList();
  var nextListItem = function() {
  var item = list.pop();
    if (item) {
      // process the list item...
      nextListItem();
    }
  };
```

The potential stack overflow can be avoided by modifying the nextListItem function as follows:

```javascript
var list = readHugeList();
var nextListItem = function() {
  var item = list.pop();

  if (item) {
    // process the list item...
    setTimeout( nextListItem, 0);
  }
};
```

The stack overflow is eliminated because the event loop handles the recursion, not the call stack.
When nextListItem runs, if item is not null, the timeout function (nextListItem) is pushed to the event queue and the function exits, thereby leaving the call stack clear. When the event queue runs its timed-out event, the next item is processed and a timer is set to again invoke nextListItem. Accordingly, the method is processed from start to finish without a direct recursive call, so the call stack remains clear, regardless of the number of iterations

## What will be the output when the following code is executed ##

```javascript
console.log(false == '0')
console.log(false === '0')
```

Output

```javascript
true
false
```

In JavaScript, there are two sets of equality operators. The triple-equal operator === behaves like any traditional equality operator would: evaluates to true if the two expressions on either of its sides have the same type and the same value. The double-equal operator, however, tries to coerce the values before comparing them. It is therefore generally good practice to use the === rather than ==. The same holds true for !== vs !=.

## What is the output out of the following code ##

```javascript
var a={},
    b={key:'b'},
    c={key:'c'};

a[b]=123;
a[c]=456;

console.log(a[b]);
```

`The output of this code will be 456 (not 123).`

The reason for this is as follows: When setting an object property, JavaScript will implicitly stringify the parameter value. In this case, since `b` and `c` are both objects, they will both be converted to `"[object Object]"`. As a result, `a[b]` and `a[c]` are both equivalent to `a["[object Object]"]` and can be used interchangeably. Therefore, setting or referencing `a[c]` is precisely the same as setting or referencing `a[b]`

## What will the following code output to the console and why. What is the issue with this code and how can it be fixed ##

```javascript
var hero = {
    _name: 'John Doe',
    getSecretIdentity: function () {
        return this._name;
    }
};

var stoleSecretIdentity = hero.getSecretIdentity;

console.log(stoleSecretIdentity());
console.log(hero.getSecretIdentity());
```

The code will output:
`undefined`
`John Doe`

The first `console.log` prints `undefined` because we are extracting the method from the hero object, so `stoleSecretIdentity()` is being invoked in the global context (i.e., the window object) where the `_name` property does not exist.

One way to fix the `stoleSecretIdentity()` function is as follows:

```javascript
var stoleSecretIdentity = hero.getSecretIdentity.bind(hero);
```

## What will be the output of this code ##

```javascript
var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};
girl();
```

Neither 21, nor 20, the result is `undefined`

It’s because JavaScript initialization is not hoisted.

(Why doesn’t it show the global value of 21? The reason is that when the function is executed, it checks that there’s a local x variable present but doesn’t yet declare it, so it won’t look for global one.)

## How do you clone an object ##

```javascript

var obj = { a: 1 ,b: 2 };
var objClone = Object.assign({},obj); // no deep cloning

const clone = obj => JSON.parse(JSON.stringify(obj));

const cloneObject = obj => {
  const clone = {};

  for (let i in obj) {

    if (obj[i] !== null && typeof obj[i] === 'object') {
      clone[i] = cloneObject(obj[i]);
    } else {
      clone[i] = obj[i];
    }

  }
  
  return obj;
}

```

## What will be the output ##

```javascript
[] == ![]
```

The first rule to know is there are only three types of conversion in JavaScript:

- to string
- to boolean
- to number

### Type coercion for objects ###

So far, we’ve looked at type coercion for primitive values. That’s not very exciting.

When it comes to objects and engine encounters expression like [1] + [2,3], first it needs to convert an object to a primitive value, which is then converted to the final type. And still there are only three types of conversion: numeric, string and boolean.

The simplest case is boolean conversion: any non-primitive value is always
coerced to true, no matter if an object or an array is empty or not.

Objects are converted to primitives via the internal [[ToPrimitive]] method, which is responsible for both numeric and string conversion.

Here is a pseudo implementation of [[ToPrimitive]] method:

[[ToPrimitive]] is passed with an input value and preferred type of conversion: Number or String. preferredType is optional.

Both numeric and string conversion make use of two methods of the input object: valueOf and toString . Both methods are declared on Object.prototype and thus available for any derived types, such as Date, Array, etc.

In general the algorithm is as follows:

If input is already a primitive, do nothing and return it.

- Call `input.toString()`, if the result is primitive, return it.

- Call `input.valueOf()`, if the result is primitive, return it.

- If neither `input.toString()` nor `input.valueOf()` yields primitive, throw TypeError.

Numeric conversion first calls valueOf (3) with a fallback to toString (2). String conversion does the opposite: toString (2) followed by valueOf (3).

Secondly, conversion logic for primitives and objects works differently, but both primitives and objects can only be converted in those three ways.

The abstract equality operator converts both sides to `numbers` before comparing them, and both sides will be converted to `0` for different reasons. Arrays are truthy so the right hand side becomes `false` which then is coerced to `0`. On the left however the empty array is coerced to a `number` without becoming a `boolean` first, and empty arrays are coerced to `0`

```javascript
[] == ![] // -> true

Number([]) == Boolean([])
0 == true
0 == !true
0 == false
0 == 0
true
```

`true` is `truthy` and is represented by value `1` (number), `true` in string form is `NaN`

```js
true == 'true' // false; same as 1 == Number(NaN)
Number(true) == Number('true'.trim())
1 == NaN
false

false == 'false' // false; same as 0 == Number(NaN)
Number(false) == Number('false'.trim())
0 == NaN
false
```

`"false"` is not the empty string, so it's a `truthy` value

```js
!!'false' // true; Boolean("false".trim())
Number('false'.trim()) = NaN
Boolean(NaN) = false
!false = true
```

```js
"foo" + + "bar"
"foo" + (+"bar")
"foo" + NaN
"fooNaN"
```

```js
'true' == true
NaN == 1
false

false == 'false'
0 == NaN
false
```

`==` usually triggers numeric conversion, but it’s not the case with `null` . `null` equals to `null` or `undefined` only, and does not equal to anything else.

```js
null == ''
false
```

```js
null == false
false
```

`+` operator triggers numeric conversion for `[]`. Array’s `valueOf()` method is ignored, because it returns array itself, which is non-primitive. Array’s `toString` returns an empty string.

```js
[] + null + 1  
'' + null + 1
'null' + 1
'null1'
```

Logical `||` and `&&` operators coerce operands to `boolean`, but return original operands (not booleans). `0` is falsy, whereas `'0'` is truthy, because it’s a non-empty string. `{}` empty object is truthy as well.

```js
0 || "0" && {}  
(0 || "0") && {}
false || true) && true  // internally
"0" && {}
true && true             // internally
{}
```

All operands are non-primitive values, so `+` starts with the leftmost triggering numeric conversion. Both Object’s and Array’s `valueOf` method returns the object itself, so it’s ignored. `toString()` is used as a fallback. The trick here is that first `{}` is not considered as an object literal, but rather as a block declaration statement, so it’s ignored. Evaluation starts with next `+[]` expression, which is converted to an empty string via `toString()` method and then to `0`.

```js
{}+[]+{}+[1]
+[]+{}+[1]
0 + {} + [1]
0 + '[object Object]' + [1]
'0[object Object]' + [1]
'0[object Object]' + '1'
'0[object Object]1'

!+[]+[]+![]  
(!+[]) + [] + (![])
!0 + [] + false
true + [] + false
true + '' + false
'truefalse'
```

```js
!!'true' // true;
!!'any string' // true
!!'' // false
!!'false' == !!'true' // true;
!!'false' === !!'true' //true;

[1] == [1] // false same type - reference comparison
[] == '' //true 0 == 0
Number([]) == Number('') //true 0 == 0
[] == 0 // true 0 == 0
Number([]) == 0 // true 0 == 0
[''] == '' // true 0 == 0
[0] == 0 // true
[] == '' // true

[''] == 0 // true
[0] == '' //false

[null] == '' // true
[null] == 0 // true
[undefined] == '' // true
[undefined] == 0 // true

[[]] == 0 // true
[[]] == '' // true
```

## What do the following lines output, and why ##

```js
console.log(1 < 2 < 3);
1 < 2
true < 3
1 < 3
true
```

```js
console.log(3 > 2 > 1);
3 > 2
true > 1
false
```

The first statement returns true which is as expected.
The second returns false because of how the engine works regarding operator associativity for < and >.
It compares left to right, so 3 > 2 > 1 JavaScript translates to true > 1. true has value 1, so it then compares 1 > 1, which is false.

## What is the value of `typeof undefined == typeof NULL` ##

The expression will be evaluated to true, since NULL will be treated as any other undefined variable.
Note: JavaScript is case-sensitive and here we are using NULL instead of null.

## Difference between `bind()`, `call()`, `apply()` ##

Bind - creates a function that, when called, has its this keyword set to the provided value

```js
const pokemon = {
    firstName: 'Pika',
    lastName: 'Chu',
    /** In order to use this inside a function you cannnot use arrow functions
    Arrow function has a lexical scoping. Lexical scoping just means that it uses 
    this from the code that contains the Arrow function **/
    getPokemon: function () {
        return `${this.firstName} ${this.lastName}`;
    }
};


const pokemonName = function(snack) {
    console.log(this.getPokemon() + ' loves ' + snack);
};

const logPokemon = pokemonName.bind(pokemon); // creates new object and binds this

logPokemon('chocolate');
```

`call()` - will call (execute) function and pass this as a parameter, call does not copy a function just executes it with `this` passed as an argument.

The only difference between call and apply is that call expects all parameters to be passed in individually, whereas apply expects an array of all of our parameters

```js
pokemonName.call(pokemon, 'sushi');
pokemonName.apply(pokemon, ['sushi']);
```

## Implement isArray function ##

```js

const isArray = obj => {
  try {
    // return Object.prototype.toString.call(obj) === "[object Array]"
    return obj.constructor.name === "Array"
  } catch(e) {
    return false;
  }
}

```

**Describe inheritance and the prototype chain in JS**

JS is a object oriented language, but does not have ***regular*** classes and inheritance. It implements prototypal inheritance where every object has a prototype property and in contains all of the properties and methods that are inherited. If current object does not have a property or a method, it will look into `prototype` property to check if it contains methods or properties if not it will go deeper into a prototype chain to see if any of the objects contain property that e are looking for, until it reaches the point where `prototype` property points to `null` 

**Compare and contract objects ad hash tables in JS**

**Explain closures**
Closure is a function that has as access to the scope of parent functions, in terms of JS. Function that is nested into each other can access outer functions variables and methods

**Ways of creating objects**
`Object.create(some_prototype_object)` creates object with prototype object as a parameter

`{ prop: value }` creates empty object with prototype `null` 

function expression

``` javascript
function(){
    this.prop = value
}
```

Sets global `Object` as prototype 

Arrow function `fn =() => {}` with empty prototype

**Difference between defining function and function expression**

function expressions get hoisted during parsing, so they are available before execution

defining a function  using a variable will be parsed during execution

**Significance of wrapping content in a function block**
It is common practice which gives function its own `namespace` prevents name clashing with other modules

**Difference between `==` and `===`**
Double equality operator is implicit and prefers type coercion when comparing different types of data, meaning both sides will be coerced before comparing, while triple equality operator compares strictly without coercion 

**"use strict"**
Enforces strict mode during runtime, which prevents runtime from silencing certain errors and  prevents certain action to be taken 

----
**Tags:** #js