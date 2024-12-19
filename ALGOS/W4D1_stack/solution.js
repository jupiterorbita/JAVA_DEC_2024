/* Stacks
    A stack is a LIFO data structure
    LAST IN, FIRST OUT
    LIFO / FILO
    push - add to top
    pop - remove from top
    peek - check the top
    isEmpty - check if the stack is empty, true/false
    length - return size of stack
*/

//ref:
//https://isaaccomputerscience.org/concepts/dsa_datastruct_stack?examBoard=all&stage=all

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

var pringlesTube = new Stack();
console.log(pringlesTube); // Stack { top: null }
pringlesTube.push(new Node(11));
console.log(pringlesTube); // Stack { top: Node {data: 11, next: null} }