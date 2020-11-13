# Composition over Inheritance #

You can always use composition. In some cases, inheritance is also possible and may lead to a more powerful and/or intuitive API, but composition is always an option.

## When can you use inheritance ##

- If a `bar` is `foo` 
- `bar`s can do everything that `foo`s can do

First test ensures that all getters make sense in `Bar` (shared properties).
While second test ensures that setters of `Foo` make sense in `Bar` (shared functionality)

### Example ###

- If a `Dog` class is an animal and dogs can do everything that `Animal` class does, therefore class `Dog` can inherit the class `Animal`
- A circle is an ellipse, but circles can't do everything that eclipses can do (e.g. can't stretch), therefore class `Circle` cannot inherit the class `Ellipse`
