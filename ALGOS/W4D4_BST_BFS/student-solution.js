// https://leetcode.com/problems/average-of-levels-in-binary-tree/description/

// https://leetcode.com/problems/find-if-path-exists-in-graph/description/

/**
 * Class to represent a queue using a SLL to store the queued items.
 * Follows a FIFO (First In First Out) order where new items are added to the
 * back and items are removed from the front.
 */
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
        const newNode = new qNode(data);
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
        return;
    }

    /**
     * Removes and returns the first item of this queue.
     * - Time: O(n) linear, due to having to shift all the remaining items to
     *    the left after removing first elem.
     * - Space: O(1) constant.
     * @returns {any} The data of the first item or undefined if empty.
     */
    dequeue() {
        if (this.front === null) {
            return null; // if empty return nothing
        };
        if (this.front === this.rear) {
            this.rear = null;
        };
        let node = this.front;
        this.front = node.next;
        node.next = null;
        return node;
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
reference:
http://btv.melezinek.cz/binary-search-tree.html
 * Class to represent a Node in a Binary Search Tree (BST).
 * The properties in the constructor are how this node is
 * connected to other nodes to form the tree.
 * Similar to .next in a SinglyLinkedList except a BST node can
 * be connected to two other nodes. To start, new nodes are not
 * connected to any other nodes, these properties will be set
 * after the new node is instantiated.
 */
class Node { // TreeNode , node
    constructor(data) {
        this.data = data;
        this.left = null; // a Node with a smaller value
        this.right = null;
    }
}

// Queue Node Class
class qNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

/**
 * Represents an ordered tree of nodes where
 * the data of left nodes are <= to their parent and
 * the data of right nodes are > their parent's data.
 */
class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    /*********************** BONUS**************************
     * BFS order: horizontal rows top-down left-to-right.
     * Converts this BST into an array following Breadth First Search order.
     * Example on the fullTree var:
     * [25, 15, 50, 10, 22, 35, 70, 4, 12, 18, 24, 31, 44, 66, 90]
     * @param {Node} current The current node during the traversal of this tree.
     * @returns {Array<number>} The data of all nodes in BFS order.
     */
    toArrLevelorder(runner = this.root) {

        let arr = [];

        let queue = new Queue();

        queue.enqueue(runner);

        console.log(queue);

        while (!queue.isEmpty()) {
            const returnedNode = queue.dequeue();
            console.log(returnedNode);

            arr.push(returnedNode.data.data);

            if (returnedNode.data.left) {
                queue.enqueue(returnedNode.data.left);
            }

            if (returnedNode.data.right) {
                queue.enqueue(returnedNode.data.right);
            }
        }

        console.log(arr);
        return arr;
    }


    // HELPER METHOD
    // Logs this tree horizontally with the root on the left.
    print(node = this.root, spaceCnt = 0, spaceIncr = 10) {
        if (!node) {
            return;
        }

        spaceCnt += spaceIncr;
        this.print(node.right, spaceCnt);

        console.log(
            " ".repeat(spaceCnt < spaceIncr ? 0 : spaceCnt - spaceIncr) +
            `${node.data}`
        );

        this.print(node.left, spaceCnt);
    }

    insert(newVal) {
        const node = new Node(newVal);

        if (!this.root) {
            this.root = node;
            return this;
        }

        let current = this.root;

        while (true) {
            if (newVal <= current.data) {
                if (current.left === null) {
                    current.left = node;
                    return this;
                }

                current = current.left;
            } else {
                // newVal is greater than current.data
                if (current.right === null) {
                    current.right = node;
                    return this;
                }

                current = current.right;
            }
        }
    }



}

const emptyTree = new BinarySearchTree();
const oneNodeTree = new BinarySearchTree();
oneNodeTree.root = new Node(10);
// oneNodeTree.print()

/* twoLevelTree
        root
        10
      /   \
    5     15
*/
const twoLevelTree = new BinarySearchTree();
twoLevelTree.root = new Node(10);
twoLevelTree.root.left = new Node(5);
twoLevelTree.root.right = new Node(15);
// twoLevelTree.print()

/* threeLevelTree
        root
        10
      /   \
    5     15
  / \    / \
2   8  13  20
*/
const threeLevelTree = new BinarySearchTree();
threeLevelTree
    .insert(10)
    .insert(5)
    .insert(2)
    .insert(8)
    .insert(15)
    .insert(20)
    .insert(13);

threeLevelTree.print();
threeLevelTree.toArrLevelorder();

/* fullTree
                    root
                <-- 25 -->
              /            \
            15             50
          /    \         /    \
        10     22      35     70
      /   \   /  \    /  \   /  \
    4    12  18  24  31  44 66  90
*/


const fullTree = new BinarySearchTree();
fullTree
    .insert(25)
    .insert(15)
    .insert(10)
    .insert(22)
    .insert(4)
    .insert(12)
    .insert(18)
    .insert(24)
    .insert(50)
    .insert(35)
    .insert(70)
    .insert(31)
    .insert(44)
    .insert(66)
    .insert(90);