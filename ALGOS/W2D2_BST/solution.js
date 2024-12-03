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

    min(current = this.root) {
        if (this.isEmpty()) return null;

        while (current.left != null) {
            current = current.left;
        }
        return current.data;
    }

    minRecursive(current = this.root) {
        // If the root is null
        if (!this.root) return null;
        //check if the current has .left
        if (current.left === null) {
            //return current node
            return current.data;
        } else {
            //put current.left to the recursive call
            return this.minRecursive(current.left);
        }
    }

    max(current = this.root) {
        if (this.isEmpty()) return null;
        while (current.right != null) {
            current = current.right;
        }
        return current.data;
    }

    maxRecursive(current = this.root) {
        // If the root is null
        if (!this.root) return null;
        //check if the current has .left
        if (current.right === null) {
            //return current node
            return current.data;
        } else {
            //put current.left to the recursive call
            return this.minRecursive(current.right);
        }
    }


    // === NEW METHODS ===
    contains(searchVal) {
        let current = this.root;
        //loop the tree while current is not null
        while (current) {
            //if search value is greater than current
            if (searchVal > current.data) {
                //go right
                current = current.right;
                //if search value is less than current 
            } else if (searchVal < current.data) {
                //go left
                current = current.left;
            }
            else {
                //return bool if value is in tree
                return true;
            }
        }
        //return bool if value is not in tree
        return false;
    }

    contains2(searchVal) {
        if (!this.root) return false;
        let current = this.root;
        while (current) {
            if (current.data === searchVal) {
                return true;
            } else if (current.data < searchVal) {
                current = current.right;
            }
            else if (current.data > searchVal) {
                current = current.left;
            }
        }

        return false;
    }

    containsRecursive(searchVal, current = this.root) {
        // TODO
        if (!current) return false;
        if (current.data === searchVal) {
            return true;
        } else if (current.data < searchVal) {
            return this.containsRecursive(searchVal, current.right);
        } else {
            return this.containsRecursive(searchVal, current.left);
        }

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
                <-- 25 -->
              /            \
            15             50
          /    \         /    \
        10     22      35     70
      /   \   /  \    /  \   /  \
    4    12  18  24  31  44 66  90
*/
