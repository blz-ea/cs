# Type systems #

`Strong`/`Weak` typing can be thought of in relation to how compiler handles typing.

**Weakly typed** means compiler doesn't enforce correct types

```pseudo
"12345" * 1 === 12345
```

Instruction will result in error during runtime

**Strongly typed** means that there is a compiler and it wants you to explicit cast from `string` to `integer`

```pseudo
(int) "12345" * 1 === 12345
```

`Dynamic`/`Static` can be though of in relation to how the language instructions manipulate types

**Dynamically typed** means that the value type is enforced, but the variable simply represents any value of any type

```pseudo
x = 123
x = "string"
x = { key: value }
y = 123 + x // error or coercion
```

**Statically typed** means variable type is strongly enforced and the value is less-so enforced

```pseudo
int x=123
x = "string" // error: x is an integer
string y = 123 // error or coercion
```

**Typed** means that the language distinguishes between different types such as `string`,`number`,`undefined`,`boolean`

**Untyped** means the operation of dividing integer by string would result in treating the first four bytes of the `string` as `integer`. This is because untyped operations take place directly on bits there are no types to observe.
