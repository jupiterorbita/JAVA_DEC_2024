class BSTNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

/**
   * Represents an ordered tree of nodes where the data of left nodes are <= to
   * their parent and the data of nodes to the right are > their parent's data.
   */
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    if (this.root == null) return true;
    return false;
  }

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

  // === NEW METHODS ===
  insert(newVal) {
    // TODO
  }

  /* recursive insert
                   the new Node(val) we want to insert
                     |
                     |     pass a changed current as we call the function again
                     |       |
                     v       v                       */
  insertRecursive(newVal, runner = this.root) {
    // TODO

  }
}


const emptyTree = new BinarySearchTree();
const oneNodeTree = new BinarySearchTree();
oneNodeTree.root = new BSTNode(10);

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
// twoLevelTree.print();
// console.log(twoLevelTree);

/* threeLevelTree
        root
        10
      /   \
    5     15
  / \    / \
2   6  13
*/
const threeLevelTree = new BinarySearchTree();
threeLevelTree.root = new BSTNode(10);
threeLevelTree.root.left = new BSTNode(5);
threeLevelTree.root.left.left = new BSTNode(2);
threeLevelTree.root.left.right = new BSTNode(6);
threeLevelTree.root.right = new BSTNode(15);
threeLevelTree.root.right.left = new BSTNode(13);
threeLevelTree.print();
// console.log(threeLevelTree);

/* fullTree
                   root
                    |
                <-- 25 -->
              /            \
            15             50
          /    \         /    \
        10     22      35     70
       /  \   /  \    /  \   /  \
      4   12  18  24  31  44 66  90
*/
const fullTree = new BinarySearchTree();
fullTree.insert(25);
fullTree.insertRecursive(15);
// ... test more cases