*Necessary of using Type Guard in code:

Typescript is being used to make js more structured and give safety in type, because JavaScript is a dynamically types language, that  code often works with the values which type we are unknown. To prevent this, Typescript is an advance solution. Here Type Guard in a tool in TS, that allows developers to check narrow down types in run time.


There are various type of Type Guards

1. typeof Type Guard
* Use Case: Works well for basic types like string, number, and boolean.
*Example:
typescript
Copy code
function processInput(input: string | number) {
    if (typeof input === "string") {
        console.log("String length:", input.length);
    } else {
        console.log("Number squared:", input * input);
    }
}

2.instanceof Type Guard

*Use Case: Useful for checking if an object is an instance of a specific class.
*Example:
typescript
Copy code
class Dog {
    bark() {
        console.log("Woof!");
    }
}

class Cat {
    meow() {
        console.log("Meow!");
    }
}

function makeNoise(animal: Dog | Cat) {
    if (animal instanceof Dog) {
        animal.bark();
    } else if (animal instanceof Cat) {
        animal.meow();
    }
}

3.in Operator Type Guard

*Use Case: Useful when working with objects with known properties but different types. The in operator checks if a specific property exists in an object.
*Example:
typescript
Copy code
type Bird = { fly: () => void };
type Fish = { swim: () => void };

function move(animal: Bird | Fish) {
    if ("fly" in animal) {
        animal.fly();
    } else {
        animal.swim();
    }
}