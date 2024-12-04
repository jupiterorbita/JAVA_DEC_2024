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

    // === NEW METHODS ===
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
        while (current) {
            // if the newVal is larger,
            if (newVal > current.data) {
                // & if the right is not available, then insert
                if (current.right == null) {
                    current.right = new BSTNode(newVal);
                    return this;
                } else { // newVal is larger & .right is available, move the pointer
                    current = current.right;
                }
                //make the current points to right
            } else {
                if (current.left == null) {
                    current.left = new BSTNode(newVal);
                    return this; // return the tree to chain the method
                } else {
                    current = current.left;
                }
            }
        }
    }

    insert(newVal) {
        if (!this.root) {
            this.root = new BSTNode(newVal);
            return;
        }

        let runner = this.root;
        let newNode = new BSTNode(newVal);

        while (runner) {
            if (newVal > runner.data) {
                if (!runner.right) {
                    runner.right = newNode;
                    return;
                } else {
                    runner = runner.right;
                }
            } else {
                if (!runner.left) {
                    runner.left = newNode;
                    return;
                } else {
                    runner = runner.left;
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
                return this;
            }
            return this.insertRecursive(newVal, curr.left);

        } else {
            if (curr.right === null) {
                curr.right = new BSTNode(newVal);
                return this;
            }
            return this.insertRecursive(newVal, curr.right);
        }
    }

    insertRecursive2(node, current) {
        // default current to root if no current exists
        if (current === undefined) {
            current = this.root;
        };

        // if empty tree, new node becomes root
        if (current === null) {
            this.root = node;
            return;
        };

        if (current.val > node.val) { // go left
            // check if null and insert
            if (current.left === null) { // <-- base case for inserting left
                current.left = node;
                return;
            } else {
                // otherwise recurse left
                return this.insert(node, current.left); // <-- move current to current.left
            }
        } else if (current.val < node.val) { // go right
            // check if null and insert
            if (current.right === null) { // <-- base case for inserting left
                current.right = node;
                return;
            } else {
                // otherwise recurse right
                return this.insert(node, current.right);
            }
        }
    };

    insertRecursive(newVal, curr = this.root) {
        let newNode = new BSTNode(newVal);
        if (!this.root) {
            this.root = newNode;
            return;
        }

        if (newVal > curr.data) {
            if (!curr.right) {
                // base case
                curr.right = newNode;
                return;
            } else {
                return this.insertRecursive(newVal, curr.right);
            }
        } else {
            if (!curr.left) {
                // base case
                curr.left = newNode;
                return;
            } else {
                return this.insertRecursive(newVal, curr.left);
            }
        }

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