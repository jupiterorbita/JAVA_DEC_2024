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
    const node = new BSTNode(newVal);

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

  insertRecursive(node, current) {
    // default current to root if no current exists
    if (current === undefined) {
      current = this.root;
    };

    // if empty tree, new node becomes root
    if (current === null) {
      this.root = node;
      return this;
    };

    if (current.val > node.val) { // go left
      // check if null and insert
      if (current.left === null) { // <-- base case for inserting left
        current.left = node;
        return this;
      } else {
        // otherwise recurse left
        return this.insert(node, current.left); // <-- move current to current.left
      }
    } else if (current.val < node.val) { // go right
      // check if null and insert
      if (current.right === null) { // <-- base case for inserting left
        current.right = node;
        return this;
      } else {
        // otherwise recurse right
        return this.insert(node, current.right);
      }
    }
  };





  /* 
                  root
              <-- 25 -->
            /            \
          15             50
        /    \         /    \
      10     22      35     70
    /   \   /  \    /  \   /  \
   4   12  18      31  44 66  90

*/











  // PreOrder (DFS - Depth First Search)
  // (Root / Parent, Left, Right)
  // 25, 15, 10, 4, 12, 22, 18, 50, 35, 31, 44, 70, 66, 90
  // optimal order for rebuilding a BST
  printPreOrder(current) {
    if (current === undefined) {
      current = this.root;
    }

    if (current) {
      console.log(current.data);

      this.printPreOrder(current.left);

      this.printPreOrder(current.right);

    }

  }

  // InOrder (DFS)
  // (Left, Root / Parent, Right)
  // [4, 10, 12, 15, 18, 22, 25, 31, 35, 44, 50, 66, 70, 90]
  // Sorted data!
  printInOrder(current = this.root, arr = []) {
    // TODO
  }

  // PostOrder (DFS)
  // (Left, Right, Root / Parent)
  // 4, 12, 10, 18, 22, 15, 31, 44, 35, 66, 90, 70, 50, 25
  // for deleting
  printPostOrder(current, arr = []) {
    // TODO
  }

}


const fullTree = new BinarySearchTree();
fullTree
  .insert(25)
  .insert(15)
  .insert(10)
  .insert(4)
  .insert(12)
  .insert(22)
  .insert(18)
  .insert(50)
  .insert(35)
  // .insert(24) // add if you want a full tree
  .insert(31)
  .insert(44)
  .insert(70)
  .insert(66)
  .insert(90);

fullTree.print();
// ------ traversal --------
console.log(fullTree.printPreOrder());
// console.log(fullTree.printInOrder());
// console.log(fullTree.printPostOrder());