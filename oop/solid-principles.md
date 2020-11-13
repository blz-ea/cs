# Solid Principles #

**OOP** is about managing dependencies by selectively inverting certain key dependencies in an architecture so you can prevent rigidity, non-reusability, fragility
- **OOP** principles
	- Encapsulation
	- Inheritance
	- Polimorphism

## Class Design Principles ##

**SRP** - **Single Responsibility Principle**
A class should have only one responsibility (one reason) to change
If we had a class that had 3 methods: `calcPayment`, `reportHours`, `writeEmployee`
we would have 3 different reasons to change, we should separate them into their own classes
- we can use something like **Facade Design**, but be aware of open close principle

**OCP** - **Open Close Principle**
Class should be open for extension but close for modification

E.g. if we had a function that was responsible for drawing shapes, it wouldn't be a good idea to list all possible shapes inside that class. Better approach will be to have a Shape class and all other Shapes (Square, Circle) will derive from it and follow same signature. Our draw function then will just invoke .draw() method on a specified class

**LSP** - **Liskov Substitution Principle**
Derived classes must be usable through the base class interface, without the need for the user to know the difference. Every sub-class of a class should be compatible with parent class. But rather than inheriting from classes a better approach will be to use composition

**IS** - **Interface Segregation** states that classes should implement all methods and properties, if not interface should be decoupled

**DI** - **Dependency Inversion** - Class should not be dependent on other classes. Rather pass a reference to a class

---
**Tags:** #oop