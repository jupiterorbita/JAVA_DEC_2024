// DLLNodes have a .next and .prev
class DLLNode {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

// DLLists have both a this.head and this.tail pointer
class DLList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // add node before target
    // target is the value of a node in the list
    // consider the edge case where you may have to move the head
    // consider the edge case where you do not find the target
    prepend(target, node) {
        if (this.head !== null) { // Must have at least one node
            var curNode = this.head;
            if (curNode.data === target) { // Edge case: first node only
                node.next = curNode; // Connect nodes
                curNode.prev = node;
                this.head = node; // Move this.head to new node
            } else {
                while (curNode.next !== null) {
                    curNode = curNode.next; // Move to next node
                    if (curNode.data === target) {
                        // Link this new node to the others
                        node.next = curNode;
                        node.prev = curNode.prev;
                        // Link other nodes to this new node
                        curNode.prev.next = node;
                        curNode.prev = node;
                        return; // Exit while loop assuming only before first instance of target
                    }
                }
            }
        }
    }

    // 1. readability
    // 2. correct output
    // 3. performance
    // 4. refactoring/code cleaniness

    // cleaner, less indented
    prependClean(target, node) {
        var runner = this.head; // set a runner
        if (runner.data === target) {
            this.addHead(node);
            return;
        }
        while (runner) { // loop
            if (runner.data !== target) { // check runner data against the target
                runner = runner.next;     // move forward if no match
            } else {                      // else we found a match
                node.next = runner;       // point the node at the matched runner
                node.prev = runner.prev;  // point the node's prev to the matched runner's prev
                node.prev.next = node;    // link previous node next
                runner.prev = node;       // link runner to node
                return;
            }
        }
    }

    prepend(target, node) {
        if (!this.head) {
            console.log("your list is empty!!");
            return;
        }
        let runner = this.head;
        while (runner) {
            if (runner.data === target) {
                runner.prev.next = node;
                node.next = runner;
                node.prev = runner.prev;
                runner.prev = node;
                console.log("you found the target!!");
                return;
            }
            runner = runner.next;
        }
        console.log("target does not exist");
        return;
    }

    // --== BONUS ==--
    append(target, node) {
        if (!this.head) {
            return "Empty Doubly Linked List";
        }

        let runner = this.head;

        while (runner) {
            // consider the edge case where you may have to move the tail
            if (runner.next === null) {
                this.tail = node;
                node.prev = runner;
                runner.next = node;
                console.log("the target was this.tail");
                return;
            }

            if (runner.data === target) {
                node.next = runner.next;
                node.prev = runner;
                runner.next = node;
                runner.next.prev = node;
                console.log("you found the target!");
                return;
            }

            runner = runner.next;
        }

        console.log("target does not exist");
        return;
    }

    // --== BONUS ==--
    find(target) {
        if (!this.head) {
            return "Empty Doubly Linked List";
        }

        let runner = this.head;
        let runnerTwo = this.tail;

        while (runner) {
            if (runner.data === target) {
                console.log("You found the target through the first runner");
                return runner.data;
            }
            if (runnerTwo.data === target) {
                console.log("You found the target through the second runner");
                return runnerTwo.data;
            }

            runner = runner.next;
            runnerTwo = runnerTwo.prev;
        }

        console.log("You went through the whole list and didnt find the target");
        return;
    }

    // == Main Methods ==

    // push to head
    // myDll.addHead(new DLLNode(33));
    // push to head
    addHead(node) {
        if (!this.head) { // empty list
            this.head = node;
            this.tail = node;
        } else {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;

            // this.tail.next = node;
            // node.prev = this.tail;
            // this.tail = node;
        }
    }

    // pop from tail
    removeTail() {
        if (this.head == null) return; // empty list
        if (this.head === this.tail) { // one node
            var temp = this.tail; // set a temp
            this.head = null; // disconnect the head
            this.tail = null; // disconnect the tail
            return temp;
        }
        var temp = this.tail; // set a temp
        this.tail = this.tail.prev; // move the tail back
        this.tail.next = null; // null out the new tail's next
        temp.prev = null; // null out the temp's prev
        return temp;
    }

    // return is empty
    isEmpty() {
        return this.head === null;
    }

    // return length
    size() {
        if (!this.head) {
            return 0;
        }

        let runner = this.head;
        let count = 0;

        while (runner) {
            count++;
            runner = runner.next;
        }
        return count;
    }

    // push to tail
    addTail(node) {
        if (!this.tail) {
            this.head = node;
            this.tail = node;
        }

        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node;

        if (!this.head) {
            this.head = node;
        }
    }

    // pop from head
    removeHead() {
        if (!this.head) {
            return "Your linked list is empty!";
        }

        if (!this.head.prev && !this.head.next) {
            this.head = null;
            this.tail = null;
        }

        this.head = this.head.next;
        this.head.prev.next = null;
        this.head.prev = null;
    }

}
// Remember to instantiate the DLL!!
// add a few nodes ex. // myDll.addHead(new DLLNode(33));
// print the DLL -> console.log(myDll) did the nodes get added?
// remove a few nodes from tail
// print the DLL -> did the correct nodes get removed?