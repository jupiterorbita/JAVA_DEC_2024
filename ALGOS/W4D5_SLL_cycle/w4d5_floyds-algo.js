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

    // if data is contained within the current list, delete it.
    // return void
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

    // return the size of the current linked list
    size() {
        let size = 0; // hold on to the length
        let runner = this.head; // set runner
        while (runner) { // if runner is on a node
            size++; // increment size
            runner = runner.next; // move runner
        }
        return size;
    }

    // if the linked list has a second to last value, print it
    // return nothing
    //                                      🐇
    // input: head -> (1) -> (5) -> (11) -> (7) -> (9) -> null
    // print: 7
    printSecondToLastValue() {
        let runner = this.head;

        if (!runner) return;
        if (!runner.next) return;

        while (runner.next) {
            if (runner.next.next === null) {
                console.log(runner.data);
                return;
            }
            runner = runner.next;
        }
    }

    // alternative
    printSecondToLastValue2() {
        let firstRunner = this.head;
        let secondRunner;

        while (firstRunner.next) {
            secondRunner = firstRunner;
            firstRunner = firstRunner.next;
        }
        console.log(secondRunner.data);
    }

    // if the link list has a nth to last value, print it
    // return nothing
    //                🐢                           🐇
    // input: head -> (1) -> (5) -> (11) -> (7) -> (9) -> (4) -> (19) -> (30) -> null
    //        n = 4
    // print: 9
    // hint - use 2 runners
    printNthToLast(n) {
        if (this.head === null) return;

        var runnerFast = this.head;
        var runnerSlow = this.head;
        var count = 0;

        while (runnerFast) {
            if (count >= n) {
                runnerSlow = runnerSlow.next;
            }
            runnerFast = runnerFast.next;
            count++;
        }

        if (count > n) {
            console.log(runnerSlow.data);
        }
    }

    // alternative
    printNthToLast2(n) {
        let firstRunner = this.head;
        let secondRunner = this.head;

        for (let i = 0; i < n; i++) {
            if (!firstRunner.next) {
                console.log("This list isn't long enough!!");
                return;
            }
            firstRunner = firstRunner.next;
        }
        while (firstRunner) {
            secondRunner = secondRunner.next;
            firstRunner = firstRunner.next;
        }
        console.log(secondRunner.data);
    }

    // reverse linked list in place
    // ** you may not swap values between nodes **
    // input:  head -> (1) -> (2) -> (3) -> null
    // output: head -> (3) -> (2) -> (1) -> null
    reverse() {
        var prev = null;
        var current = this.head;
        var next = null;
        while (current) {
            next = current.next;
            current.next = prev; //node
            prev = current;
            current = next;
        }
        this.head = prev;
    }

    // does the linked list have a loop
    // return true or false
    // input:  head -> (1) -> (2) -> (3) -> (4) -> (5) -> (3) -> (4) -> (5) -> ...
    // output: true
    // input:  head -> (1) -> (2) -> (3) -> (4) -> (5) -> null
    // output: false
    hasLoop() {
        //! if there is a loop return true
        //! if there is no loop return false
    }

    // return the value of the node where the loop starts
    // input:  head -> (1) -> (2) -> (3) -> (4) -> (5) -> (3) -> (4) -> (5) -> ...
    // output: 3
    loopStart() {
        //! if there is no loop return null
        //! if there is a loop, return the value of the node where the loop starts
    }
}

// instantiate the SLL
var myCoolSLL = new SLL();

// add some nodes to create a loop
var node1 = new Node(1);
var node2 = new Node(2);
var node3 = new Node(3);
var node4 = new Node(4);
var node5 = new Node(5);
myCoolSLL.addToFront(node5);
myCoolSLL.addToFront(node4);
myCoolSLL.addToFront(node3);
myCoolSLL.addToFront(node2);
myCoolSLL.addToFront(node1);
node5.next = node3;
// head -> (1) -> (2) -> (3) -> (4) -> (5) -> (3) -> (4) -> (5) -> ...

console.log(myCoolSLL);

// Floyd's cycle-finding algorithm,
// also known as the tortoise and the hare algorithm
// console.log(myCoolSLL.hasLoop()); // true
// myCoolSLL.loopStart(); // 3

