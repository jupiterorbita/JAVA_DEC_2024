// Singly Linked List
// SLL -> (44) -> (55) -> (101) -> null
// pointers
// memory locations
// garbage collection
// OOP

// pass by value / copy
let x = 10;
let y = x;

x += 30;
y += 10;

// console.log(x); //?
// console.log(y); //?

// -----------------
// pass by reference
let a = [1, 2, 3, 4];
let b = a;

a.push(1000);
b.push(4000);

// console.log(a); //?
// console.log(b); //?

// ======================

// object literal
const person = {
    name: "Bob",
    favFood: "🍕",
    age: 28
};

// const somePerson = new Person("")


let node1 = {
    data: 11,
    next: null
};

let node2 = {
    data: 22,
    next: null
};

let node3 = {
    data: 33,
    next: null
};

node1.next = node2;
node1.next.next = node3;
// node2.next = node3;

// console.log(node1);

// --------------------------
//! class - blueprint
// - create new objects
// reusable

// ! constructor
// defines the object to be created
// some defaults for that object
// member variables
// what a class HAS / attributes

// ! methods
// actions - what a class can DO
// drive()
// honk()

class Node {
    constructor(value) {
        this.data = value;
        this.next = null;
    }
}

const node4 = new Node(66);
const node5 = new Node(99);
const node6 = new Node(101);
node1.next.next.next = node4;
// console.log(node1);

// class for the SLL
class SLL {
    constructor() {
        this.head = null;
    }

    // --  methods --
    isEmpty() {
        if (this.head != null) {
            return false;
        } else {
            return true;
        }
    }

    // insert at front
    // add given node to the head, if it exists. return void
    // list is empty?
    // list already has nodes?
    addToFront(node) {
        // TODO
    }

    // create a new node with given data, add it to the head. return void
    addDataToFront(value) {
        // TODO
    }
}

const myCoolSLL = new SLL();

const alice = new Node(22);
myCoolSLL.addToFront(alice);

const bob = new Node(55);
myCoolSLL.addToFront(bob);
console.log(myCoolSLL);
