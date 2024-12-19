const {Stack, Node} = require('./Stack')
const {Queue} = require('./Queue')

  /**
   * Compares 2 queues to see if they are equal.
   * Avoid indexing the queue items directly via bracket notation, use the
   * queue methods instead for practice.
   * Use no extra array or objects.
   * The queues should be returned to their original order when done.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Queue} q1 q2 The queues to be compared 
   * @returns {boolean} Whether all the items of the two queues are equal and
   *    in the same order.
   */
// Please note that line 20, and 21 wont' work because there is no 
// constructor that provide a queue and enqueue everything into that new queue
// If you want to have a copiedQueue, you need to enqueue each item
function compareQueue(q1, q2){
  if(size(q1) !== size(q2)){
    return false;
  } 

  let isMatch = true;
  const copiedQueue = new Queue();
  const copiedQueue2 = new Queue();
  while (!q1.isEmpty() && !q2.isEmpty()){ 
  let dequeueItem = q1.dequeue();
  let dequeueItem2 = q2.dequeue();
  if(dequeueItem !== dequeueItem2) {
    isMatch = false;
  }
  copiedQueue.enqueue(dequeueItem);
  copiedQueue2.enqueue(dequeueItem);
  } // q1: abcd   q2: abcd


  // q1: , q2:   copiedQ: abc   copiedQ2 : abcd
  while (!copiedQueue.isEmpty()){
    let enqueueItem = copiedQueue.dequeue();
      q1.enqueue(enqueueItem);
    let enqueueItem2 = copiedQueue2.dequeue();
    q2.enqueue(enqueueItem2);
  }
  // q1: eabcd, q2: abcd  copiedQ:    copiedQ2 : 
    return isMatch;
}

  function size(q){
    let length = 0;
    const tempQ = new Queue()
    while(!q.isEmpty()){
      tempQ.enqueue(q.dequeue());
      length++;
    }
    while(!tempQ.isEmpty()){
      q.enqueue(tempQ.dequeue());
    }
    return length;
  }

  /**
   * Determines if the queue is a palindrome (same items forward and backwards).
   * Avoid indexing queue items directly via bracket notation, instead use the
   * queue methods for practice.
   * Use only 1 stack as additional storage, no other arrays or objects.
   * The queue should be returned to its original order when done.
   * - Time: O(?).
   * - Space: O(?).
   * @returns {boolean}
   */
function isPalindrome(q){}

var test1 = new Queue();
test1.enqueue("a");
test1.enqueue("b");
test1.enqueue("c");
test1.enqueue("d");
test1.printQueue();


var test2 = new Queue();
test2.enqueue("a");
test2.enqueue("b");
test2.enqueue("c");
test2.enqueue("d");

var test3 = new Queue();
test3.enqueue("a");
test3.enqueue("b");
test3.enqueue("c");
test3.enqueue("b");
test3.enqueue("a");

var test4 = new Queue();
test4.enqueue("a");
test4.enqueue("b");
test4.enqueue("c");
test4.enqueue("d");
test4.enqueue("e");



console.log(compareQueue(test1, test3), "|| expected: false") // expected: false
test1.printQueue();
test3.printQueue();
console.log(compareQueue(test1, test2), "|| expected: true") // expected: true
console.log("==== Bonus: Uneven but matches until the end of 1 queue ====");
console.log(compareQueue(test2, test4), "|| expected: false") // expected: false
console.log(isPalindrome(test2), "|| expected: false"); // expected : false
console.log(isPalindrome(test3), "|| expected: true"); // expected : true