class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}


class Stack {
    constructor() {
        this.top = null; // this.head, this.end
        // this.length = 0;
    }

    // add to top
    push(newNode) {
        if (this.top === null) {
            this.top = newNode;
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }
        // this.length++;
    }

    // remove from top
    pop() {
        if (this.top === null) return null;

        var removed = this.top; // store previous top
        this.top = this.top.next; // move top pointer (or = removed.next)
        removed.next = null; // remove pointer from stored node
        // this.length--; // decrement length

        return removed; // return the node
    }

    // this pop only returns the data
    pop2() {
        if (!this.top) {
            return undefined;
        }
        // make a temp to keep track of the node we want to push
        let temp = this.top;
        // set this.top to this.top.next
        this.top = this.top.next;
        // set temp.next to null
        temp.next = null;
        return temp.data;
    }

    // aka check top
    peek() {
        return this.top;
    }

    // check if empty
    isEmpty() {
        return this.top === null;
    }

    // "1" == 1 true
    // "1" === 1 false

    // length getter
    // getLength() { }
    size() {
        // Early escape if empty
        if (!this.top) {
            return 0;
        }

        // Create the temp stack
        const temp = new Stack();
        // Create count variable
        let count = 0;

        // loop
        while (this.top) {
            // pop nodes to the temp stack until stack is empty increasing count by one each time
            temp.push(new Node(this.pop2()));
            count++;
        }

        // pop nodes from temp back to (this) stack until temp is empty
        while (temp.top) {
            this.push(new Node(temp.pop2()));
        }

        return count;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.size = 0;
    }

