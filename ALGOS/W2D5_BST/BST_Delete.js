// http://btv.melezinek.cz/binary-search-tree.html
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

    min(current = this.root) {
        if (this.isEmpty()) return null;

        while (current.left != null) {
            current = current.left;
        }
        return current.data;
    }

    // minRecursive(current = this.root) {

    getSmallestFromSubtree(current = this.root) {
        // If the root is null
        if (!this.root) return null;
        //check if the current has .left
        if (current.left === null) {
            //return current node
            return current.data;
        } else {
            //put current.left to the recursive call
            return this.getSmallestFromSubtree(current.left);
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

    // PreOrder (DFS - Depth First Search)
    // (Root / Parent, Left, Right)
    // 25, 15, 10, 4, 12, 22, 18, 50, 35, 31, 44, 70, 66, 90
    // optimal order for rebuilding a BST
    printPreOrder(current, arr = []) {
        if (current === undefined) {
            current = this.root;
        }

        if (current) {
            // read everything, then recurse
            console.log(current.val);
            arr.push(current.val);
            this.printPreOrder(current.left, arr);
            this.printPreOrder(current.right, arr);
        }

        return arr;
    }

    // InOrder (DFS)
    // (Left, Root / Parent, Right)
    // 4, 10, 12, 15, 18, 22, 25, 31, 35, 44, 50, 66, 70, 90
    // Sorted data!
    printInOrder(current = this.root, arr = []) {
        if (current) {
            // read everything, then recurse
            this.printPreOrder(current.left);
            console.log(current.val);
            arr.push(current.data);
            this.printPreOrder(current.right);
        }
        return arr;

    }

    // PostOrder (DFS)
    // (Left, Right, Root / PArent)
    // 4, 12, 10, 18, 22, 15, 31, 44, 35, 66, 90, 70, 50, 25
    printPostOrder(current = this.root, arr = []) {
        if (current) {
            // read everything, then recurse
            this.printPreOrder(current.left);
            this.printPreOrder(current.right);
            console.log(current.val);
            arr.push(current.data);
        }
        return arr;

    }

    // findAndDelete
    delete(val, current) {
        // - does it exist?
        // AND
        // - is it the root?
        // AND
        // - does it have one child?
        // - does it have two children?
        // - does it have no children?
        // hints: - try swapping with the smallest of the right subtree or the largest of the left subtree.
        //        - you may use helper functions like this.getSmallestFromSubtree(current)
        //        - you may swap values 👈👀
        // look for largest of the left OR smallest of the right - to preserve the order of the BST
        // -- GOAL -> boil down the node to delete into a single leaf => solved!

    }

    // *********************** BONUS**************************

    // Delete a node from the BST, the node should be selected based on the following rules:
    // 1. If the node has no children, simply remove it
    // 2. If the node has one child, simply replace the node with its child
    // 3. If the node has two children, replace the node with the next larger node (inOrder successor) and remove that node
    // You may not use any of the delete methods as helpers

    remove(val, current = this.root) {
        if (current === null) {
            return null;
        }

        if (val < current.data) {
            current.left = this.remove(val, current.left);
        } else if (val > current.data) {
            current.right = this.remove(val, current.right);
        } else {
            // Case 1: No child
            if (current.left === null && current.right === null) {
                return null;
            }
            // Case 2: One child
            if (current.left === null) {
                return current.right;
            }
            if (current.right === null) {
                return current.left;
            }
            // Case 3: Two children
            const successor = this.getSmallestFromSubtree(current.right);
            current.data = successor;
            current.right = this.remove(successor, current.right);
        }

        return current;
        // find the node to remove
        // if it has no children, remove it
        // if it has one child, replace it with the child
        // if it has two children, replace it with the next larger node
        //    - find the next larger node
        //    - remove the next larger node
        //    - replace the node to remove with the next larger node

    }

    /**
    * Recursively counts the total number of nodes in this tree.
    */
    size(node = this.root, count = 0) { }

    /**
     * Calculates the height of the tree which is based on how many nodes from
     * top to bottom (whichever side is taller).
     */
    height(node = this.root) {
        // the tree may not be symmetric - find the max* side
    }

    /**
     * Determines if this tree is a full tree. A full tree is a tree where every
     * node has both a left and a right except for the leaf nodes (last nodes)
     */
    isFull(node = this.root) {
        // zero children / 2 children
        // an empty tree is considered full
    }

    /**
  * BFS order: horizontal rows top-down left-to-right.
  * Converts this BST into an array following Breadth First Search order.
  * Example on the fullTree var:
  * [25, 15, 50, 10, 22, 35, 70, 4, 12, 18, 24, 31, 44, 66, 90]
  */
    toArrLevelOrder(current = this.root) {
        //! REQUIRES A QUEUE
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

