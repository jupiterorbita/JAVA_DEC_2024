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

    deleteLeafByValue(val, current = this.root) {
        // TODO
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

    deleteLeafByValue2(val, current = this.root, parent = null) {
        // TODO
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