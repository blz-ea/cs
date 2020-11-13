# Typescript Quirks #

List of special cases and surprises in Typescript

## Interfaces with excess properties ##

```typescript
interface Dog {
    breed: string
}

function printDog(dog: Dog) {
    console.log("Dog: " + dog.breed);
}
```

This says that `Dogs` are objects that have a `breed` property that is a `string`. TypeScript is a `structurally typed` language.
This means that any object that have `breed` property that is of type `string` can be used as `Dog`.

```typescript
const ginger = {
    breed: "Airedale",
    age: 3
}
```

Typescript understands that `ginder` has 2 properties including the required `breed` property and compiles without problem
printDog(ginger); `Output: Dog: Airedale`

Typescript catches bugs where there are typos in property names or extra property name that do nothing.
Even tough Typescript match the `Dog` interface it is probably not a useful thing to pass the `age` property into `printDog`

```typescript
print({ breed: "Airedale", age: 3 }); // > Error: Object literal may only specify known properties, and age does not exist
```

## Classes(nominal typing) ##

```typescript
class Dog {
    breed: string
    constructor(breed: string) {
        this.breed = breed;
    }
}

class Cat {
    breed: string
    constructor(breed: string) {
        this.breed = breed;
    }
}

function printDog(dog: Dog) {
    console.log("Dog: " + dog.breed);
}

const shasta = new Cat("Maine Coon");
printDog(shasta);
```

Because Typescript is structurally typed, it only cares about the properties that object contains (and not how they were constructed). In this case `Dogs` are any object that has `breed` property.
Class assignability based on class names is called `nominal typing` and is used by most other popular typed languages, such as Java as well as `Flow`

## Discriminated Unions ##

A union type is a type like `Cat | Dog` that represents a few more concepts about the type system. This allows to create typesafe function like

```typescript

interface Cat {
    kind: "cat"
    meow: string
}

interface Dog {
    kind: "dog"
    bark: string
}

type Animal = Cat | Dog

function printCatOrDog(animal: Animal) {
    if (animal.kind === "dog") {
        return animal.bark
    } else {
        return animal.meow
    }
}
```

```typescript
interface Dog {
    taxonomy: {
        species: "Canis familiaris"
    }
    bark: string
}

interface Cat{
    taxonomy: {
        species: "Felis catus"
    }
    meow: string
}

type Animal = Cat | Dog

function animalNoise(animal: Animal): string {
    if (animal.taxonomy.species === "Canis familiaris") {
        return animal.bark // > Error: Property 'bark' does not exist on the type 'Dog | Cat'
    } else {
        return animal.meow // > Error: Property 'meow' does not exist on the type 'Dog | Cat'
    }
}
```

Discriminated unions only apply to properties on the top level on an object. The fact that we nested the information one level deeper meant that the Typescript compiler was unable to notice that it could refine the type

## Reference ##

- [Asana: Typescript quirks](https://blog.asana.com/2020/01/typescript-quirks/)
