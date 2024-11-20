// Object-Oriented Programming (OOP) is a programming paradigm based on the concept of "objects"

//! 1. Encapsulation -----------------------------
// how data is accessed - access modifier
// making attributes private and providing public getter and setter methods to access and update the value of a private variable.
public class Person {
    private String name; // Private variable, encapsulated within the class

    // GETTERS AND SETTERS FOR THE private member variable
    // Getter for name
    public String getName() { // Getter for name
        return name;
    }

    // Setter for name
    public void setName(String newName) {
        name = newName;
    }
}

// ! 2. Inheritance -------------------------------
// allows a class to use properties and methods of another class. `extends`
// keyword.
// subclass or child class -- superclass or parent class.
public class Animal {
    public void eat() {
        System.out.println("This animal eats food.");
    }
}

public class Dog extends Animal { // Dog inherits from Animal
    public void bark() {
        System.out.println("The dog barks.");
    }
}

// ! 3. Polymorphism ------------------------------
// allows methods to do different things based on the object it is acting upon,
// even if they share the same name.

public class Bird {
    public void sing() {
        System.out.println("The bird sings.");
    }
}

public class Sparrow extends Bird {

    public void sing() {
        System.out.println("The sparrow sings melodiously.");
    }
}

//! 4. Abstraction -------------------------------
// (an extension of encapsulation)
// Abstraction means hiding the complex implementation details and showing only the necessary features of the object
// Math.radom()
public abstract class Vehicle {
    abstract void start();
}

public class Car extends Vehicle {
    @Override
    void start() {
        System.out.println("Car starts with a key.");
    }
}