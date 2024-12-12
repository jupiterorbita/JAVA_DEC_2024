// http://btv.melezinek.cz/binary-search-tree.html
// https://www.cs.usfca.edu/~galles/visualization/BST.html

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

    // isEmpty
    isEmpty() {
        return this.root === null;
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
    // iterative
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
        // edge case to set current to root
        // edge case to set current to root
        if (current === undefined) {
            current = this.root;
        }

        //FIND
        // decide on which direction
        while (current != null && val != current.val) {
            if (current.val > val) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        console.log(current);
        if (current === null) {
            return "number not found";
        }
        var temp = current;
        current = current.right;
        if (current && current.left) {
            while (current.left.left) {
                current = current.left;
            }
            temp.val = current.left.val;
            current.left = current.left.right;
            return;
        } else if (temp.right) {
            temp.val = current.val;
            temp.right = current.right;
            return;
        }
        current = temp.left;
        if (current && current.right) {
            while (current.right.right) {
                current = current.right;
            }
            temp.val = current.right.val;
            current.right = current.right.left;
        } else if (temp.left) {
            temp.val = current.val;
            temp.left = current.left;
        }
        return;
    }

    // delete - recursive
    // delete a BSTNode with a given value
    // if the value is not in the tree, do nothing
    // if the value is in the tree, delete that node
    // return the deleted node OR null if the node was not found
    deleteNode(val, current = this.root) {
        if (current === null) {
            return null;
        }

        if (val < current.data) {
            current.left = this.deleteNode(val, current.left);
        } else if (val > current.data) {
            current.right = this.deleteNode(val, current.right);
        } else {
            // Case 1: No child or only one child
            if (current.left === null) {
                return current.right;
            } else if (current.right === null) {
                return current.left;
            }

            // Case 2: Two children
            // Find the minimum value in the right subtree
            current.data = this.min(current.right);

            // Delete the minimum value node in the right subtree
            current.right = this.deleteNode(current.data, current.right);
        }

        return current;
    }

    // *********************** BONUS**************************


    /**
     * Recursively counts the total number of nodes in this tree.
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
            count++;
        }
        return count;
    }

    /**
     * Calculates the height of the tree which is based on how many nodes from
     * top to bottom (whichever side is taller).
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
            var leftHeight = this.height2(node.left);
            var rightHeight = this.height2(node.right);
            var level = Math.max(leftHeight, rightHeight) + 1;
        }
        return level;
    }

    /**
     * Determines if this tree is a full tree. A full tree is a tree where every
     * node has both a left and a right except for the leaf nodes (last nodes)
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


fullTree.print();
fullTree.deleteNode(22);
fullTree.print();