/**
 * Class to represent a Node in a Binary Search Tree (BST).
 * The properties in the constructor are how this node is 
 * connected to other nodes to form the tree. 
 * Similar to .next in a SinglyLinkedList except a BST node can
 * be connected to two other nodes. To start, new nodes are not
 * connected to any other nodes, these properties will be set 
 * after the new node is instantiated.
 http://btv.melezinek.cz/binary-search-tree.html
 */
class BSTNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

/**
 * Represents an ordered tree of nodes where
 * the data of left nodes are <= to their parent and
 * the data of nodes to the right are > their parent's data.
 */
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  /**
   * Determines if this tree is empty.
   * @returns {boolean} Indicates if this tree is empty.
   */
  isEmpty() {
    if (this.root == null) return true;
    return false;
  }

  /**
   * Retrieves the smallest integer data from this tree.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Node} current is default as root of the tree
   *    the tree is being traversed.
   * @returns {number} The smallest integer from this tree.
   */
  min(current = this.root) {
    if(this.isEmpty()) return null; 

    while(current.left != null){
      current = current.left;
    }
      return current.data;
  }

  /**
   * Retrieves the smallest integer data from this tree.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Node} current is default as root of the tree
   *    the tree is being traversed.
   * @returns {number} The smallest integer from this tree.
   */

  minRecursive(current = this.root) {
    // If the root is null
    if(!this.root) return null;
    //check if the current has .left
    if (current.left === null) {
      //return current node
      return current.data;
    } else {
      //put current.left to the recursive call
      return this.minRecursive(current.left);
    }
  }

  /**
   * Retrieves the largest integer data from this tree.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Node} current is default as root of the tree
   * @returns {number} The largest integer from this tree.
   */
  max(current = this.root) {
    if(this.isEmpty()) return null; 
    while(current.right != null){
      current = current.right;
    }
      return current.data;
  }

  /**
   * Retrieves the largest integer data from this tree.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Node} current is default as root of the tree
   *    the tree is being traversed.
   * @returns {number} The largest integer from this tree.
   */
  maxRecursive(current = this.root) {
    // If the root is null
    if(!this.root) return null;
    //check if the current has .left
    if (current.right === null) {
      //return current node
      return current.data;
    } else {
      //put current.left to the recursive call
      return this.minRecursive(current.right);
    }
  }

  /**
   * Determines if this tree contains the given searchVal.
   * - Time: O(?).
   * - Space: O(?).
   * @param {number} searchVal : The number to search for
   * @returns {boolean} : Indicates if the searchVal was found.
   */ 
  contains(searchVal) {
  let current = this.root;
  //loop the tree while current is not null
    while(current){
      //if search value is greater than current
      if(searchVal > current.data){
        //go right
        current = current.right;
        //if search value is less than current 
      }else if(searchVal < current.data){
        //go left
        current = current.left;
      }
      else{
        //return bool if value is in tree
        return true;
      }
    }
    //return bool if value is not in tree
      return false;
  }

  /**
   * Determines if this tree contains the given searchVal.
   * - Time: O(?).
   * - Space: O(?).
   * @param {number} searchVal: The number to search for in the node's data.
   * @returns {boolean} : Indicates if the searchVal was found.
   */
    containsRecursive(searchVal, current = this.root) {
      if(!current) return false;

      if( searchVal === current.data) return true; // numA == numB

      if(searchVal < current.data){ // numA < numB
        return this.containsRecursive(searchVal, current.left)
      }else{ // numA > numB
        return this.containsRecursive(searchVal, current.right)
      }
    }

  /**
   * Inserts a new node with the given newVal in the right place to preserver
   * the order of this tree.
   * - Time: O(?).
   * - Space: O(?).
   * @param {number} newVal The data to be added to a new node.
   * @returns {BinarySearchTree} This tree.
   */
  insert(newVal) {
    if (this.root == null) {
      this.root = new BSTNode(newVal);
      return newVal;
    }
    //assign newVal to this.root
    // newVal = this.root;
    // console.log("newVal: ", newVal); //newVal is null
    let current = this.root;
    //compare the newVal with current
    while(current){
      // if the newVal is larger,
      if (newVal > current.data) {
        // & if the right is not available, then insert
        if(current.right == null){
          current.right = new BSTNode(newVal);
          return this;
        }else{ // newVal is larger & .right is available, move the pointer
          current = current.right;
        }
        //make the current points to right
      } else {
        if(current.left == null){
          current.left = new BSTNode(newVal);
          return this; // return the tree to chain the method
        }else{
          current = current.left;
        }
      }
    }
  }


  insertRecursive(newVal, curr = this.root) {
    if (curr === null) {
      this.root = new BSTNode(newVal);
      return this;
    }
    if (newVal < curr.data) {
      if (curr.left === null) {
        curr.left = new BSTNode(newVal);
        return this
      }
      return this.insertRecursive(newVal, curr.left);

    } else {
      if (curr.right === null) {
        curr.right = new BSTNode(newVal);
        return this
      }
      return this.insertRecursive(newVal, curr.right);
    }
  }



  /**
  * Depth first search
   * DFS Preorder: (CurrNode, Left, Right) 
   * Usage: create a copy of the tree,  
   * Converts this BST into an array following DFS preorder.
   * Example on the fullTree var:
   * [25, 15, 10, 4, 12, 22, 18, 24, 50, 35, 31, 44, 70, 66, 90]
   * @param {Node} node The current node during the traversal 
   * @param {Array<number>} vals The data that has been visited so far.
   * @returns {Array<number>} The vals in DFS Preorder once all nodes visited.
   */
  toArrPreorder(curr = this.root, vals = []) {
    if(!curr) return vals;

    this.toArrPreorder(curr.left, vals);
    vals.push(node.data)
    this.toArrPreorder(curr.right, vals);
  }

  /**
   * DFS Inorder: (Left, CurrNode, Right)
   * Usage: get the numbers in order
   * Converts this BST into an array following DFS inorder.
   * Example on the fullTree var:
   * [4, 10, 12, 15, 18, 22, 24, 25, 31, 35, 44, 50, 66, 70, 90]
   * @param {Node} node The current node during the traversal 
   * @param {Array<number>} vals The data that has been visited so far.
   * @returns {Array<number>} The vals in DFS Preorder once all nodes visited.
   */
  toArrInorder(node = this.root, vals = []) {
    if (!node) return vals;
    // Goes through the left subtree
    this.toArrInorder(node.left, vals);
    // Adds to to vals
    vals.push(node.data);
    // Goes through the right subtree
    this.toArrInorder(node.right, vals);
    return vals;
  }

  /**
   * DFS Postorder (Left, Right, CurrNode)
   * Usage: delete the tree
   * Converts this BST into an array following DFS postorder.
   * Example on the fullTree var:
   * [4, 12, 10, 18, 24, 22, 15, 31, 44, 35, 66, 90, 70, 50, 25]
   * @param {Node} node The current node during the traversal 
   * @param {Array<number>} vals The data that has been visited so far.
   * @returns {Array<number>} The vals in DFS Preorder once all nodes visited.
   */
  toArrPostorder(node = this.root, vals = []) {
    if (!node) return vals
    this.toArrPostorder(node.left, vals);
    this.toArrPostorder(node.right, vals);
    vals.push(node.data);
    return vals;
  }


  /*********************** BONUS**************************
   * BFS order: horizontal rows top-down left-to-right.
   * Converts this BST into an array following Breadth First Search order.
   * Example on the fullTree var:
   * [25, 15, 50, 10, 22, 35, 70, 4, 12, 18, 24, 31, 44, 66, 90]
   * @param {Node} current The current node during the traversal of this tree.
   * @returns {Array<number>} The data of all nodes in BFS order.
   */
  toArrLevelorder(current = this.root) {
    //create a new Queue
    const BFSQueue = new Queue();
    const arr = [];

    BFSQueue.enqueue(current);
    //while the BFSQueue is not empty
    while (!BFSQueue.isEmpty()) {
      // console.log(BFSQueue);
      //dequue the current and then enqueus the root to BFSQueue
      // the dequeuedNode: data (push to the arr), left, right
      const dqNode = BFSQueue.dequeue();
      arr.push(dqNode.data)
      if(dqNode.left) BFSQueue.enqueue(dqNode.left)
      if(dqNode.right) BFSQueue.enqueue(dqNode.right)

    }
    return arr;
  }

  /**
   * Recursively counts the total number of nodes in this tree.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Node} node The current node during the traversal of this tree.
   * @returns {number} The total number of nodes.
   */
  size(node = this.root) {
    //check if node exist
    if (!node) return 0;
    // node.left childern size + node.right size
    return 1 + this.size(node.left) + this.size(node.right);
  }

  size2(node = this.root, count = 0) {
    if (!node) {
      return count;
    }
    if (node) {
      count = this.size2(node.left, count);
      count = this.size2(node.right, count);
      count++
    }
    return count;
  }

  /**
   * Calculates the height of the tree which is based on how many nodes from
   * top to bottom (whichever side is taller).
   * - Time: O(?).
   * - Space: O(?).
   * @param {Node} node The current node during traversal of this tree.
   * @returns {number} The height of the tree.
   */
  height(node = this.root) {
    // A node that is null has a height -1 so that the root node has a 0 height
    if (!node) return -1;
    // return the sum of Math.max from node.left and node.right
    return 1 + Math.max(this.height(node.left), this.height(node.right));
  }

  height2(node = this.root) {
    if (!node) {
      return 0;
    } else {
      var leftHeight = this.height2(node.left)
      var rightHeight = this.height2(node.right)
      var level = Math.max(leftHeight, rightHeight) + 1;
    }
    return level;
  }

  /**
   * Determines if this tree is a full tree. A full tree is a tree where every
   * node has both a left and a right except for the leaf nodes (last nodes)
   * - Time: O(?).
   * - Space: O(?).
   * @param {Node} node The current node during traversal of this tree.
   * @returns {boolean} Indicates if this tree is full.
   */
  isFull(node = this.root) {
    // zero children / 2 children
    // an empty tree is considered full
    if (!node) {
      return true;
    }
    // if the node does not have both left and right => full
    if (!node.left && !node.right) {
      return true;
    }
    // checks if node.left and node.right exist
    if (node.left && node.right) {
      //if the children exitst => recursively find the node.left and node.right
      return this.isFull(node.left) && this.isFull(node.right);
    }
    // if all are false return false
    return false;
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
        `${node.data}`,
    );

    this.print(node.left, spaceCnt);
  }
}

const emptyTree = new BinarySearchTree();
const oneNodeTree = new BinarySearchTree();
oneNodeTree.root = new BSTNode(10);
// oneNodeTree.print()

/* twoLevelTree
        root
        10
      /   \
    5     15
*/
const twoLevelTree = new BinarySearchTree();
twoLevelTree.root = new BSTNode(10);
twoLevelTree.root.left = new BSTNode(5);
twoLevelTree.root.right = new BSTNode(15);
// twoLevelTree.print()

/* threeLevelTree 
        root
        10
      /   \
    5     15
  / \    / \
2   4  13  20
*/
const threeLevelTree = new BinarySearchTree();
threeLevelTree.root = new BSTNode(10);
threeLevelTree.root.left = new BSTNode(5);
threeLevelTree.root.left.left = new BSTNode(2);
threeLevelTree.root.left.right = new BSTNode(4);
threeLevelTree.root.right = new BSTNode(15);
threeLevelTree.root.right.right = new BSTNode(20);
threeLevelTree.root.right.left = new BSTNode(13);
threeLevelTree.print();
console.log(threeLevelTree.isEmpty());
console.log(threeLevelTree.min());

console.log(threeLevelTree.containsRecursive(40))
// threeLevelTree.isEmpty() to call that method
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
