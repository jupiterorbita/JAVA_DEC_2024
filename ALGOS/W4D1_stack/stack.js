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
    }

    isEmpty() {
        //check if the stack is empty
        //return a boolean
    }

    /**
   * Adds a new given item to the top of this stack.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @param {any} item The new item to be added to the top.
   */
    push(data) {

    }


    /**
     * Removes the top / last item from this stack.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The removed data or undefined if this stack was empty.
     */
    pop() {
    }

    /**
   * Retrieves the top / last item from this stack without removing it.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {any} The data of top / last item of this stack.
   */
    peek() {
    }


    /**
     * Returns the size of this stack.
     * @returns {number} The length.
     * without .next (push, pop, peek, isEmpty)
     */
    size() {


    }

    //! ONLY FOR TESTING - DO NOT IMPLEMENT
    printStack() {
        console.log("\nTOP\n |\n V");
        let runner = this.top;
        while (runner) {
            console.log("| " + runner.data + " |");
            runner = runner.next;
        }
        console.log("──────\nNULL\n");

    }
}

var pringlesTube = new Stack();
console.log(pringlesTube); // Stack { top: null }
// pringlesTube.push(new Node(11));
// pringlesTube.push(new Node(22));
// pringlesTube.push(new Node(33));
// pringlesTube.push(new Node(44));
console.log(pringlesTube); // Stack { top: Node {data: 11, next: null} }
pringlesTube.printStack();