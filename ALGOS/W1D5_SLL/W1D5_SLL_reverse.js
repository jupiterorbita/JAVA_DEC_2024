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

    addDataToFront(data) {
        var newNode = new Node(data); // create a new node with the data
        newNode.next = this.head; // set the new node's next to the head
        this.head = newNode; // move the head to the new node
    }

    read() {
        var runner = this.head;
        while (runner) {
            console.log(runner.data);
            runner = runner.next;
        }
    }

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

    removeFromFront() {
        var runner = this.head;
        if (runner.next) {
            this.head = runner.next;
            runner.next = null;
        }
        return runner;
    }

    delete(data) {
        // create a runner
        let runner = this.head;
        // check if head is empty
        if (!runner) return;
        // check if head is target
        if (runner.data == data) {
            this.removeFromFront();
            return;
        }

        // while next exists
        while (runner.next) {
            // check if runner next is data
            if (runner.next.data == data) {
                // remove it and return
                runner.next = runner.next.next;
                return;
            }
            // otherwise traverse
            runner = runner.next;
        }
    }

    size() {
        let size = 0; // hold on to the length
        let runner = this.head; // set runner
        while (runner) { // if runner is on a node
            size++; // increment size
            runner = runner.next; // move runner
        }
        return size;
    }

    // ⭐⭐⭐=== NEW METHODS ===⭐⭐⭐
    // if the linked list has a second to last value, print it
    // return nothing
    //                                      🐇
    // input: head -> (1) -> (5) -> (11) -> (7) -> (9) -> null
    // print: 7
    printSecondToLastValue() {
        // TODO
    }

    // bonus: print nth to last
    // if the link list has a nth to last value, print it
    // return nothing
    //
    // input: head -> (1) -> (5) -> (11) -> (7) -> (9) -> (4) -> (19) -> (30) -> null
    //        n = 4
    // print: 9
    // hint - use 2 runners
    printNthToLast(n) {
        // TODO
    }

    // reverse linked list in place
    // ** you may not swap values between nodes **
    // input:  head -> (1) -> (2) -> (3) -> null
    // output: head -> (3) -> (2) -> (1) -> null
    reverse() {
        // TODO
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
console.log(myCoolSLL.size());
// ----- new methods test here------



