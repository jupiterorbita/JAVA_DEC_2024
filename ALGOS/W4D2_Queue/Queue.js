
// Queue
// FIFO (First in, first out)

// - enqueue
// - dequeue
// - peek
// - isEmpty
// - count

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

/**
 * Class to represent a queue using a SLL to store the queued items.
 * Follows a FIFO (First In First Out) order where new items are added to the
 * back and items are removed from the front.
 */
class Queue {
    constructor() {
        this.front = null; // sometimes called head "front of the line"
        this.back = null; // sometimes called rear or tail "back of the line"
    }

    // return true / false if queue is empty
    isEmpty() {
        return this.front === null;
    }

    // check the (data) front of the queue
    getFront() { }

    // add nodes to the back of the queue
    enqueue(node) { }


    // remove and return the front node
    dequeue() { }


    // === BONUS ===
    /**
     * Check if the target value exists in the queue using the basic queue operations
     * Using only basic class operations (.enqueue(val), .dequeue(), isEmpty(), getFront() )
     * Check if the queue is still the same
     * @returns {Boolean }
     */
    contains(targetVal) {

    }

    // === HELPER METHOD - DO NOT IMPLEMENT ===
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

    // return length
    // count() { }
}

// TODO
// 1. instantiate a new Queue
// 2. test methods

