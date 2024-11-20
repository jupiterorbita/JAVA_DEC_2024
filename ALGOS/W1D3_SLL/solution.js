class Node {
    constructor(value) {
        this.data = value;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }

    isEmpty() {
        return this.head === null;
    }

    addToFront(node) {
        node.next = this.head; // set the new node's next to the head
        this.head = node; // move the head to the new node
    }

    addDataToFront(data) { // 10
        var newNode = new Node(data); // create a new node with the data
        newNode.next = this.head; // set the new node's next to the head
        this.head = newNode; // move the head to the new node
    }

    // ---- new methods ----
    // console log (print) the data of every node in the current list
    // traversal
    read() {
        var runner = this.head;
        while (runner) {
            console.log(runner.data);
            runner = runner.next;
        }
    }

    // find: return true / false if current list contains a data equal to value
    contains(value) {
        var runner = this.head;
        while (runner) {
            if (runner.data === value) {
                return true;
            }
            runner = runner.next;
        }
        return false;
    }

    // Remove from front: remove and return the first node in the SLL
    removeFromFront() {
        var runner = this.head;
        if (runner.next) {
            this.head = runner.next;
            runner.next = null;
        }
        return runner;
    }
}

// instantiate the SLL
var myCoolSLL = new SLL();
console.log(myCoolSLL);

// add some nodes
myCoolSLL.addToFront(new Node(100));
myCoolSLL.addToFront(new Node(44));
myCoolSLL.addToFront(new Node(33));
myCoolSLL.addToFront(new Node(22));
console.log(myCoolSLL);
// ----- new methods ------
// myCoolSLL.read(); // 22 -> 33 -> 44 -> 100
// console.log(myCoolSLL.contains(22)); // true
// console.log(myCoolSLL.contains(800)); // false
// myCoolSLL.removeFromFront();
// console.log(myCoolSLL);


