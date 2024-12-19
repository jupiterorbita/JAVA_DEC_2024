/**
 * A class to represents a single item of a SinglyLinkedList that can be
 * linked to other Node instances to form a list of linked nodes.
 * https://kalkicode.com/data-structure/single-linked-list-visualization
 */
class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

/**
 * SLL(Singly Linked List)
 * keeps track of the start (head) of the list and to store all the
 * functionality (methods) that each list should have.
 */
class SLL {
  constructor() {
    this.head = null;
  }

  /**
   * Determines if this list is empty.
   * @returns {boolean}
   */
  isEmpty() { }

  /**
   * Creates a new node with the given data and inserts it at the back of
   * this list.
   * @param {any} data The data to be added to the new node.
   * @returns {SinglyLinkedList} This list.
   */
  insertAtBack(data) {
    // HINT: How to find the last node of a Singly Linked List?
    // level 1: insert a new node into list1
    // level 2: insert a new node into emptyList
  }

  /** BONUS:
   * Calls insertAtBack on each item of the given array.
   * - Time: O(n * m) n = list length, m = arr.length.
   * - Space: O(1) constant.
   * @param {Array<any>} vals The data for each new node.
   * @returns {SinglyLinkedList} This list.
   */
  insertAtBackMany(vals) { }

  //given
  printList() {
    // if the list is empty?
    if (this.head === null) {
      console.log("This is an empty list");
      return;
    }
    console.log("HEAD: " + this.head.data);
    // how to traverse through different nodes?
    // 1. Create a temp variable to store curr ListNode
    let current = this.head;
    // 2. write a condition as long as current is not null
    while (current) {
      // as long as current is available (not null)
      // 3. print the current data
      console.log(current.data);
      // 4. (increment) move the current to the next node
      current = current.next;
    }
  }
}

const node1 = new ListNode(3);
const node2 = new ListNode(7);
const node3 = new ListNode(9);

node1.next = node2;
node2.next = node3;

const emptyList = new SLL();

const list1 = new SLL();
list1.head = node1;
// head
// (3) --> (7) --> (9) --> null

emptyList.printList();

list1.printList();

list1.insertAtBack(10);
list1.printList(); // 3, 7, 9, 10
