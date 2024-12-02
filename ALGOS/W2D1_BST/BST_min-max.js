// https://www.cs.usfca.edu/~galles/visualization/BST.html
// https://visualgo.net/en/bst
class BSTNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

/**
   * Represents an ordered tree of nodes where the data of left nodes are <= to
   * their parent and the data of nodes to the right are => their parent's data.
   */
class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    // Determines if this tree is empty.
    isEmpty() {
        // TODO
    }

    // Retrieves the smallest integer data from this tree
    min() {
        // TODO
    }

    minRecursive(current = this.root) {
        // if (current === undefined) {
        //     current = this.root
        // }

        // BREAK POINT????

        // TODO
        return this.minRecursive(current.left);

    }

    // Retrieves the largest integer data from this tree.
    max() {
        // TODO
    }

    // Retrieves the largest integer data from this tree.
    maxRecursive(current = this.root) {
        // TODO
    }

    //* HELPER METHOD
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
}

// const emptyTree = new BinarySearchTree();
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
                <-- 25 -->
              /            \
            15             50
          /    \         /    \
        10     22      35     70
      /   \   /  \    /  \   /  \
    4    12  18  24  31  44 66  90
*/
