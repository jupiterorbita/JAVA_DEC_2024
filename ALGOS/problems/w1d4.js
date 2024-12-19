// class Node 
class ListNode{
  constructor(data){
    this.data = data;
    this.next = null;
  }  
}

// class SLL - Singly Linked List
class SLL{
  constructor(){
    this.head = null;
  }

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
   * Determines whether or not the given search value exists in this list.
   * @param {any} val The data to search for in the nodes of this list.
   * @returns {boolean}
   */
    contains(data){}

  /**
   * Removes the last node of this list.
   * @returns {any} The data from the node that was removed.
   * Base case: a list with more than 2 nodes
   * Edge case: a list with only 2 nodes
   * Edge case: a list with only 1 node
   * Edge case: a list that is empty
   */
    removeBack(){}

  /**
   * Determines whether or not the given search value exists in this list.
   * - Time: O(?).
   * - Space: O(?).
   * @param {any} val The data to search for in the nodes of this list.
   * @param {?ListNode} current The current node during the traversal of this list
   *    or null when the end of the list has been reached.
   * @returns {boolean}
   */
  containsRecursive(val, current = this.head) {}

  // EXTRA
  /**
   * Recursively finds the maximum integer data of the nodes in this list.
   * - Time: O(?).
   * - Space: O(?).
   * @param {ListNode} runner The start or current node during traversal, or null
   *    when the end of the list is reached.
   * @param {ListNode} maxNode Keeps track of the node that contains the current
   *    max integer as it's data.
   * @returns {?number} The max int or null if none.
   */
  recursiveMax(runner = this.head, maxNode = this.head) {}
}


var list1 = new SLL();

var list2 = new SLL();
list2.insertAtBack(5);
list2.insertAtBack(6);
list2.insertAtBack(7);
list2.insertAtBack(8);
//       HEAD
// list2: (5) --> (6) --> (7) --> (8) -->null
//       HEAD
// list2: (5) --> (6) --> (7) --> null                      


list1.printList();
list2.printList();

