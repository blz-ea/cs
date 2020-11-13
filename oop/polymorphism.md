# Polymorphism #

Polymorphism is the idea of defining data structures or algorithms in general, so you can use them for more than one data type.

Poly= many, morphism=form or behavior shifting. 
Polymorphism is one of the tenets of Object Oriented Programming (OOP). It is the practice of designing objects to share behaviors and to be able to override shared behaviors with specific ones. 
Polymorphism takes advantage of inheritance in order to make this happen.
The power in polymorphic design is to share behaviors.
Polymorphism means Ability to call the same method on different objects and each object responds in different way.

```javascript
function Persona(age, weight) {
    this.age = age;
    this.weight = weight;
}

Persona.prototype.getInfo = function () {
    return console.log(`Person's age is ${this.age}. Person weight ${this.weight}`);
};

const persona = new Persona(20, 55);
persona.getInfo();

function Employee(age, weight, salary) {
    this.age = age;
    this.weight = weight;
    this.salart = salary;
}

Employee.prototype = new Persona();

const employee = new Employee(40, 77, 10000);
employee.getInfo();

class Person {
    constructor(gender = 'man') {
        this.gender = gender;
    }
    sayHello() {
        return `Hello I'm ${this.gender}`;
    }
}

const man = new Person();
const woman = new Person('woman');
```

## Parametric polymorphism ##

This is a pretty common technique in many languages, better known as "Generics". The core idea is to allow programmers to use a wildcard type when  defining data structures that can later be filled with any type.

```typescript
class Node<T> {
    data: T
    next: Node<T> | null
}

class List<T> {
    public head: Node<T>;
    public pushFront(data: T): void { /* ... */ }
}

const myNumberList: List<String> = new List<String>();
myNumberList.pushFront("foo");
myNumberList.pushFront("8") // Error: 8 is not a string
```

## Ad-hoc polymorphism ##

This is more commonly known as function or operator overloading. In languages that allow this, you can define a function multiple times to deal with different input types. For example in Java:

```typescript
class Printer {
    public prettyPrint(x: number) { /* ... */ }
    public prettyPrint(c: string) { /* ... */ }
}
```

The compiler will automatically choose the right method depending on the type of data you pass to it. This can make APIs easier to use as you can just call the same function with any type

## Subtype polymorphism ##

Subtype is better known as object oriented inheritance. The classic example is a vehicle type, here in Java:

```typescript
abstract class Vehicle {
    abstract getWeight(): number
}

class Car extends Vehicle {
    getWeight(): number { return 10.0; }
}

class Truck extends Vehicle {
    getWeight(): number { return 100.0; }
}

class Toyota extends Car { /* ... */ }
```

Here we can use any child class of the vehicle class as if it was a vehicle class directly. Note that we cannot go the other way, because not every vehicle is guaranteed to be a car.
