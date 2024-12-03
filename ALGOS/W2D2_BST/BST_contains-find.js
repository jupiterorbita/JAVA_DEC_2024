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
        // TODO
    }

    containsRecursive(searchVal, current = this.root) {
        // TODO
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
