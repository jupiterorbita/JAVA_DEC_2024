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
    prepend(target, node) { }

    // --== BONUS ==--
    append(target, node) { }

    // head -->        <-- tail
    find(target) { }

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