    /**
     * Returns whether or not this queue is empty.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {boolean}
     */
    isEmpty() {
        //if front is pointing to null => it's empty
        if (this.front === null) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * Retrieves the data of the first item without removing it.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The first item or undefined if empty.
     */
    getFront() {
        if (this.isEmpty()) {
            return null;
        }
        return this.front.data;
    }

    /**
     * Adds a new item with the data to the back of this queue.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @param {any} item The new item to add to the back.
     * @returns {number} The new size of this queue.
     */
    enqueue(data) {
        //declare the new item first
        const newNode = new Node(data);
        //1. check if the queue is empty
        if (this.isEmpty()) {
            //if the queue is empty => make the new item our front and rear
            this.front = newNode;
            this.rear = newNode;
        }
        //2.Else: add the newItem to rear
        else {
            this.rear.next = newNode;
            this.rear = newNode;
            this.size++;
        }
        return this.size;
    }

    /**
     * Removes and returns the first item of this queue.
     * - Time: O(n) linear, due to having to shift all the remaining items to
     *    the left after removing first elem.
     * - Space: O(1) constant.
     * @returns {any} The data of the first item or undefined if empty.
     */
    dequeue() {
        if (this.isEmpty()) {
            return null;
        }
        //1. move the front to front.next
        const removedData = this.front.data;
        this.front = this.front.next;
        this.size--;
        return removedData;
    }

    // bonus
    /**
     * Check if the target value exists in the queue using the basic queue operations
     * Using basic operations (.enqueue, .dequeue, isEmpty, getFront)
     * Check if the queue is still the same
     * @returns {Boolean }
     */
    contains(targetVal) {
        if (this.isEmpty()) {
            return false;
        }
        //compare the targetVal with the deque item until we reach the rear
        //loop thru the rear
        let isFound = false;
        const copiedQueue = new Queue();
        while (!this.isEmpty()) {
            let dequeueItem = this.dequeue();
            //will get the front
            if (dequeueItem === targetVal) {
                isFound = true;
            }
            //very first time the dequeueItem is the front and rear at the same time
            copiedQueue.enqueue(dequeueItem);
            //update the the next dequeueItem
        }

        while (!copiedQueue.isEmpty()) {
            this.enqueue(copiedQueue.dequeue());
        }
        return isFound;
    }

    // printQueue again after .contains?

    printQueue() {
        //for learning puspose
        console.log("Front: " + this.front.data);
        var runner = this.front;
        while (runner) {
            console.log(runner.data);
            runner = runner.next;
        }
        console.log("Rear: " + this.rear.data);
    }
}


/**
 * Determines if the queue is a palindrome (same items forward and backwards).
 * Avoid indexing queue items directly via bracket notation, instead use the
 * queue methods for practice.
 * Use only 1 stack as additional storage, no other arrays or objects.
 * The queue should be returned to its original order when done.
 * - Time: O(?).
 * - Space: O(?).
 * @returns {boolean}
 */
function isPalindrome(q) {
    let bool = true;
    let stack = new Stack();
    let tempQ = new Queue();

    while (!q.isEmpty()) {
        let tempNode = new Node(q.dequeue());
        tempQ.enqueue(tempNode);
        stack.push(tempNode);
    }

    while (!stack.isEmpty()) {
        let tempNode = new Node(stack.pop2());
        if (tempNode.data !== tempQ.front.data.data) {
            bool = false;
        }
        q.enqueue(tempNode);
        tempQ.dequeue();
    }
    return bool;

}
function isPalindrome2(q) {
    if (q.rear.data !== q.front.data) {
        return false;
    }

    let bool = true;
    let tempQ = new Queue();
    let stack = new Stack();

    while (!q.isEmpty()) {
        let tempNode = new Node(q.dequeue());
        tempQ.enqueue(tempNode);
        stack.push(tempNode);
    }
    while (tempQ.front !== null) {
        let tempNode = new Node(tempQ.dequeue());
        console.log(tempNode.data.data);
        console.log("Stack: " + stack.top.data, "Queue: " + tempNode.data.data);
        if (stack.top.data === tempNode.data.data) {
            q.enqueue(tempNode);
            stack.pop();
        } else {
            q.enqueue(tempNode);
            stack.pop();
            bool = false;
        }
    }
    return bool;
}

// q.back                            q.front
//  v                                         v
// (r) <- (a) <- (c) <- (e) <- (c) <- (a) <- (r)
//

// ========== BONUS ==========
/**
 * Compares 2 queues to see if they are equal.
 * Avoid indexing the queue items directly via bracket notation, use the
 * queue methods instead for practice.
 * Use no extra array or objects.
 * The queues should be returned to their original order when done.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Queue} q1 q2 The queues to be compared
 * @returns {boolean} Whether all the items of the two queues are equal and
 *    in the same order.
 */
function compareQueue(q1, q2) {
    //if the size of the 2 queues are different => return false
    if (q1.size !== q2.size) {
        return false;
    }
    //if the size of the 2 queues are the same
    //create a stack to store the items of the 2 queues
    const stack = new Stack();
    //create a variable to store the result
    let isSame = true;
    //loop thru the 2 queues
    while (!q1.isEmpty()) {
        //dequeue the 2 queues
        let dequeItem1 = q1.dequeue();
        let dequeItem2 = q2.dequeue();
        //if the 2 items are not the same => return false
        if (dequeItem1 !== dequeItem2) {
            isSame = false;
        }
        //push the 2 items to the stack
        stack.push(new Node(dequeItem1));
        stack.push(new Node(dequeItem2));
    }
    //loop thru the stack
    while (!stack.isEmpty()) {
        //pop the stack and enqueue the 2 items back to the 2 queues
        q1.enqueue(stack.pop2());
        q2.enqueue(stack.pop2());
    }
    //return the result
    return isSame;
}

var test1 = new Queue();
test1.enqueue("a");
test1.enqueue("b");
test1.enqueue("c");
test1.enqueue("d");
// test1.printQueue();


var test2 = new Queue();
test2.enqueue("a");
test2.enqueue("b");
test2.enqueue("c");
test2.enqueue("d");

var test3 = new Queue();
test3.enqueue("a");
test3.enqueue("b");
test3.enqueue("c");
test3.enqueue("b");
test3.enqueue("a");

var test4 = new Queue();
test4.enqueue("a");
test4.enqueue("b");
test4.enqueue("c");
test4.enqueue("d");
test4.enqueue("e");


// ======== BONUS =========
console.log(compareQueue(test1, test3), "|| expected: false"); // expected: false
console.log(compareQueue(test1, test2), "|| expected: true"); // expected: true
console.log("==== Bonus: Uneven but matches until the end of 1 queue ====");
console.log(compareQueue(test2, test4), "|| expected: false"); // expected: false
console.log(isPalindrome(test2), "|| expected: false"); // expected : false
console.log(isPalindrome(test3), "|| expected: true"); // expected : true