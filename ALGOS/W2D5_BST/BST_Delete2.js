// http://btv.melezinek.cz/binary-search-tree.html
// https://www.cs.usfca.edu/~galles/visualization/BST.html

class BSTNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    getSmallestFromSubtree(current = this.root) {
        if (!current) return null;

        if (!current.left) {
            return current;
        }
        return this.getSmallestFromSubtree(current.left);
    }


    getLargestFromSubtree(current = this.root) {
        if (!current) return null;

        if (!current.right) {
            return current;
        }
        return this.getLargestFromSubtree(current.right);
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
            `${node.data}`
        );

        this.print(node.left, spaceCnt);
    }

    insert(newVal, curr = this.root) {
        // Handle empty tree case
        if (this.root === null) {
            this.root = new BSTNode(newVal);
            return this;
        }

        // Base case: Insert value in the correct position
        if (newVal < curr.data) {
            if (curr.left === null) {
                curr.left = new BSTNode(newVal);
                return this;
            }
            // Recurse into the left subtree
            return this.insert(newVal, curr.left);
        } else {
            if (curr.right === null) {
                curr.right = new BSTNode(newVal);
                return this;
            }
            // Recurse into the right subtree
            return this.insert(newVal, curr.right);
        }
    }

    deleteLeaf(val, current = this.root, parent = null) {
        // TODO
    }

    // with parent
    deleteByValue(val, current = this.root, parent = null) {
        if (!current) return null; // Value not found

        if (val < current.data) {
            // Search in the left subtree
            return this.deleteByValue(val, current.left, current);
        } else if (val > current.data) {
            // Search in the right subtree
            return this.deleteByValue(val, current.right, current);
        } else {
            // Node with the value is found
            if (!current.left && !current.right) {
                // Case 1: Node is a leaf
                if (parent) {
                    if (parent.left === current) {
                        parent.left = null;
                    } else {
                        parent.right = null;
                    }
                } else {
                    // Node is the root
                    this.root = null;
                }
                return current;
            } else if (current.right) {
                // Case 2: Two children or one right child
                const successor = this.getSmallestFromSubtree(current.right);
                current.data = successor.data; // Swap values
                return this.deleteByValue(successor.data, current.right, current);
            } else {
                // Case 3: One left child
                const predecessor = this.getLargestFromSubtree(current.left);
                current.data = predecessor.data; // Swap values
                return this.deleteByValue(predecessor.data, current.left, current);
            }
        }
    }

    // without parent
    deleteByValue(val, current = this.root) {
        if (!current) {
            // If the node is not found, return null
            return null;
        }

        if (val < current.data) {
            // Traverse to the left subtree
            current.left = this.deleteByValue(val, current.left);
        } else if (val > current.data) {
            // Traverse to the right subtree
            current.right = this.deleteByValue(val, current.right);
        } else {
            // Node to delete is found
            if (!current.left && !current.right) {
                // Case 1: Node is a leaf
                return null;
            } else if (!current.right) {
                // Case 2: Node has only a left child
                return current.left;
            } else if (!current.left) {
                // Case 2: Node has only a right child
                return current.right;
            } else {
                // Case 3: Node has two children
                const successor = this.getSmallestFromSubtree(current.right);
                current.data = successor.data; // Replace with successor's value
                current.right = this.deleteByValue(successor.data, current.right); // Remove successor
            }
        }

        return current; // Return the updated tree
    }

    // !this
    deleteLeafByValue(val, current = this.root) {
        if (!current) {
            // If the tree or subtree is empty, return null
            return null;
        }

        if (val < current.data) {
            // Traverse the left subtree
            current.left = this.deleteLeafByValue(val, current.left);
        } else if (val > current.data) {
            // Traverse the right subtree
            current.right = this.deleteLeafByValue(val, current.right);
        } else {
            // Node with the value is found
            if (!current.left && !current.right) {
                // Node is a leaf, delete it by returning null
                return null;
            }
            // If it's not a leaf, do nothing and return the node
        }

        return current; // Return the current node to keep the tree intact
    }




    deleteLeafByValue2(val, current = this.root, parent = null) {
        if (current === null) {
            // If the tree or subtree is empty, return null
            return null;
        }

        if (val < current.data) {
            // Recurse into the left subtree
            return this.deleteLeafByValue2(val, current.left, current);
        } else if (val > current.data) {
            // Recurse into the right subtree
            return this.deleteLeafByValue2(val, current.right, current);
        } else {
            // Node with the specified value is found
            if (current.left === null && current.right === null) {
                // Confirm it's a leaf node
                if (parent) {
                    // Dereference it from its parent
                    if (parent.left === current) {
                        parent.left = null;
                    } else if (parent.right === current) {
                        parent.right = null;
                    }
                } else {
                    // If the node is the root and it's a leaf, set the root to null
                    this.root = null;
                }
                return current; // Return the deleted leaf node
            } else {
                // If it's not a leaf, do nothing and return null
                return null;
            }
        }
    }




}


const fullTree = new BinarySearchTree();
fullTree
    .insert(25)
    .insert(15)
    .insert(10)
    .insert(22)
    .insert(4)
    .insert(12)
    .insert(18)
    .insert(24)
    .insert(50)
    .insert(35)
    .insert(70)
    .insert(31)
    .insert(44)
    .insert(66)
    .insert(90);

fullTree.print();
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


fullTree.deleteLeafByValue(12);
fullTree.deleteLeafByValue(4);
fullTree.deleteLeafByValue(10);
fullTree.print();