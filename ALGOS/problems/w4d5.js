class ListNode{
  constructor(data){
    this.data = data;
    this.next = null;
  }  
}
class SLL {
  /**
   * Executed when the new keyword is used to construct a new Singly Linked List
   * instance that inherits these methods and properties.
   */
  constructor() {
    this.head = null;
  }
  // given
    insertAtBack(data){
    var newNode = new ListNode(data);
    if(this.head){
      var runner = this.head;
      while(runner.next){
        runner = runner.next;
      }
      runner.next = newNode;
    }else{
      this.head = newNode;
    }
      return this;
  }
  //given
  printList(){
    if(!this.head){
      console.log("Empty list");
      return
    }
    var runner = this.head;
    while(runner){
      console.log(runner.data);
      runner = runner.next;
    }
  }

  /**
   * Reverses this list in-place without using any extra lists.
   * - Time: (?).
   * - Space: (?).
   * @returns {SinglyLinkedList} This list.
   */
  reverse() {
  }

  /**
   * Removes all the nodes that have a negative integer as their data.
   * - Time: (?).
   * - Space: (?).
   * @returns {SinglyLinkedList} This list after the negatives are removed.
   Level 1: one negative number (not head or tail)
   level 2: negative at head, end
   level 3: multiple negative numbers (middle, head, end)
   */
  removeNegatives() {}



  /**
   * Determines whether the list has a loop in it which would result in
   * infinitely traversing unless otherwise avoided. A loop is when a node's
   * next points to a node that is behind it.
   * - Time: (?).
   * - Space: (?).
   * @returns {boolean} Whether the list has a loop or not.
   */
  hasLoop() {}


}
// -----------TEST CASE ---------------
var list1 = new SLL()
list1.insertAtBack(1);
list1.insertAtBack(-2);
list1.insertAtBack(3);
list1.printList();
list1.reverse()
list1.printList();

// Edge cases for removeNegative
// 1. if 2 negative numbers are next to each other
// 2. if the negative number is in the head
// 3. if the negative number is in the tail




// TEST CASE FOR A LOOPED LIST
// var loopedList = new SLL();
// var node1 = new Node(1)
// var node2 = new Node(2)
// var node3 = new Node(3)
// var node4 = new Node(4)
// var node5 = new Node(5)
// node1.next = node2;
// node2.next = node3;
// node3.next = node4;
// node4.next = node5;
// node5.next = node3; 
// loopList.head = node1;