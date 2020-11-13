# Strict Mode #

Strict Mode (`"use strict"`) was a new feature in ECMAScript 5 that allows you to place a program, or a function, in a "strict" operating context. This strict context prevents certain actions from being taken and throws more exceptions.

Benefits of using Strict mode:

- Strict mode eliminates some JavaScript silent errors by changing them to throw errors.
- It prevents or throws errors, when relatively "unsafe" actions are taken
- Using variables without declaring is not allowed

```javascript
'use strict';
x = "x"; // ReferenceError
```

- Deleting a variable (or object) and a function is not allowed

```javascript
'use strict';
delete Object.prototype; // SyntaxError
```

- Silent failing assignments will throw an error(`NaN = 5`)
- Requires all property names in an object to be unique
- Function parameter names must be unique
- Forbids octal syntax (`var x = 023`)
- Forbids `with` keyword
- Forbids binding or assignment of the names `eval` and `arguments` in any form
