/**
 * Ref: https://www.cs.usfca.edu/~galles/visualization/Heap.html
 * Class to represent a MinHeap which is a Priority Queue optimized for fast
 * retrieval of the minimum value. It is implemented using an array but it is
 * best visualized as a tree structure where each 'node' has left and right
 * children except the 'node' may only have a left child.
 * - parent is located at: Math.floor(i / 2);
 * - left child is located at: i * 2
 * - right child is located at: i * 2 + 1
 */
class MinHeap {
  constructor() {
    /**
     * 0th index not used, so null is a placeholder.
     * Not using 0th index makes calculating the left and right
     * children's index cleaner.
     * This also effectively makes our array start at index 1.
     */
    //             0
    this.heap = [null];
  }

  /**
   * Retrieves the size of the heap, ignoring the null placeholder.
   * @returns {?number} Null if empty.
   */
  size() {
    // - 1 since 0 index is unused
  }

  /**
   * Retrieves the top (minimum number) in the heap without removing it.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {?number} Null if empty.
   */
  top() { }

  /**
   * Inserts a new number into the heap and maintains the heaps order.
   * 1. Push new num to back then.
   * 2. Iteratively swap the new num with it's parent while it is smaller than its parent.
   *   parent : Math.floor(i/2)
   *   left child: i*2   | right child: i*2+1
   * - Time: O(log n) logarithmic due to shiftUp / iterative swapping.
   * - Space: O(1) constant.
   * @param {number} num The num to add.
   */
  insert(num) {
    // TODO
    this.heap.push(num);

    let currentIndex = this.heap.length - 1;
    // For 1-based heap, parent is simply currentIndex/2
    let parentIndex = Math.floor(currentIndex / 2);

    while (this.heap[parentIndex] > this.heap[currentIndex]) {
      // Traditional swap
      let temp = this.heap[currentIndex];
      this.heap[currentIndex] = this.heap[parentIndex];
      this.heap[parentIndex] = temp;

      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex / 2);
    }
  }

  /**
   * Logs the tree horizontally with the root on the left and the index in
   * parenthesis using reverse inorder traversal.
   */
  printHorizontalTree(parentIdx = 1, spaceCnt = 0, spaceIncr = 10) {
    if (parentIdx > this.heap.length - 1) {
      return;
    }

    spaceCnt += spaceIncr;
    this.printHorizontalTree(parentIdx * 2 + 1, spaceCnt);

    console.log(
      " ".repeat(spaceCnt < spaceIncr ? 0 : spaceCnt - spaceIncr) +
      `${this.heap[parentIdx]} (${parentIdx})`
    );

    this.printHorizontalTree(parentIdx * 2, spaceCnt);
  }
}


var minHeapObject = new MinHeap();
minHeapObject.insert(1);
minHeapObject.insert(11);
minHeapObject.insert(10);
minHeapObject.insert(19);
minHeapObject.insert(4);
minHeapObject.insert(3);
console.log(minHeapObject.heap);
// minHeapObject.insert(21);
// minHeapObject.printHorizontalTree();
