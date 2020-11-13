# Encapsulation #

Encapsulation means information hiding.
It’s about hiding as much as possible of the object’s internal parts and exposing a minimal public interface.

```javascript
// Encapsulation using closures
const person = function () {
    const fullName = 'John Doe';
    getFullName = () => {
        return fullName;
    };

    return {
        getFullName,
    };
};

console.log(person().getFullName());

// Encapsulation using setters and getters (ES6)
class Person {
    constructor() {
        this._fullName = 'John Doe'; //conventional way of presenting data that is private
    }

    get fullName() {
        // Validation can happen here
        return `Get ${this._fullName}`;
    }

    set fullName(name) {
        this._fullName = name;
    }
}

const people = new People();

p.name = 'John D';
p._fullName = 'John'; // not accessible
```