/* 
TODO: Create the DLLNode class and implement the DoublyLinkedList constructor
and the empty methods below the constructor.
*/

/**
 * A class to represent a doubly linked list and contain all of it's methods.
 * A doubly linked list is a singly linked list that can be traversed in both
 * directions.
 */
// Remember that DoublyLinkedList and Node are two different classes.
// Check any of the week 1 algorithm for more hints

class DLLNode {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  /**
   * Executed when the new keyword is used to construct a new DoublyLInkedList
   * instance that inherits these methods and properties.
   */
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // TODO: implement the constructor.

  /**
   * Creates a new node and adds it at the front of this list.
   * - Time: O(?).
   * - Space: O(?).
   * @param {any} data The data for the new node.
   * @returns {DoublyLinkedList} This list.
   */
  insertAtFront(data) {
    const newNode = new DLLNode(data);
    if (this.isEmpty()) {
      // Edge case: if it is an empty List
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    return this;
  }

  /**
   * Creates a new node and adds it at the back of this list.
   * - Time: O(?).
   * - Space: O(?).
   * @param {any} data The data for the new node.
   * @returns {DoublyLinkedList} This list.
   */
  // The logic for insertAtFront looks good
  // And have some annotation and see how all the pointers move
  insertAtBack(data) {
    const newNode = new DLLNode(data);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    return this;
  }

  // EXTRA
  /**
   * Removes the middle node in this list.
   * - Time: O(?).
   * - Space: O(?).
   * @returns {any} The data of the removed node.
   */
  removeMiddleNode() {
    if (this.isEmpty()) return null;
    let slow = this.head;
    let fast = this.head;

    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
    }

    const data = slow.data;
    if (slow.prev !== null) slow.prev.next = slow.next;
    if (slow.next !== null) slow.next.prev = slow.prev;

    return data;
  }

  removeMiddleNode2() {
    if (this.isEmpty()) return null;
    let forwardRunner = this.head;
    let backwardRunner = this.tail;
    // edge case for 1 node & 2 nodes
    while (
      forwardRunner !== backwardRunner ||
      forwardRunner.next !== backwardRunner
    ) {
      forwardRunner = forwardRunner.next;
      backwardRunner = backwardRunner.prev;
    }

    const data = forwardRunner.data;
    if (forwardRunner.prev !== null)
      forwardRunner.prev.next = forwardRunner.next;
    if (forwardRunner.next !== null)
      forwardRunner.next.prev = forwardRunner.prev;

    return data;
  }

  // Base case, insert only once
  // Edge Case 1: insertAfter Head?
  // Edge Case 2: insertAfter Tail?
  // What if we want to insert more than once?
  /**
   * Inserts a new node with the given newVal after the node that has the
   * given targetVal as it's data.
   * - Time: O(?).
   * - Space: O(?).
   * @param {any} targetVal The node data to find.
   * @param {any} newVal Data for the new node.
   * @returns {boolean} Indicates if the new node was added.
   */
  // 1. Create the new node
  // 2. search for the targetVal by loop through the list (while loop)
  // 3. when the targetVal is found, move around the pointers

  insertAfter(targetVal, newVal) {
    //create a new node
    const newNode = new DLLNode(newVal);
    //newNode with the newVal
    // check if the list is empty
    if (this.isEmpty()) {
      //the list is empty => return false
      return false;
    }
    //the list is not empty
    let current = this.head;
    while (current !== null && current.data !== targetVal) {
      // 1. find the target value if it exist => adjust the pointer
      current = current.next;
      console.log("current: ", current.data);
    }

    // if the target value was not found
    if (current === null) {
      return false;
    }
    // current.data === targetVal
    // four pointer need to be chaged
    //1. change the newNode.next = current.next
    newNode.next = current.next;
    newNode.prev = current;
    current.next = newNode;

    if (this.tail.data === targetVal) {
      // if targetVal is at the tail
      this.tail = newNode;
      return true;
    }

    current.next.prev = newNode; // the new nodes pointer 8 -> 7
    return true;
  }

  insertAfter2(targetVal, newVal) {
    // Edge case: if it is an empty list
    if (this.isEmpty()) return false;
    const newNode = new DLLNode(newVal);

    // if targetVal appears in tail (handles both 1 node & 2 nodes)
    if (this.tail.data === targetVal) {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
      return true
    }

    // Base case, starting currentPointer to a node before tail
    let currentPointer = this.tail.prev;
    let currentPointerNext = this.tail;
    while (currentPointer) {
      if (currentPointer.data === targetVal) {
        currentPointer.next = newNode;
        currentPointerNext.prev = newNode;
        newNode.prev = currentPointer;
        newNode.next = currentPointerNext;
        return true;
      }
      currentPointerNext = currentPointer;
      currentPointer = currentPointer.prev;
    }
    return false;
  }

  /**
   * Inserts a new node with the given newVal before the node that has the
   * given targetVal as it's data.
   * - Time: O(?).
   * - Space: O(?).
   * @param {any} targetVal The node data to find.
   * @param {any} newVal Data for the new node.
   * @returns {boolean} Indicates if the new node was added.
   */
  insertBefore(targetVal, newVal) {
    const targetNode = this.findNodeWith(targetVal);
    if (!targetNode) {
      return false;
    }
    const newNode = new ListNode(newVal);
    newNode.next = targetNode;
    newNode.prev = targetNode.prev;
    targetNode.prev = newNode;
    if (newNode.prev) {
      newNode.prev.next = newNode;
    }
    else {
      this.head = newNode;
      this.head.next = newNode;
    }
    return true;
  }


  /**
   * Finds the given node in this list and removes it.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @param {DLLNode} node A node in this list.
   * @returns {DoublyLinkedList} This list.
   */
  removeNode(node) {
    if (this.isEmpty() || !node) {
      return this;
    }

    if (node === this.head) {
      this.head = this.head.next;

      // head and tail were same
      if (this.head === null) {
        this.tail = null;
      }
    } else if (node === this.tail) {
      this.tail = this.tail.prev;
      this.tail.next = null;
    } else {
      node.prev.next = node.next;
    }

    /**
     * A node can be removed from a list by being skipped over but the node can
     * still have pointers to other nodes in the list, so we make sure they are
     * cleared.
     */
    node.prev = null;
    node.next = null;
    return this;
  }
  
  /**
   * Determines if this list is empty.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {boolean} Indicates if this list is empty.
   */
  isEmpty() {
    return this.head === null;
  }

  /**
   * Converts this list to an array of the node's data.
   * - Time: O(n) linear, n = list length.
   * - Space: O(n) linear, array grows as list length increases.
   * @returns {Array<any>} All the data of the nodes.
   */
  toArray() {
    const vals = [];
    let runner = this.head;

    while (runner) {
      vals.push(runner.data);
      console.log(runner.data)
      runner = runner.next;
    }
    return vals;
  }

  /**
   * Adds all the given items to the back of this list.
   * @param {Array<any>} items Items to be added to the back of this list.
   * @returns {DoublyLinkedList} This list.
   */
  insertAtBackMany(items = []) {
    items.forEach((item) => this.insertAtBack(item));
    return this;
  }
}

const emptyList = new DoublyLinkedList();
const list1 = new DoublyLinkedList();
list1.insertAtBackMany([5, 8, 13, 14]);
console.log(list1.toArray());

list1.insertAfter2(8, 100);
list1.insertAfter2(14, 200);
console.log(list1.head.data)
console.log(list1.tail.data)
console.log(list1.toArray());
