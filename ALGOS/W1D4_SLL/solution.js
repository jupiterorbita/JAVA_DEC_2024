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

    // === new methods ===
    // if data is contained within the current list, delete it.
    // return void
    // assume there are no duplicates
    // consider the edge case if you have to delete the head node
    // consider the edge case your list is empty
    // consider the edge case that your list does not contain the data
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

    // runner here is undefined
    // return the size of the current linked list
    // BONUS: how might you do this without linearly traversing the list? O(1)
    size() {
        let size = 0; // hold on to the length
        let runner = this.head; // set runner
        while (runner) { // if runner is on a node
            size++; // increment size
            runner = runner.next; // move runner
        }
        return size;
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
// ----- new methods ------
// myCoolSLL.read(); // 22 -> 33 -> 44 -> 100
// console.log(myCoolSLL.contains(22)); // true
// console.log(myCoolSLL.contains(800)); // false
// myCoolSLL.removeFromFront();
// console.log(myCoolSLL);


